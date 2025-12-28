import { z } from "zod";
import { signInSchema } from "./auth.schema";

/**
 * Données brutes
 */
export type SignInInput = z.input<typeof signInSchema>;
/**
 * Données validées
 */
export type SignInOutput = z.output<typeof signInSchema>;
