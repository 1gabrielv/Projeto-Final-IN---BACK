import { type FeedbackRepository } from '../../repositories/feedback_repository.js'
import { ResourceNotFoundError } from '../erros/resource_not_found_error.js'

interface DeleteFeedbackUseCaseRequest {
  feedbackId: string
}

export class DeleteFeedbackUseCase {
  constructor(private feedbackRepository: FeedbackRepository) {}

  async execute({ feedbackId }: DeleteFeedbackUseCaseRequest): Promise<void> {
    const feedback = await this.feedbackRepository.findById(feedbackId)
    if (!feedback) {
      throw new ResourceNotFoundError()
    }

    await this.feedbackRepository.delete(feedbackId)
  }
}