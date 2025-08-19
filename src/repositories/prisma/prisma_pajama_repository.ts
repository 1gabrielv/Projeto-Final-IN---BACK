import prisma from '../../lib/prisma.js'
import { Prisma, type Pajama } from '../../../generated/prisma/index.js'
import type { PajamasRepository } from '../pajama_repository.js'

export class PrismaPajamasRepository implements PajamasRepository {
  async create(data: Prisma.PajamaCreateInput): Promise<Pajama> {
    const pajama = await prisma.pajama.create({
      data,
    })
    return pajama
  }

  async findAll(): Promise<Pajama[]> {
    return prisma.pajama.findMany({
      include: {
        sizes: true, // Inclui os tamanhos na listagem
      },
    })
  }

  async findById(id: string): Promise<Pajama | null> {
    return prisma.pajama.findUnique({
      where: { id },
      include: {
        sizes: true, // Inclui os tamanhos na busca por ID
      },
    })
  }

  async update(id: string, data: Prisma.PajamaUpdateInput): Promise<Pajama> {
    const pajama = await prisma.pajama.update({
      where: { id },
      data,
    })
    return pajama
  }

  async delete(id: string): Promise<void> {
    await prisma.pajama.delete({
      where: { id },
    })
  }
}