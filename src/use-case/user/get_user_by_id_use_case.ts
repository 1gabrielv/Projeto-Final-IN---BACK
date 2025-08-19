import { type User } from '../../../generated/prisma/index.js'
import { type UserRepository } from '../../repositories/user_repository.js'
import { ResourceNotFoundError } from '../erros/resource_not_found_error.js'

interface GetUserByIdUseCaseRequest {
  userId: string
}

export class GetUserByIdUseCase {
  constructor(private userRepository: UserRepository) {}

  async execute({ userId }: GetUserByIdUseCaseRequest): Promise<User> {
    const user = await this.userRepository.findById(userId)
    
    if (!user) {
      throw new ResourceNotFoundError()
    }

    return user
  }
}
