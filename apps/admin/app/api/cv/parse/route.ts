// apps/admin/app/api/cv/parse/route.ts

import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@repo/auth";

// import fetch from "node-fetch";

import { fileTypeFromBuffer } from "file-type";

// import { extractText } from "@/lib/cv/extractText";
import { parseCvText } from "@/lib/cv/parseWithAI";
import { hashCv } from "@/lib/cv/hashCv";
import { findDuplicateCandidate } from "@/lib/cv/findDuplicate";
import { cleanCvText } from "@/lib/cv/cleanText";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const PDF_SERVICE_URL = `${process.env.PDF_SERVICE_URL}/parse-pdf`; //  || "http://localhost:5000/parse-pdf"

export async function POST(req: Request) {
  try {
    const session = await getServerSession(authOptions);
    if (!session?.user?.id) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const contentType = req.headers.get("content-type") || "";

    let buffer: Buffer;
    let tenantId: string;
    let vacancyId: string | null = null;

    console.log("PDF_SERVICE_URL === ", PDF_SERVICE_URL);

    /* ---------------------------------
     MULTIPART FORM (file upload)
  ---------------------------------- */
    if (contentType.includes("multipart/form-data")) {
      const form = await req.formData();

      const file = form.get("file") as File | null;
      tenantId = String(form.get("tenantId"));
      vacancyId = form.get("vacancyId")?.toString() ?? null;

      if (!file || !tenantId) {
        return NextResponse.json(
          { error: "Missing file or tenantId" },
          { status: 400 }
        );
      }

      buffer = Buffer.from(await file.arrayBuffer());
    } else {
      /* ------ JSON (URL-based CV) --------- */
      const body = await req.json();
      const { cvUrl } = body;

      tenantId = body.tenantId;
      vacancyId = body.vacancyId ?? null;

      if (!cvUrl || !tenantId) {
        return NextResponse.json(
          { error: "Missing cvUrl or tenantId" },
          { status: 400 }
        );
      }

      const res = await fetch(cvUrl);
      if (!res.ok) {
        return NextResponse.json(
          { error: "Failed to download CV" },
          { status: 400 }
        );
      }

      buffer = Buffer.from(await res.arrayBuffer());
    }

    const type = await fileTypeFromBuffer(buffer);
    const mimeType = type?.mime ?? "application/pdf";

    // const rawText = await extractText(buffer, mimeType);
    // const text = cleanCvText(rawText);

    let rawText: string;

    if (mimeType.includes("pdf")) {
      const form = new FormData();
      // form.append("file", Buffer.from(buffer), "cv.pdf"); // Node.js-safe
      const blob = new Blob([new Uint8Array(buffer)], {
        type: "application/pdf",
      });

      form.append("file", blob, "cv.pdf");

      console.log("FormData class:", form.constructor.name);

      // const form = new FormData();
      // form.append("file", buffer, { filename: "cv.pdf" });

      const pdfRes = await fetch(PDF_SERVICE_URL, {
        method: "POST",
        body: form as any, // node-fetch requires `any` for FormData
      });

      console.log("PDF status:", pdfRes.status);
      console.log("PDF headers:", Object.fromEntries(pdfRes.headers));

      if (!pdfRes.ok) {
        const responseText = await pdfRes.text();
        console.log("PDF raw response:", responseText);

        return NextResponse.json(
          { error: "Failed to parse PDF" },
          { status: 500 }
        );
      }

      const json = await pdfRes.json();
      rawText =
        typeof json === "object" && json !== null && "text" in json
          ? String((json as any).text)
          : "";
    } else if (
      mimeType.includes(
        "application/vnd.openxmlformats-officedocument.wordprocessingml.document"
      )
    ) {
      const mammoth = await import("mammoth");
      const result = await mammoth.extractRawText({ buffer });
      rawText = result.value;
    } else {
      return NextResponse.json(
        { error: `Unsupported CV format: ${mimeType}` },
        { status: 400 }
      );
    }

    const text = cleanCvText(rawText);

    if (!text || text.length < 200) {
      return NextResponse.json(
        { error: "CV appears to be empty or scanned (OCR required)" },
        { status: 422 }
      );
    }

    const parsed = await parseCvText(text);
    const cvHash = hashCv(text);

    const duplicate = await findDuplicateCandidate(
      tenantId,
      parsed.email,
      parsed.phone,
      cvHash
    );

    return NextResponse.json({
      parsed,
      duplicate,
      cvHash,
      vacancyId,
    });
  } catch (err) {
    console.error("CV parse failed", err);
    return NextResponse.json({ error: "CV parsing failed" }, { status: 500 });
  }
}
