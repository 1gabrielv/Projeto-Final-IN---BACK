import { type Pajama } from '../../../generated/prisma/index.js'
import type { PajamasRepository } from '../../repositories/pajama_repository.js'

interface CreatePajamaUseCaseRequest {
  name: string
  description: string
  image: string
  price: number
  season: string
  type: string
  gender: string
}

export class CreatePajamaUseCase {
  constructor(private pajamasRepository: PajamasRepository) {}

  async execute(data: CreatePajamaUseCaseRequest): Promise<Pajama> {
    const pajama = await this.pajamasRepository.create({
      ...data,
      sizes: {
        create: [
          { size: 'PP', stockQuantity: 0 },
          { size: 'P', stockQuantity: 0 },
          { size: 'M', stockQuantity: 0 },
          { size: 'G', stockQuantity: 0 },
          { size: 'GG', stockQuantity: 0 },
        ],
      },
    })
    return pajama
  }
}