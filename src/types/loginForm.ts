import z from "zod";

import { loginSchema } from "@/schemas/login.schema";

export type LoginFormType = z.infer<typeof loginSchema>;