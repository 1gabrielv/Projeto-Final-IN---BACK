import { z } from 'zod'
import type { FastifyRequest, FastifyReply } from 'fastify'
import { PrismaUserRepository } from '../../../repositories/prisma/prisma_user_repository.js'
import { CreateUserUseCase } from '../../../use-case/user/create_user_use_case.js'
import { UserAlreadyExistsError } from '../../../use-case/erros/user_already_exists_error.js'

export async function createUser(request: FastifyRequest, reply: FastifyReply) {
  const bodySchema = z.object({
    name: z.string().min(1, 'Nome é obrigatório'),
    username: z.string().min(3, 'Username deve ter pelo menos 3 caracteres'),
    email: z.string().email('E-mail inválido'),
    password: z.string().min(6, 'Senha deve ter pelo menos 6 caracteres'),
  })

  const { name, username, email, password } = bodySchema.parse(request.body)

  try {
    const userRepository = new PrismaUserRepository()
    const createUserUseCase = new CreateUserUseCase(userRepository)
    
    const user = await createUserUseCase.execute({ 
      name, 
      username, 
      email, 
      password 
    })

    // Remover a senha da resposta
    const { password: _, ...userWithoutPassword } = user

    return reply.status(201).send({ 
      message: 'Usuário criado com sucesso.',
      user: userWithoutPassword
    })
  } catch (err) {
    if (err instanceof UserAlreadyExistsError) {
      return reply.status(409).send({ message: err.message })
    }

    if (err instanceof z.ZodError) {
      return reply.status(400).send({ 
        message: 'Dados inválidos',
        errors: err.issues
      })
    }

    return reply.status(500).send({ message: 'Erro interno do servidor.' })
  }
}
