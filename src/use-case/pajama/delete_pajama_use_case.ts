import type { PajamasRepository } from '../../repositories/pajama_repository.js'
import { ResourceNotFoundError } from '../erros/resource_not_found_error.js'

interface DeletePajamaUseCaseRequest {
  pajamaId: string
}

export class DeletePajamaUseCase {
  constructor(private pajamasRepository: PajamasRepository) {}

  async execute({ pajamaId }: DeletePajamaUseCaseRequest): Promise<void> {
    const pajama = await this.pajamasRepository.findById(pajamaId)
    if (!pajama) {
      throw new ResourceNotFoundError()
    }
    await this.pajamasRepository.delete(pajamaId)
  }
}