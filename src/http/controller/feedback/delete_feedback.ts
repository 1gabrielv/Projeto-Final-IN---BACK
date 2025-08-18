import { z } from 'zod'
import type { FastifyRequest, FastifyReply } from 'fastify'
import { PrismaFeedbackRepository } from '../../../repositories/prisma/prisma_feedback_repository.js'
import { DeleteFeedbackUseCase } from '../../../use-case/feedback/delete_feedback_use_case.js'
import { ResourceNotFoundError } from '../../../use-case/erros/resource_not_found_error.js'

export async function deleteFeedback(request: FastifyRequest, reply: FastifyReply) {
  const paramsSchema = z.object({ id: z.string().uuid() })
  const { id } = paramsSchema.parse(request.params)

  try {
    const feedbackRepository = new PrismaFeedbackRepository()
    const deleteFeedbackUseCase = new DeleteFeedbackUseCase(feedbackRepository)
    await deleteFeedbackUseCase.execute({ feedbackId: id })

    return reply.status(200).send({ message: 'Feedback deletado com sucesso.' })
  } catch (err) {
    if (err instanceof ResourceNotFoundError) {
      return reply.status(404).send({ message: 'Feedback não encontrado.' })
    }
    throw err
  }
}