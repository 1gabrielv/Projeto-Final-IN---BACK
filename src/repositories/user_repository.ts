import { Prisma, type User } from '../../generated/prisma/index.js'

export interface UserRepository {
  create(data: Prisma.UserCreateInput): Promise<User>
  findAll(): Promise<User[]>
  findById(id: string): Promise<User | null>
  findByEmail(email: string): Promise<User | null>
  findByUsername(username: string): Promise<User | null>
  update(id: string, data: Prisma.UserUpdateInput): Promise<User>
  delete(id: string): Promise<void>
}
