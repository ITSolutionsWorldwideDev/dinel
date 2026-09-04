import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

// Nodemailer requires the Node.js runtime.
export const runtime = "nodejs";

// Optional: prevent very long requests from hanging.
export const maxDuration = 30;

export async function POST(req: NextRequest) {
  try {
    // --------------------------------------------------
    // CHECK ENVIRONMENT VARIABLES
    // --------------------------------------------------

    const SMTP_HOST = process.env.SMTP_HOST;
    const SMTP_PORT = process.env.SMTP_PORT;
    const SMTP_USER = process.env.SMTP_USER;
    const SMTP_PASS = process.env.SMTP_PASS;
    const SMTP_SECURE = process.env.SMTP_SECURE;
    const MAIL_TO = process.env.MAIL_TO;

    if (!SMTP_HOST) {
      console.error("Missing environment variable: SMTP_HOST");
      return NextResponse.json(
        { error: "Server configuration error: SMTP_HOST is missing." },
        { status: 500 }
      );
    }

    if (!SMTP_USER) {
      console.error("Missing environment variable: SMTP_USER");
      return NextResponse.json(
        { error: "Server configuration error: SMTP_USER is missing." },
        { status: 500 }
      );
    }

    if (!SMTP_PASS) {
      console.error("Missing environment variable: SMTP_PASS");
      return NextResponse.json(
        { error: "Server configuration error: SMTP_PASS is missing." },
        { status: 500 }
      );
    }

    // Microsoft 365 SMTP normally uses:
    // Host: smtp.office365.com
    // Port: 587
    // Secure: false
    const port = Number(SMTP_PORT || 587);

    const secure =
      SMTP_SECURE === "true"
        ? true
        : false;

    const mailTo = MAIL_TO || SMTP_USER;

    // --------------------------------------------------
    // CREATE SMTP TRANSPORTER
    // --------------------------------------------------

    const transporter = nodemailer.createTransport({
      host: SMTP_HOST,
      port,
      secure,

      auth: {
        user: SMTP_USER,
        pass: SMTP_PASS,
      },

      // Helpful for Microsoft 365 / TLS on port 587
      tls: {
        minVersion: "TLSv1.2",
      },

      connectionTimeout: 15000,
      greetingTimeout: 15000,
      socketTimeout: 20000,
    });

    // --------------------------------------------------
    // VERIFY SMTP CONNECTION
    // --------------------------------------------------

    try {
      await transporter.verify();

      console.log("SMTP connection verified successfully.");
    } catch (smtpError: any) {
      console.error("SMTP verification failed:", {
        message: smtpError?.message,
        code: smtpError?.code,
        response: smtpError?.response,
        command: smtpError?.command,
      });

      return NextResponse.json(
        {
          error: "SMTP connection/authentication failed.",
          details: smtpError?.message || "Unknown SMTP error.",
        },
        { status: 500 }
      );
    }

    // --------------------------------------------------
    // READ FORM DATA
    // --------------------------------------------------

    const formData = await req.formData();

    const mode = String(formData.get("mode") || "").trim();

    console.log("Enquiry mode:", mode);

    // ==================================================
    // HIRING ENQUIRY
    // ==================================================

    if (mode === "hiring") {
      const companyName = String(
        formData.get("companyName") || ""
      ).trim();

      const contactPerson = String(
        formData.get("contactPerson") || ""
      ).trim();

      const email = String(
        formData.get("email") || ""
      ).trim();

      const phone = String(
        formData.get("phone") || ""
      ).trim();

      const category = String(
        formData.get("category") || ""
      ).trim();

      const positions = String(
        formData.get("positions") || ""
      ).trim();

      const jobDescription = String(
        formData.get("jobDescription") || ""
      ).trim();

      const budget = String(
        formData.get("budget") || ""
      ).trim();

      const jobDescriptionFile =
        formData.get("jobDescriptionFile");

      // --------------------------------------------------
      // VALIDATION
      // --------------------------------------------------

      if (
        !companyName ||
        !contactPerson ||
        !email ||
        !category ||
        !jobDescription
      ) {
        return NextResponse.json(
          {
            error:
              "Please fill in all required hiring enquiry fields.",
          },
          { status: 400 }
        );
      }

      // --------------------------------------------------
      // ATTACHMENT
      // --------------------------------------------------

      const attachments: {
        filename: string;
        content: Buffer;
        contentType?: string;
      }[] = [];

      if (
        jobDescriptionFile &&
        jobDescriptionFile instanceof File &&
        jobDescriptionFile.size > 0
      ) {
        // 10 MB limit
        if (jobDescriptionFile.size > 10 * 1024 * 1024) {
          return NextResponse.json(
            {
              error:
                "Job description document must be smaller than 10 MB.",
            },
            { status: 400 }
          );
        }

        const buffer = Buffer.from(
          await jobDescriptionFile.arrayBuffer()
        );

        attachments.push({
          filename: jobDescriptionFile.name,
          content: buffer,
          contentType:
            jobDescriptionFile.type ||
            "application/octet-stream",
        });
      }

      // --------------------------------------------------
      // EMAIL HTML
      // --------------------------------------------------

      const html = `
        <!DOCTYPE html>
        <html>
          <head>
            <meta charset="UTF-8" />
            <title>New Hiring Enquiry</title>
          </head>

          <body style="font-family: Arial, Helvetica, sans-serif; line-height: 1.6; color: #222;">

            <h2 style="color: #164E59;">
              New Hiring Enquiry — Staff Outsourcing
            </h2>

            <table
              cellpadding="8"
              cellspacing="0"
              style="border-collapse: collapse; width: 100%; max-width: 700px;"
            >

              <tr>
                <td style="border: 1px solid #ddd;">
                  <strong>Company</strong>
                </td>
                <td style="border: 1px solid #ddd;">
                  ${escapeHtml(companyName)}
                </td>
              </tr>

              <tr>
                <td style="border: 1px solid #ddd;">
                  <strong>Contact Person</strong>
                </td>
                <td style="border: 1px solid #ddd;">
                  ${escapeHtml(contactPerson)}
                </td>
              </tr>

              <tr>
                <td style="border: 1px solid #ddd;">
                  <strong>Email</strong>
                </td>
                <td style="border: 1px solid #ddd;">
                  ${escapeHtml(email)}
                </td>
              </tr>

              <tr>
                <td style="border: 1px solid #ddd;">
                  <strong>Phone</strong>
                </td>
                <td style="border: 1px solid #ddd;">
                  ${escapeHtml(phone || "-")}
                </td>
              </tr>

              <tr>
                <td style="border: 1px solid #ddd;">
                  <strong>Category</strong>
                </td>
                <td style="border: 1px solid #ddd;">
                  ${escapeHtml(category)}
                </td>
              </tr>

              <tr>
                <td style="border: 1px solid #ddd;">
                  <strong>KVK Number</strong>
                </td>
                <td style="border: 1px solid #ddd;">
                  ${escapeHtml(positions || "-")}
                </td>
              </tr>

              <tr>
                <td style="border: 1px solid #ddd;">
                  <strong>KVK Number</strong>
                </td>
                <td style="border: 1px solid #ddd;">
                  ${escapeHtml(budget || "-")}
                </td>
              </tr>

            </table>

            <h3>Job Description</h3>

            <div
              style="
                background: #f7f7f7;
                padding: 15px;
                border-radius: 6px;
                white-space: pre-wrap;
              "
            >
              ${escapeHtml(jobDescription)}
            </div>

            ${
              attachments.length
                ? `
                  <p>
                    <strong>Attachment:</strong>
                    The job description document is attached to this email.
                  </p>
                `
                : ""
            }

          </body>
        </html>
      `;

      // --------------------------------------------------
      // SEND HIRING EMAIL
      // --------------------------------------------------

      const info = await transporter.sendMail({
        from: `"Staff Outsourcing" <${SMTP_USER}>`,
        to: mailTo,

        // When you click Reply in Outlook,
        // it will reply to the person who submitted the form.
        replyTo: email,

        subject: `New Hiring Enquiry — ${companyName}`,

        html,

        attachments,
      });

      console.log("Hiring email sent successfully:", {
        messageId: info.messageId,
        response: info.response,
      });

      return NextResponse.json({
        success: true,
        message: "Hiring enquiry submitted successfully.",
      });
    }

    // ==================================================
    // JOB SEEKER
    // ==================================================

    if (mode === "jobseeker") {
      const fullName = String(
        formData.get("fullName") || ""
      ).trim();

      const email = String(
        formData.get("email") || ""
      ).trim();

      const phone = String(
        formData.get("phone") || ""
      ).trim();

      const category = String(
        formData.get("category") || ""
      ).trim();

      const coverMessage = String(
        formData.get("coverMessage") || ""
      ).trim();

      const linkedin = String(
        formData.get("linkedin") || ""
      ).trim();

      const cv = formData.get("cv");

      // --------------------------------------------------
      // VALIDATION
      // --------------------------------------------------

      if (
        !fullName ||
        !email ||
        !category ||
        !cv ||
        !(cv instanceof File) ||
        cv.size === 0
      ) {
        return NextResponse.json(
          {
            error:
              "Please fill in all required fields and upload your CV.",
          },
          { status: 400 }
        );
      }

      // 10 MB CV limit
      if (cv.size > 10 * 1024 * 1024) {
        return NextResponse.json(
          {
            error: "CV must be smaller than 10 MB.",
          },
          { status: 400 }
        );
      }

      // --------------------------------------------------
      // CV ATTACHMENT
      // --------------------------------------------------

      const buffer = Buffer.from(
        await cv.arrayBuffer()
      );

      const attachments = [
        {
          filename: cv.name,
          content: buffer,
          contentType:
            cv.type || "application/octet-stream",
        },
      ];

      // --------------------------------------------------
      // EMAIL HTML
      // --------------------------------------------------

      const html = `
        <!DOCTYPE html>
        <html>
          <head>
            <meta charset="UTF-8" />
            <title>New Job Application</title>
          </head>

          <body style="font-family: Arial, Helvetica, sans-serif; line-height: 1.6; color: #222;">

            <h2 style="color: #164E59;">
              New Job Application — Staff Outsourcing
            </h2>

            <table
              cellpadding="8"
              cellspacing="0"
              style="border-collapse: collapse; width: 100%; max-width: 700px;"
            >

              <tr>
                <td style="border: 1px solid #ddd;">
                  <strong>Full Name</strong>
                </td>
                <td style="border: 1px solid #ddd;">
                  ${escapeHtml(fullName)}
                </td>
              </tr>

              <tr>
                <td style="border: 1px solid #ddd;">
                  <strong>Email</strong>
                </td>
                <td style="border: 1px solid #ddd;">
                  ${escapeHtml(email)}
                </td>
              </tr>

              <tr>
                <td style="border: 1px solid #ddd;">
                  <strong>Phone</strong>
                </td>
                <td style="border: 1px solid #ddd;">
                  ${escapeHtml(phone || "-")}
                </td>
              </tr>

              <tr>
                <td style="border: 1px solid #ddd;">
                  <strong>Category</strong>
                </td>
                <td style="border: 1px solid #ddd;">
                  ${escapeHtml(category)}
                </td>
              </tr>

              <tr>
                <td style="border: 1px solid #ddd;">
                  <strong>LinkedIn / Portfolio</strong>
                </td>
                <td style="border: 1px solid #ddd;">
                  ${escapeHtml(linkedin || "-")}
                </td>
              </tr>

            </table>

            <h3>Cover Message</h3>

            <div
              style="
                background: #f7f7f7;
                padding: 15px;
                border-radius: 6px;
                white-space: pre-wrap;
              "
            >
              ${escapeHtml(coverMessage || "-")}
            </div>

            <p>
              <strong>CV:</strong>
              The applicant's CV is attached to this email.
            </p>

          </body>
        </html>
      `;

      // --------------------------------------------------
      // SEND JOB APPLICATION EMAIL
      // --------------------------------------------------

      const info = await transporter.sendMail({
        from: `"Staff Outsourcing" <${SMTP_USER}>`,
        to: mailTo,

        replyTo: email,

        subject: `New Job Application — ${fullName} (${category})`,

        html,

        attachments,
      });

      console.log("Job application email sent successfully:", {
        messageId: info.messageId,
        response: info.response,
      });

      return NextResponse.json({
        success: true,
        message: "Job application submitted successfully.",
      });
    }

    // ==================================================
    // INVALID MODE
    // ==================================================

    console.error("Invalid enquiry mode:", mode);

    return NextResponse.json(
      {
        error:
          "Invalid or missing enquiry mode.",
      },
      { status: 400 }
    );

  } catch (error: any) {
    // --------------------------------------------------
    // GLOBAL ERROR
    // --------------------------------------------------

    console.error("=================================");
    console.error("ENQUIRY SUBMISSION FAILED");
    console.error("=================================");

    console.error("Message:", error?.message);
    console.error("Code:", error?.code);
    console.error("Response:", error?.response);
    console.error("Command:", error?.command);
    console.error("Stack:", error?.stack);

    return NextResponse.json(
      {
        error:
          error?.message ||
          "Failed to send enquiry. Please try again.",
      },
      { status: 500 }
    );
  }
}

// ======================================================
// HTML ESCAPE HELPER
// ======================================================

function escapeHtml(value: string): string {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}