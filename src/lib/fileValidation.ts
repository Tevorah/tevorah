export const CV_ACCEPTED_TYPES = [
  "application/pdf",
  "application/msword",
  "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
];

// Vercel serverless functions hard-cap the request body at 4.5MB regardless
// of plan; this must stay below that so our friendly error fires before the
// platform's raw 413 does.
export const CV_MAX_SIZE = 4 * 1024 * 1024;

export function validateCvFile(file: { type: string; size: number }): string | null {
  if (!CV_ACCEPTED_TYPES.includes(file.type)) return "Please upload a PDF, DOC or DOCX file.";
  if (file.size > CV_MAX_SIZE) return "File must be under 4 MB.";
  return null;
}
