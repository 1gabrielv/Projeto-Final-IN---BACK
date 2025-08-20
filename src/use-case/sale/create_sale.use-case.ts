import prisma from '../../lib/prisma.js'
import type { Prisma } from '../../../generated/prisma/index.js'
import { createSaleSchema } from './sale.schemas.js'

type SaleWithRelations = Prisma.SaleGetPayload<{
  include: { address: true; pajamas: true }
}>

export async function createSaleUseCase(input: unknown): Promise<SaleWithRelations> {
  const data = createSaleSchema.parse(input)

  // preços atuais dos pijamas
  const pjIds = data.items.map(i => i.pajamaId)
  const pj = await prisma.pajama.findMany({
    where: { id: { in: pjIds } },
    select: { id: true, price: true },
  })
  const priceById = new Map(pj.map(p => [p.id, p.price]))

  let total = 0
  const itemsToCreate = data.items.map(i => {
    const unit = priceById.get(i.pajamaId)
    if (unit == null) throw new Error('Pijama inexistente: ' + i.pajamaId)
    total += unit * i.quantity
    return { pajamaId: i.pajamaId, quantity: i.quantity, price: unit }
  })

  const sale = await prisma.sale.create({
    data: {
      buyerName: data.buyer_name,
      cpf: data.cpf,
      paymentMethod: data.payment_method,
      installments: data.installments ?? 1,
      cardNumber: data.card_number ?? null,
      price: total,
      address: {
        create: {
          zipCode: data.address.zip_code,
          state: data.address.state,
          city: data.address.city,
          neighborhood: data.address.neighborhood,
          address: data.address.address,
          number: data.address.number,
        },
      },
      pajamas: { create: itemsToCreate },
    },
    include: { address: true, pajamas: true },
  })

  return sale
}