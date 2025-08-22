import { z } from 'zod'
import type { FastifyRequest, FastifyReply } from 'fastify'
import { PrismaFeedbackRepository } from '@/repositories/prisma/prisma_feedback_repository.js'
import { CreateFeedbackUseCase } from '@/use-case/feedback/create_feedback_use_case.js'

export async function createFeedback(request: FastifyRequest, reply: FastifyReply) {
  const bodySchema = z.object({
    name: z.string(),
    description: z.string(),
    rating: z.number().min(0).max(5),
  })

  const { name, description, rating } = bodySchema.parse(request.body)

  try {
    const feedbackRepository = new PrismaFeedbackRepository()
    const createFeedbackUseCase = new CreateFeedbackUseCase(feedbackRepository)
    await createFeedbackUseCase.execute({ name, description, rating })

    return reply.status(201).send({ message: 'Feedback criado com sucesso.' })
  } catch (err) {
    return reply.status(500).send({ message: 'Erro interno do servidor.' })
  }
}