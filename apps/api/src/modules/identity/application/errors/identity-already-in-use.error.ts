import { ApplicationError } from 'src/shared/domain/errors/application.error';

export class IndetityAlreadyInUseError extends ApplicationError {
  constructor(provider: string) {
    super(`Esta conta do ${provider} já está em uso por outro usuário.`);
  }
}
