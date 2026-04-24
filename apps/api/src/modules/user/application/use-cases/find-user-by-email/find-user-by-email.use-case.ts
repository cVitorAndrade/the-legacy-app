import { Injectable } from '@nestjs/common';
import { UserRepository } from 'src/modules/user/domain/repositories/user.repository';

interface FindUserByEmailRequest {
  email: string;
}

@Injectable()
export class FindUserByEmailUseCase {
  constructor(private readonly userRepository: UserRepository) {}

  async execute(findUserByEmailRequest: FindUserByEmailRequest) {
    return this.userRepository.findByEmail(findUserByEmailRequest.email);
  }
}
