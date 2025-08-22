import type { FastifyReply, FastifyRequest } from 'fastify'
import { listSalesUseCase } from '@/use-case/sale/list_sales.use-case.js'

export async function listSalesController(_req: FastifyRequest, reply: FastifyReply) {
  const sales = await listSalesUseCase()
  return reply.send(sales)
}
