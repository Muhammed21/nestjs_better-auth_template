import { z } from "zod";
import { ColorTokenDTO, CreateColorTokenDTO } from "./color.dto";

export const colorTokenSchema: z.ZodType<ColorTokenDTO> = z.object({
  tokenId: z.string().min(1),
  tokenPath: z.string().min(1),
  resolvedColor: z.object({
    hexValue: z.string().min(1),
    rgbValue: z.string().min(1),
    hslValue: z.string().min(1),
    oklchValue: z.string().min(1),
  }),
});

export const createColorTokenSchema: z.ZodType<CreateColorTokenDTO> = z.object({
  tokenId: z.string().min(1),
  tokenPath: z.string().min(1),
  parentRelationId: z.string().min(1),
  hexValue: z.string().min(1).optional(),
  hslValue: z.string().min(1).optional(),
  oklchValue: z.string().min(1).optional(),
  rgbValue: z.string().min(1).optional(),
});
