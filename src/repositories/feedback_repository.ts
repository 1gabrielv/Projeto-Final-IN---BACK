import { Prisma, type Feedback } from '../../generated/prisma/index.js'

export interface FeedbackRepository {
  create(data: Prisma.FeedbackCreateInput): Promise<Feedback>
  findAll(): Promise<Feedback[]>
  findById(id: string): Promise<Feedback | null>
  delete(id: string): Promise<void>
}