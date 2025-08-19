import { type UserRepository } from '../../repositories/user_repository.js'
import { ResourceNotFoundError } from '../erros/resource_not_found_error.js'

interface DeleteUserUseCaseRequest {
  userId: string
}

export class DeleteUserUseCase {
  constructor(private userRepository: UserRepository) {}

  async execute({ userId }: DeleteUserUseCaseRequest): Promise<void> {
    const user = await this.userRepository.findById(userId)
    
    if (!user) {
      throw new ResourceNotFoundError()
    }

    await this.userRepository.delete(userId)
  }
}
