export const CV_ACCEPTED_TYPES = [
  "application/pdf",
  "application/msword",
  "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
];

export const CV_MAX_SIZE = 10 * 1024 * 1024;

export function validateCvFile(file: { type: string; size: number }): string | null {
  if (!CV_ACCEPTED_TYPES.includes(file.type)) return "Please upload a PDF, DOC or DOCX file.";
  if (file.size > CV_MAX_SIZE) return "File must be under 10 MB.";
  return null;
}
