// apps/admin/lib/cv/extractText.ts
/* import mammoth from "mammoth";

export async function extractText(
  buffer: Buffer,
  mimeType: string
): Promise<string> {
  if (mimeType.includes("pdf")) {
    // ✅ Dynamically import only at runtime
    const pdf = (await import("pdf-parse-new")).default;
    const data = await pdf(buffer);
    return data.text || "";
  }

  if (
    mimeType.includes(
      "application/vnd.openxmlformats-officedocument.wordprocessingml.document"
    )
  ) {
    const result = await mammoth.extractRawText({ buffer });
    return result.value;
  }

  throw new Error(`Unsupported CV format: ${mimeType}`);
} */