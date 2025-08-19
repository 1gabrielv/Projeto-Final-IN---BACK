import { type Pajama } from '../../../generated/prisma/index.js'
import type { PajamasRepository } from '../../repositories/pajama_repository.js'

export class GetAllPajamasUseCase {
  constructor(private pajamasRepository: PajamasRepository) {}

  async execute(): Promise<Pajama[]> {
    const pajamas = await this.pajamasRepository.findAll()
    return pajamas
  }
}