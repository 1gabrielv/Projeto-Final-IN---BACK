import { Prisma, type Pajama } from '../../generated/prisma/index.js'

export interface PajamasRepository {
  create(data: Prisma.PajamaCreateInput): Promise<Pajama>
  findAll(): Promise<Pajama[]>
  findById(id: string): Promise<Pajama | null>
  update(id: string, data: Prisma.PajamaUpdateInput): Promise<Pajama>
  delete(id: string): Promise<void>
}