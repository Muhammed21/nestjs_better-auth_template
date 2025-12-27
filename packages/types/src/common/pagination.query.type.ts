import { z } from "zod";
import { paginationQuerySchema } from "./pagination.query.schema";

/**
 * Données brutes
 */
export type PaginationQueryInput = z.input<typeof paginationQuerySchema>;
/**
 * Données validées
 */
export type PaginationQueryOutput = z.output<typeof paginationQuerySchema>;
