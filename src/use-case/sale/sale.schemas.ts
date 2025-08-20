import { z } from 'zod'

export const saleItemSchema = z.object({
  pajamaId: z.string().min(1),
  quantity: z.number().int().positive(),
})

export const addressSchema = z.object({
  zip_code: z.string(),
  state: z.string(),
  city: z.string(),
  neighborhood: z.string(),
  address: z.string(),
  number: z.string(),
})

export const createSaleSchema = z.object({
  buyer_name: z.string(),
  cpf: z.string(),
  payment_method: z.string(),
  installments: z.number().int().positive().default(1),
  card_number: z.string().optional(),
  address: addressSchema,
  items: z.array(saleItemSchema).min(1),
})

export const updateSaleSchema = z.object({
  payment_method: z.string().optional(),
  installments: z.number().int().positive().optional(),
  card_number: z.string().optional(),
  address: addressSchema.optional(),
})
