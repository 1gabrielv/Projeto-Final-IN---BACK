import { type User } from '../../../generated/prisma/index.js'
import { type UserRepository } from '../../repositories/user_repository.js'
import { UserAlreadyExistsError } from '../erros/user_already_exists_error.js'

interface CreateUserUseCaseRequest {
  name: string
  username: string
  email: string
  password: string
}

export class CreateUserUseCase {
  constructor(private userRepository: UserRepository) {}

  async execute({
    name,
    username,
    email,
    password,
  }: CreateUserUseCaseRequest): Promise<User> {
    const userWithSameEmail = await this.userRepository.findByEmail(email)
    
    if (userWithSameEmail) {
      throw new UserAlreadyExistsError()
    }

    const userWithSameUsername = await this.userRepository.findByUsername(username)
    
    if (userWithSameUsername) {
      throw new UserAlreadyExistsError()
    }

    const user = await this.userRepository.create({
      name,
      username,
      email,
      password,
    })
    
    return user
  }
}
