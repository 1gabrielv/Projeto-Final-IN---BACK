import { z } from 'zod'
import type { FastifyRequest, FastifyReply } from 'fastify'
import { PrismaUserRepository } from '../../../repositories/prisma/prisma_user_repository.js'
import { DeleteUserUseCase } from '../../../use-case/user/delete_user_use_case.js'
import { ResourceNotFoundError } from '../../../use-case/erros/resource_not_found_error.js'

export async function deleteUser(request: FastifyRequest, reply: FastifyReply) {
  const paramsSchema = z.object({
    id: z.string().uuid('ID deve ser um UUID válido'),
  })

  const { id } = paramsSchema.parse(request.params)

  try {
    const userRepository = new PrismaUserRepository()
    const deleteUserUseCase = new DeleteUserUseCase(userRepository)
    
    await deleteUserUseCase.execute({ userId: id })

    return reply.status(200).send({ message: 'Usuário deletado com sucesso.' })
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
