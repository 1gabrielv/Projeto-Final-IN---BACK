import type { FastifyReply, FastifyRequest } from 'fastify'
import { createSaleUseCase } from '@/use-case/sale/create_sale.use-case.js'

export async function createSaleController(req: FastifyRequest, reply: FastifyReply) {
  try {
    const sale = await createSaleUseCase(req.body)
    return reply.code(201).send(sale)
  } catch (err: any) {
    if (err?.issues) return reply.code(400).send({ message: 'Body inválido', issues: err.issues })
    req.server.log.error(err)
    return reply.code(500).send({ message: 'Erro ao criar venda' })
  }
}
