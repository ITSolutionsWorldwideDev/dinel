// apps/admin/lib/cv/cleanText.ts
export function cleanCvText(text: string, maxLength = 15_000) {
  return text
    .replace(/\s+/g, " ")   // normalize whitespace
    .replace(/Page \d+/gi, "")
    .trim()
    .slice(0, maxLength);
}
