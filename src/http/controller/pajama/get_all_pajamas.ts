import type { FastifyRequest, FastifyReply } from 'fastify'
import { PrismaPajamasRepository } from '../../../repositories/prisma/prisma_pajama_repository.js'
import { GetAllPajamasUseCase } from '../../../use-case/pajama/get_all_pajamas_use_case.js'

export async function getAllPajamas(request: FastifyRequest, reply: FastifyReply) {
  const pajamasRepository = new PrismaPajamasRepository()
  const getAllPajamasUseCase = new GetAllPajamasUseCase(pajamasRepository)
  const pajamas = await getAllPajamasUseCase.execute()
  return reply.status(200).send(pajamas)
}