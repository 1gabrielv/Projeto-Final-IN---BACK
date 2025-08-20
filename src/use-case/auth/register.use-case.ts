import prisma from '../../lib/prisma.js'
import { type User } from '../../../generated/prisma/index.js'
import { registerSchema } from './auth.schemas.js'
import { UserAlreadyExistsError } from '../erros/user_already_exists_error.js'
import bcrypt from 'bcryptjs'

export async function registerUseCase(input: unknown): Promise<Partial<User>> {
  const data = registerSchema.parse(input)

  const exists = await prisma.user.findFirst({
    where: { OR: [{ email: data.email }, { username: data.username }] },
  })
  if (exists) throw new UserAlreadyExistsError()

  const passwordHash = await bcrypt.hash(data.password, 8)

  const user = await prisma.user.create({
    data: {
      name: data.name,
      username: data.username,
      email: data.email,
      password: passwordHash,
    },
  })

  // retorna sem a senha
  const { password, ...rest } = user
  return rest
}
