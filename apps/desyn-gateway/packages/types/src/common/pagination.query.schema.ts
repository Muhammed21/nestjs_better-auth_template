import { z } from "zod";
import type { PaginationQueryDTO } from "./pagination.query.dto";

export const paginationQuerySchema: z.ZodType<PaginationQueryDTO> = z.object({
  page: z.coerce.number().int().positive().default(1),
  limit: z.coerce.number().int().positive().max(100).default(10),
  sortBy: z.string().min(1).default("tokenId"),
  order: z.enum(["asc", "desc"]).default("asc"),
});
