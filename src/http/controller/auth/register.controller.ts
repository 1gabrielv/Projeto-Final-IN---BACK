import type { FastifyReply, FastifyRequest } from 'fastify'
import { registerUseCase } from '../../../use-case/auth/register.use-case.js'

export async function registerController(req: FastifyRequest, reply: FastifyReply) {
  try {
    const user = await registerUseCase(req.body)
    return reply.code(201).send(user)
  } catch (err: any) {
    if (err?.status) return reply.code(err.status).send({ message: err.message })
    if (err?.issues) return reply.code(400).send({ message: 'Body inválido', issues: err.issues })
    req.server.log.error(err)
    return reply.code(500).send({ message: 'Erro ao registrar' })
  }
}
