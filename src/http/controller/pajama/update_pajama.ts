import { z } from 'zod'
import type { FastifyRequest, FastifyReply } from 'fastify'
import { PrismaPajamasRepository } from '../../../repositories/prisma/prisma_pajama_repository.js'
import { UpdatePajamaUseCase } from '../../../use-case/pajama/update_pajama_use_case.js'

export async function updatePajama(request: FastifyRequest, reply: FastifyReply) {
  const paramsSchema = z.object({ id: z.string().uuid() })
  
  const bodySchema = z.object({
    name: z.string().optional(),
    description: z.string().optional(),
    image: z.string().url().optional(),
    price: z.number().optional(),
    season: z.string().optional(),
    type: z.string().optional(),
    gender: z.string().optional(),
    favorite: z.boolean().optional(),      
    onSale: z.boolean().optional(),       
    salePercent: z.number().min(0).optional()
  })

  const { id } = paramsSchema.parse(request.params)
  const data = bodySchema.parse(request.body)

  try {
    const pajamasRepository = new PrismaPajamasRepository()
    const updatePajamaUseCase = new UpdatePajamaUseCase(pajamasRepository)
    
    const updated = await updatePajamaUseCase.execute(id, data as any)
    
    return reply.status(200).send(updated)
  } catch (err) {
    return reply.status(404).send({ message: 'Pijama não encontrado.' })
  }
}