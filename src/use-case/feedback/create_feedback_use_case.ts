import { type Feedback } from '../../../generated/prisma/index.js'
import { type FeedbackRepository } from '../../repositories/feedback_repository.js'

interface CreateFeedbackUseCaseRequest {
  name: string
  description: string
  rating: number
}

export class CreateFeedbackUseCase {
  constructor(private feedbackRepository: FeedbackRepository) {}

  async execute({
    name,
    description,
    rating,
  }: CreateFeedbackUseCaseRequest): Promise<Feedback> {
    const feedback = await this.feedbackRepository.create({
      name,
      description,
      rating,
    })
    return feedback
  }
}