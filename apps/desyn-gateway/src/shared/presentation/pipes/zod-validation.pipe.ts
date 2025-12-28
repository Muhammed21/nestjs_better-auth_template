import { Injectable, PipeTransform } from '@nestjs/common';
import { z, ZodError } from 'zod';
import { ValidationException } from '../exceptions/validation.exception';

/**
 * Pipe de validation personnalisé utilisant Zod
 */
@Injectable()
export class ZodValidationPipe<
  T extends z.ZodTypeAny,
> implements PipeTransform {
  constructor(private schema: T) {}

  transform(value: unknown): z.infer<T> {
    try {
      return this.schema.parse(value);
    } catch (error) {
      if (error instanceof ZodError) {
        throw new ValidationException(error);
      }
      throw error;
    }
  }
}
