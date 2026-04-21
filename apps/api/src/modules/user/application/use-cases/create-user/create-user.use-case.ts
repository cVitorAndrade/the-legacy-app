import { Injectable } from '@nestjs/common';
import { User } from 'src/modules/user/domain/entities/user.entity';
import { UserRepository } from 'src/modules/user/domain/repositories/user.repository';
import { HasheProvider } from 'src/shared/application/cryptography/protocols/hasher.protocol';
import { EmailAlreadyInUseError } from '../../errors/email-already-in-use.error';
import { UsernameAlreadyInUse } from '../../errors/username-already-in-use.error';

interface CreateUserRequest {
  name: string;
  email: string;
  password: string;
  username: string;
}

@Injectable()
export class CreateUserUseCase {
  constructor(
    private readonly userRepository: UserRepository,
    private readonly hashProvider: HasheProvider,
  ) {}

  async execute(createUserRequest: CreateUserRequest) {
    const hasUserWithEmail = await this.userRepository.findByEmail(
      createUserRequest.email,
    );

    if (hasUserWithEmail)
      throw new EmailAlreadyInUseError(createUserRequest.email);

    const hasUserWithUsername = await this.userRepository.findByUsername(
      createUserRequest.username,
    );
    if (hasUserWithUsername)
      throw new UsernameAlreadyInUse(createUserRequest.username);

    const hashedPassword = await this.hashProvider.hash(
      createUserRequest.password,
    );

    const user = new User({
      ...createUserRequest,
      password: hashedPassword,
    });

    await this.userRepository.create(user);

    return user;
  }
}
