import { ApplicationError } from 'src/shared/domain/errors/application.error';

export class EmailAlreadyInUseError extends ApplicationError {
  constructor(email: string) {
    super(`O email: ${email} já está em uso.`);
  }
}
