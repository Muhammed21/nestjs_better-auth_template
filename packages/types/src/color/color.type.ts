import { z } from "zod";
import { colorTokenSchema } from "./color.schema";

/**
 * Données brutes
 */
export type ColorInput = z.input<typeof colorTokenSchema>;
/**
 * Données validées
 */
export type ColorOutput = z.output<typeof colorTokenSchema>;
