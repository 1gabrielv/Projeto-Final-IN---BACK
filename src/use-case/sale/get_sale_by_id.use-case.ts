import prisma from '../../lib/prisma.js'
import { type Sale } from '../../../generated/prisma/index.js'

export async function getSaleByIdUseCase(id: string): Promise<(Sale & { totalPajamas: number; totalCost: number }) | null> {
  const s = await prisma.sale.findUnique({
    where: { id },
    include: { address: true, pajamas: { include: { pajama: true } } },
  })
  if (!s) return null

  const totalPajamas = s.pajamas.reduce((acc, it) => acc + it.quantity, 0)
  const totalCost = s.pajamas.reduce((acc, it) => acc + it.price * it.quantity, 0)

  return { ...s, totalPajamas, totalCost }
}
