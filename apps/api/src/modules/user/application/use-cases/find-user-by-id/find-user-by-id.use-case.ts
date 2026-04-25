import { Injectable } from '@nestjs/common';
import { UserRepository } from 'src/modules/user/domain/repositories/user.repository';

interface FindUserByIdRequest {
  id: string;
}

@Injectable()
export class FindUserByIdUseCase {
  constructor(private readonly userRepository: UserRepository) {}

  async execute(findUserByIdRequest: FindUserByIdRequest) {
    return await this.userRepository.findById(findUserByIdRequest.id);
  }
}
