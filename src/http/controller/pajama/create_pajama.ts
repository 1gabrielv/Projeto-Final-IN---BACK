import { z } from 'zod'
import type { FastifyRequest, FastifyReply } from 'fastify'
import { PrismaPajamasRepository } from '../../../repositories/prisma/prisma_pajama_repository.js'
import { CreatePajamaUseCase } from '../../../use-case/pajama/create_pajama_use_case.js'

export async function createPajama(request: FastifyRequest, reply: FastifyReply) {
  const bodySchema = z.object({
    name: z.string(),
    description: z.string(),
    image: z.string().url(),
    price: z.number().positive(),
    season: z.string(),
    type: z.string(),
    gender: z.string(),
  })
  const data = bodySchema.parse(request.body)

  try {
    const pajamasRepository = new PrismaPajamasRepository()
    const createPajamaUseCase = new CreatePajamaUseCase(pajamasRepository)
    await createPajamaUseCase.execute(data)
    return reply.status(201).send({ message: 'Pijama criado com sucesso.' })
  } catch (err) {
    return reply.status(500).send({ message: 'Erro interno do servidor.' })
  }
}