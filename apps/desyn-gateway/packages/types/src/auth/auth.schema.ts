import { z } from "zod";
import { SignInDTO } from "./auth.dto";

export const signInSchema: z.ZodType<SignInDTO> = z.object({
  provider: z.enum(["figma"]),
});
