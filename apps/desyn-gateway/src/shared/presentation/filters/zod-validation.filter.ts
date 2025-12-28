import {
  ExceptionFilter,
  Catch,
  ArgumentsHost,
  HttpStatus,
} from '@nestjs/common';
import { Response } from 'express';
import { ValidationException } from '../exceptions/validation.exception';

interface ValidationExceptionResponse {
  statusCode: number;
  message: string;
  errors: {
    field: string;
    message: string;
    code: string;
    expected?: unknown;
    received?: unknown;
  }[];
}

/**
 * Filtre global pour intercepter les ValidationException
 * et les formater en réponse HTTP propre
 */
@Catch(ValidationException)
export class ZodValidationFilter implements ExceptionFilter {
  catch(exception: ValidationException, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();
    const exceptionResponse =
      exception.getResponse() as ValidationExceptionResponse;

    response.status(HttpStatus.BAD_REQUEST).json({
      statusCode: HttpStatus.BAD_REQUEST,
      message: exceptionResponse.message,
      errors: exceptionResponse.errors,
      timestamp: new Date().toISOString(),
    });
  }
}
