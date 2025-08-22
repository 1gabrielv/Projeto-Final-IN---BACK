import type { FastifyRequest, FastifyReply } from 'fastify'
import { PrismaFeedbackRepository } from '@/repositories/prisma/prisma_feedback_repository.js'
import { GetAllFeedbacksUseCase } from '@/use-case/feedback/get_all_feedbacks_use_case.js'

export async function getAllFeedbacks(request: FastifyRequest, reply: FastifyReply) {
  try {
    const feedbackRepository = new PrismaFeedbackRepository()
    const getAllFeedbacksUseCase = new GetAllFeedbacksUseCase(feedbackRepository)
    const feedbacks = await getAllFeedbacksUseCase.execute()
    
    return reply.status(200).send(feedbacks)
  } catch (err) {
    return reply.status(500).send({ message: 'Erro interno do servidor.' })
  }
}