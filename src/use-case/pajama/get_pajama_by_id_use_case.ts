import { type Pajama } from '../../../generated/prisma/index.js'
import type { PajamasRepository } from '../../repositories/pajama_repository.js'
import { ResourceNotFoundError } from '../erros/resource_not_found_error.js'

interface GetPajamaByIdUseCaseRequest {
  pajamaId: string
}

export class GetPajamaByIdUseCase {
  constructor(private pajamasRepository: PajamasRepository) {}

  async execute({ pajamaId }: GetPajamaByIdUseCaseRequest): Promise<Pajama> {
    const pajama = await this.pajamasRepository.findById(pajamaId)
    if (!pajama) {
      throw new ResourceNotFoundError()
    }
    return pajama
  }
}