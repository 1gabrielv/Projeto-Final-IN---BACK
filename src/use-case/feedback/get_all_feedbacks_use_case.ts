import { type Feedback } from '../../../generated/prisma/index.js'
import { type FeedbackRepository } from '../../repositories/feedback_repository.js'
export class GetAllFeedbacksUseCase {
  constructor(private feedbackRepository: FeedbackRepository) {}

  async execute(): Promise<Feedback[]> {
    const feedbacks = await this.feedbackRepository.findAll()
    return feedbacks
  }
}