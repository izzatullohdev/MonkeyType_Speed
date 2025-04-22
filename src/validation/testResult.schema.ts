// src/validation/testResult.schema.ts
import { z } from "zod";

export const testResultSchema = z.object({
  body: z.object({
    wpm: z.number().min(1, "WPM kerak").max(200),
    raw: z.number().min(1, "Raw kerak"),
    consistency: z.number().min(0).max(100),
    time: z.number().min(1, "Vaqt noto'g'ri"),
    accuracy: z.number().min(0).max(100),
  }),
  params: z.object({
    userId: z.string().regex(/^\d+$/, "userId raqam bo‘lishi kerak"),
  }),
});
