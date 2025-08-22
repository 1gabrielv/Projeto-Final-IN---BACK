import type { FastifyReply, FastifyRequest } from 'fastify'
import { getSaleByIdUseCase } from '@/use-case/sale/get_sale_by_id.use-case.js'

export async function getSaleByIdController(req: FastifyRequest, reply: FastifyReply) {
  const { id } = req.params as any
  const sale = await getSaleByIdUseCase(id)
  if (!sale) return reply.code(404).send({ message: 'Venda não encontrada' })
  return reply.send(sale)
}
