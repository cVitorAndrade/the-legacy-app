import {
  ExceptionFilter,
  Catch,
  ArgumentsHost,
  HttpStatus,
} from '@nestjs/common';
import { Request, Response } from 'express';
import { EmailAlreadyInUseError } from 'src/modules/user/application/errors/email-already-in-use.error';
import { ApplicationError } from 'src/shared/domain/errors/application.error';

@Catch(ApplicationError)
export class ApplicationErrorFilter implements ExceptionFilter {
  private errorToHttpMap: Record<string, HttpStatus> = {
    [EmailAlreadyInUseError.name]: HttpStatus.CONFLICT,
  };

  catch(exception: ApplicationError, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();
    const request = ctx.getRequest<Request>();

    const errorName = exception.constructor.name;
    const status = this.errorToHttpMap[errorName] || HttpStatus.BAD_REQUEST;

    response.status(status).json({
      statusCode: status,
      error: errorName,
      message: exception.message,
      timestamp: new Date().toISOString(),
      path: request.url,
    });
  }
}
