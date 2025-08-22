import prisma from '@/lib/prisma.js'
import type { PajamaSize } from '../../../generated/prisma/index.js'
import type { PajamaSizeRepository } from '../pajama_size_repository.js'

export class PrismaPajamaSizeRepository implements PajamaSizeRepository {
  async findById(id: string): Promise<PajamaSize | null> {
    return prisma.pajamaSize.findUnique({
      where: { id },
    })
  }

  async updateStock(id: string, stockQuantity: number): Promise<PajamaSize> {
    return prisma.pajamaSize.update({
      where: { id },
      data: {
        stockQuantity,
      },
    })
  }
}