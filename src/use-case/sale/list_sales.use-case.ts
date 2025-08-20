import prisma from '../../lib/prisma.js'
import { type Sale } from '../../../generated/prisma/index.js'

export async function listSalesUseCase(): Promise<(Sale & { totalPajamas: number; totalCost: number })[]> {
  const sales = await prisma.sale.findMany({
    include: { address: true, pajamas: { include: { pajama: true } } },
    orderBy: { createdAt: 'desc' },
  })

  return sales.map(s => {
    const totalPajamas = s.pajamas.reduce((acc, it) => acc + it.quantity, 0)
    const totalCost = s.pajamas.reduce((acc, it) => acc + it.price * it.quantity, 0)
    return { ...s, totalPajamas, totalCost }
  })
}
