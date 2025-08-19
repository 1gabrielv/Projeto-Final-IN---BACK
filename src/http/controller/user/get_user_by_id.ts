import { z } from 'zod'
import type { FastifyRequest, FastifyReply } from 'fastify'
import { PrismaUserRepository } from '../../../repositories/prisma/prisma_user_repository.js'
import { GetUserByIdUseCase } from '../../../use-case/user/get_user_by_id_use_case.js'
import { ResourceNotFoundError } from '../../../use-case/erros/resource_not_found_error.js'

export async function getUserById(request: FastifyRequest, reply: FastifyReply) {
  const paramsSchema = z.object({
    id: z.string().uuid('ID deve ser um UUID válido'),
  })

  const { id } = paramsSchema.parse(request.params)

  try {
    const userRepository = new PrismaUserRepository()
    const getUserByIdUseCase = new GetUserByIdUseCase(userRepository)
    
    const user = await getUserByIdUseCase.execute({ userId: id })

    // Remover a senha da resposta
    const { password: _, ...userWithoutPassword } = user

    return reply.status(200).send({ user: userWithoutPassword })
  } catch (err) {
    if (err instanceof ResourceNotFoundError) {
      return reply.status(404).send({ message: 'Usuário não encontrado.' })
    }

    if (err instanceof z.ZodError) {
      return reply.status(400).send({ 
        message: 'ID inválido',
        errors: err.issues
      })
    }

    return reply.status(500).send({ message: 'Erro interno do servidor.' })
  }
}
