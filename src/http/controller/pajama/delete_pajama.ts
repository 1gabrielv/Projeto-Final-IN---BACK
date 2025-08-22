import { z } from 'zod'
import type { FastifyRequest, FastifyReply } from 'fastify'
import { PrismaPajamasRepository } from '@/repositories/prisma/prisma_pajama_repository.js'
import { DeletePajamaUseCase } from '@/use-case/pajama/delete_pajama_use_case.js'
import { ResourceNotFoundError } from '@/use-case/erros/resource_not_found_error.js'

export async function deletePajama(request: FastifyRequest, reply: FastifyReply) {
  const paramsSchema = z.object({ id: z.string().uuid() })
  const { id } = paramsSchema.parse(request.params)
  
  try {
    const pajamasRepository = new PrismaPajamasRepository()
    const deletePajamaUseCase = new DeletePajamaUseCase(pajamasRepository)
    await deletePajamaUseCase.execute({ pajamaId: id })
    return reply.status(200).send({ message: 'Pijama deletado com sucesso.' })
  } catch (err) {
    if (err instanceof ResourceNotFoundError) {
        return reply.status(404).send({ message: 'Pijama não encontrado.' })
    }
    throw err
  }
}