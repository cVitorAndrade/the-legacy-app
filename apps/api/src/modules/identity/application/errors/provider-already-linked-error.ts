import { ApplicationError } from 'src/shared/domain/errors/application.error';

export class ProviderAlreadyLinked extends ApplicationError {
  constructor(provider: string) {
    super(`Você já possui uma conta via ${provider} vinculada a este perfil.`);
  }
}
