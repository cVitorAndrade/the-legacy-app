import { ApplicationError } from 'src/shared/domain/errors/application.error';

export class InvalidCredentialsError extends ApplicationError {
  constructor() {
    super('Credenciais inválidas.');
  }
}
