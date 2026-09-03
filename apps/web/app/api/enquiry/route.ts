import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

// Nodemailer needs the Node.js runtime, not the Edge runtime.
export const runtime = "nodejs";

export async function POST(req: NextRequest) {
  try {
    const formData = await req.formData();
    const mode = formData.get("mode") as string; // "hiring" | "jobseeker"

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT ?? 465),
      secure: process.env.SMTP_SECURE !== "false", // true for port 465, false for 587
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    const mailTo = process.env.MAIL_TO ?? process.env.SMTP_USER ?? "";

    // ---------- HIRING ----------
    if (mode === "hiring") {
      const companyName = formData.get("companyName") as string;
      const contactPerson = formData.get("contactPerson") as string;
      const email = formData.get("email") as string;
      const phone = formData.get("phone") as string;
      const category = formData.get("category") as string;
      const positions = formData.get("positions") as string;
      const jobDescription = formData.get("jobDescription") as string;
      const budget = formData.get("budget") as string;
      const jobDescriptionFile = formData.get("jobDescriptionFile") as File | null;

      if (!companyName || !contactPerson || !email || !category || !jobDescription) {
        return NextResponse.json({ error: "Missing required fields." }, { status: 400 });
      }

      const attachments = [];
      if (jobDescriptionFile && jobDescriptionFile.size > 0) {
        const buffer = Buffer.from(await jobDescriptionFile.arrayBuffer());
        attachments.push({
          filename: jobDescriptionFile.name,
          content: buffer,
          contentType: jobDescriptionFile.type,
        });
      }

      const html = `
        <h2>New Hiring Enquiry — Staff Outsourcing</h2>
        <table cellpadding="6" style="border-collapse: collapse;">
          <tr><td><strong>Company</strong></td><td>${escapeHtml(companyName)}</td></tr>
          <tr><td><strong>Contact Person</strong></td><td>${escapeHtml(contactPerson)}</td></tr>
          <tr><td><strong>Email</strong></td><td>${escapeHtml(email)}</td></tr>
          <tr><td><strong>Phone</strong></td><td>${escapeHtml(phone || "-")}</td></tr>
          <tr><td><strong>Category</strong></td><td>${escapeHtml(category)}</td></tr>
          <tr><td><strong>Number of Positions</strong></td><td>${escapeHtml(positions || "-")}</td></tr>
          <tr><td><strong>Budget / Timeline</strong></td><td>${escapeHtml(budget || "-")}</td></tr>
        </table>
        <h3>Job Description</h3>
        <p style="white-space: pre-wrap;">${escapeHtml(jobDescription)}</p>
        ${attachments.length ? "<p><em>A job description document is attached.</em></p>" : ""}
      `;

      await transporter.sendMail({
        from: process.env.SMTP_USER,
        to: mailTo,
        replyTo: email,
        subject: `New Hiring Enquiry — ${companyName}`,
        html,
        attachments,
      });

      return NextResponse.json({ success: true });
    }

    // ---------- JOB SEEKER ----------
    if (mode === "jobseeker") {
      const fullName = formData.get("fullName") as string;
      const email = formData.get("email") as string;
      const phone = formData.get("phone") as string;
      const category = formData.get("category") as string;
      const coverMessage = formData.get("coverMessage") as string;
      const linkedin = formData.get("linkedin") as string;
      const cv = formData.get("cv") as File | null;

      if (!fullName || !email || !category || !cv || cv.size === 0) {
        return NextResponse.json({ error: "Missing required fields or CV." }, { status: 400 });
      }

      const buffer = Buffer.from(await cv.arrayBuffer());
      const attachments = [{ filename: cv.name, content: buffer, contentType: cv.type }];

      const html = `
        <h2>New Job Application — Staff Outsourcing</h2>
        <table cellpadding="6" style="border-collapse: collapse;">
          <tr><td><strong>Full Name</strong></td><td>${escapeHtml(fullName)}</td></tr>
          <tr><td><strong>Email</strong></td><td>${escapeHtml(email)}</td></tr>
          <tr><td><strong>Phone</strong></td><td>${escapeHtml(phone || "-")}</td></tr>
          <tr><td><strong>Category</strong></td><td>${escapeHtml(category)}</td></tr>
          <tr><td><strong>LinkedIn / Portfolio</strong></td><td>${escapeHtml(linkedin || "-")}</td></tr>
        </table>
        <h3>Cover Message</h3>
        <p style="white-space: pre-wrap;">${escapeHtml(coverMessage || "-")}</p>
        <p><em>The applicant's CV is attached.</em></p>
      `;

      await transporter.sendMail({
        from: process.env.SMTP_USER,
        to: mailTo,
        replyTo: email,
        subject: `New Job Application — ${fullName} (${category})`,
        html,
        attachments,
      });

      return NextResponse.json({ success: true });
    }

    return NextResponse.json({ error: "Invalid or missing mode." }, { status: 400 });
  } catch (error) {
    console.error("Enquiry submission failed:", error);
    return NextResponse.json(
      { error: "Failed to send. Please try again." },
      { status: 500 }
    );
  }
}

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}