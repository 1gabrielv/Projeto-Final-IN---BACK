import type { FastifyReply, FastifyRequest } from 'fastify'
import { loginUseCase } from '../../../use-case/auth/login.use-case.js'
import '@fastify/jwt'

export async function loginController(req: FastifyRequest, reply: FastifyReply) {
  try {
    const { id, username } = await loginUseCase(req.body)
    const token = await reply.jwtSign({ sub: id, username })
    return reply.send({ token })
  } catch (err: any) {
    if (err?.status) return reply.code(err.status).send({ message: err.message })
    if (err?.issues) return reply.code(400).send({ message: 'Body inválido', issues: err.issues })
    req.server.log.error(err)
    return reply.code(500).send({ message: 'Erro ao autenticar' })
  }
}
