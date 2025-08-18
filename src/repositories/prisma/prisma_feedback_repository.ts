import prisma from '@/lib/prisma.js'
import { Prisma, type Feedback } from '../../../generated/prisma/index.js'
import type { FeedbackRepository } from '../feedback_repository.js'

export class PrismaFeedbackRepository implements FeedbackRepository {
  async create(data: Prisma.FeedbackCreateInput): Promise<Feedback> {
    const feedback = await prisma.feedback.create({ data })
    return feedback
  }

  async findAll(): Promise<Feedback[]> {
    const feedbacks = await prisma.feedback.findMany({
      orderBy: {
        createdAt: 'desc',
      },
    })
    return feedbacks
  }

  async findById(id: string): Promise<Feedback | null> {
    const feedback = await prisma.feedback.findUnique({
      where: { id },
    })
    return feedback
  }

  async delete(id: string): Promise<void> {
    await prisma.feedback.delete({
      where: { id },
    })
  }
}