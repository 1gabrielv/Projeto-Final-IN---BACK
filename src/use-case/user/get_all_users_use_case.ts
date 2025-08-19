import { type User } from '../../../generated/prisma/index.js'
import { type UserRepository } from '../../repositories/user_repository.js'

export class GetAllUsersUseCase {
  constructor(private userRepository: UserRepository) {}

  async execute(): Promise<User[]> {
    const users = await this.userRepository.findAll()
    return users
  }
}
