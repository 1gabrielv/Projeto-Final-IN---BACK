import prisma from '../../lib/prisma.js'

export async function deleteSaleUseCase(id: string): Promise<boolean> {
  return prisma.$transaction(async (tx) => {
    const sale = await tx.sale.findUnique({ where: { id }, select: { addressId: true } })
    if (!sale) return false

    await tx.sale.delete({ where: { id } })

    const stillUsing = await tx.sale.count({ where: { addressId: sale.addressId } })
    if (stillUsing === 0) {
      await tx.address.delete({ where: { id: sale.addressId } })
    }

    return true
  })
}
