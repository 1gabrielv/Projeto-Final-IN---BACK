import prisma from '../../lib/prisma.js'
import { type User } from '../../../generated/prisma/index.js'
import { loginSchema } from './auth.schemas.js'
import { InvalidCredentialsError } from '../erros/invalid_credentials_error.js'
import bcrypt from 'bcryptjs'

export async function loginUseCase(input: unknown): Promise<Pick<User, 'id' | 'username'>> {
  const data = loginSchema.parse(input)

  const user = await prisma.user.findUnique({ where: { email: data.email } })
  if (!user) throw new InvalidCredentialsError()

  const ok = await bcrypt.compare(data.password, user.password)
  if (!ok) throw new InvalidCredentialsError()

  return { id: user.id, username: user.username }
}
