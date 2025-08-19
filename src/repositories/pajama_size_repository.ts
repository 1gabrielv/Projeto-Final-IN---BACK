import { type PajamaSize, Prisma } from '../../generated/prisma/index.js'

export interface PajamaSizeRepository {
  findById(id: string): Promise<PajamaSize | null>
  updateStock(id: string, stockQuantity: number): Promise<PajamaSize>
}