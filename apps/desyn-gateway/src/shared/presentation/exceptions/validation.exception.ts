import { BadRequestException } from '@nestjs/common';
import { ZodError } from 'zod';

/**
 * Exception personnalisée pour les erreurs de validation Zod
 * Transforme les erreurs Zod en format HTTP lisible
 */
export class ValidationException extends BadRequestException {
  constructor(private readonly zodError: ZodError) {
    super({
      statusCode: 400,
      message: 'Validation failed',
      errors: ValidationException.formatZodErrors(zodError),
    });
  }

  private static formatZodErrors(error: ZodError) {
    return error.issues.map((err) => ({
      field: err.path.join('.'),
      message: err.message,
      code: err.code,
      expected: 'expected' in err ? err.expected : undefined,
      received: 'received' in err ? err.received : undefined,
    }));
  }

  getZodError(): ZodError {
    return this.zodError;
  }
}
