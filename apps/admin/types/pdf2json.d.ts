// apps/admin/types/pdf2json.d.ts
declare module "pdf2json" {
  export default class PdfReader {
    parseBuffer(
      buffer: Buffer,
      callback: (err: any, item: { text?: string } | null) => void
    ): void;
  }
}
