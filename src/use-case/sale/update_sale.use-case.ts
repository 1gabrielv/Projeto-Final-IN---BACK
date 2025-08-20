import prisma from '../../lib/prisma.js'
import { updateSaleSchema } from './sale.schemas.js'
import { ResourceNotFoundError } from '../erros/resource_not_found_error.js'
import { type Sale } from '../../../generated/prisma/index.js'

export async function updateSaleUseCase(id: string, input: unknown): Promise<Sale> {
  const data = updateSaleSchema.parse(input)

  const sale = await prisma.sale.findUnique({ where: { id }, select: { addressId: true } })
  if (!sale) throw new ResourceNotFoundError()

  await prisma.sale.update({
    where: { id },
    data: {
      ...(data.payment_method && { paymentMethod: data.payment_method }),
      ...(data.installments && { installments: data.installments }),
      ...(data.card_number && { cardNumber: data.card_number }),
    },
  })

  if (data.address) {
    await prisma.address.update({
      where: { id: sale.addressId },
      data: data.address,
    })
  }

  const updated = await prisma.sale.findUnique({
    where: { id },
    include: { address: true, pajamas: { include: { pajama: true } } },
  })
  if (!updated) throw new ResourceNotFoundError()

  return updated
}
