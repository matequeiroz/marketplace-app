import z from "zod";

import { registerSchema } from "@/schemas/register.schema";

export type RegisterFormType = z.infer<typeof registerSchema>;