import { Prisma, type Pajama } from '../../../generated/prisma/index.js'
import type { PajamasRepository } from '../../repositories/pajama_repository.js'
import { ResourceNotFoundError } from '../erros/resource_not_found_error.js'

export class UpdatePajamaUseCase {
  constructor(private pajamasRepository: PajamasRepository) {}

  async execute(id: string, data: Prisma.PajamaUpdateInput): Promise<Pajama> {
    const pajama = await this.pajamasRepository.findById(id)
    if (!pajama) {
      throw new ResourceNotFoundError()
    }

    const updated = await this.pajamasRepository.update(id, data)
    return updated
  }
}
