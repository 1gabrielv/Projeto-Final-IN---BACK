import type { FastifyReply, FastifyRequest } from 'fastify'
import { deleteSaleUseCase } from '@/use-case/sale/delete_sale.use-case.js'

export async function deleteSaleController(req: FastifyRequest, reply: FastifyReply) {
  const { id } = req.params as any
  const ok = await deleteSaleUseCase(id)
  return reply.code(ok ? 204 : 404).send()
}
