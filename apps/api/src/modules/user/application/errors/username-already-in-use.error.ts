import { ApplicationError } from 'src/shared/domain/errors/application.error';

export class UsernameAlreadyInUse extends ApplicationError {
  constructor(username: string) {
    super(`O username: ${username} já está em uso.`);
  }
}
