import type { FastifyReply, FastifyRequest } from 'fastify'
import { updateSaleUseCase } from '@/use-case/sale/update_sale.use-case.js'

export async function updateSaleController(req: FastifyRequest, reply: FastifyReply) {
  try {
    const { id } = req.params as any
    const s = await updateSaleUseCase(id, req.body)
    return reply.send(s)
  } catch (err: any) {
    if (err?.status) return reply.code(err.status).send({ message: err.message })
    if (err?.issues) return reply.code(400).send({ message: 'Body inválido', issues: err.issues })
    req.server.log.error(err)
    return reply.code(500).send({ message: 'Erro ao atualizar venda' })
  }
}
