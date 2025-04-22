import { z } from "zod";

export const registerUserSchema = z.object({
  body: z.object({
    name: z.string().min(2, "Ism juda qisqa"),
    phone: z.string().regex(/^[+]?998\d{9}$/, "Telefon raqam noto'g'ri"),
  }),
});
