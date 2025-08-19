import { type PajamaSize } from '../../../generated/prisma/index.js'
import type { PajamaSizeRepository } from '../../repositories/pajama_size_repository.js'
import { ResourceNotFoundError } from '../erros/resource_not_found_error.js'

interface UpdateStockUseCaseRequest {
  pajamaSizeId: string
  stockQuantity: number
}

export class UpdateStockUseCase {
  constructor(private pajamaSizeRepository: PajamaSizeRepository) {}

  async execute({
    pajamaSizeId,
    stockQuantity,
  }: UpdateStockUseCaseRequest): Promise<PajamaSize> {
    const pajamaSize = await this.pajamaSizeRepository.findById(pajamaSizeId)
    if (!pajamaSize) {
      throw new ResourceNotFoundError()
    }

    const updatedPajamaSize = await this.pajamaSizeRepository.updateStock(
      pajamaSizeId,
      stockQuantity,
    )
    return updatedPajamaSize
  }
}