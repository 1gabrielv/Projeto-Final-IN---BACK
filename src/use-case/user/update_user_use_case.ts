import { type User } from '../../../generated/prisma/index.js'
import { type UserRepository } from '../../repositories/user_repository.js'
import { ResourceNotFoundError } from '../erros/resource_not_found_error.js'
import { UserAlreadyExistsError } from '../erros/user_already_exists_error.js'

interface UpdateUserUseCaseRequest {
  userId: string
  name?: string
  username?: string
  email?: string
  password?: string
}

export class UpdateUserUseCase {
  constructor(private userRepository: UserRepository) {}

  async execute({
    userId,
    name,
    username,
    email,
    password,
  }: UpdateUserUseCaseRequest): Promise<User> {
    const existingUser = await this.userRepository.findById(userId)
    
    if (!existingUser) {
      throw new ResourceNotFoundError()
    }

    // Verificar se email já existe (apenas se estiver sendo atualizado)
    if (email && email !== existingUser.email) {
      const userWithSameEmail = await this.userRepository.findByEmail(email)
      if (userWithSameEmail) {
        throw new UserAlreadyExistsError()
      }
    }

    // Verificar se username já existe (apenas se estiver sendo atualizado)
    if (username && username !== existingUser.username) {
      const userWithSameUsername = await this.userRepository.findByUsername(username)
      if (userWithSameUsername) {
        throw new UserAlreadyExistsError()
      }
    }

    const updateData: any = {}
    
    if (name !== undefined) updateData.name = name
    if (username !== undefined) updateData.username = username
    if (email !== undefined) updateData.email = email
    if (password !== undefined) updateData.password = password

    const user = await this.userRepository.update(userId, updateData)
    
    return user
  }
}
