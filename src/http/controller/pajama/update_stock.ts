import { z } from 'zod'
import type { FastifyRequest, FastifyReply } from 'fastify'
import { PrismaPajamaSizeRepository } from '../../../repositories/prisma/prisma_pajama_size_repository.js'
import { UpdateStockUseCase } from '../../../use-case/pajama/update_stock_use_case.js'
import { ResourceNotFoundError } from '../../../use-case/erros/resource_not_found_error.js'

export async function updateStock(request: FastifyRequest, reply: FastifyReply) {
    const paramsSchema = z.object({ id: z.string().uuid() })
    const bodySchema = z.object({
        stockQuantity: z.number().int().min(0)
    })

    const { id } = paramsSchema.parse(request.params)
    const { stockQuantity } = bodySchema.parse(request.body)

    try {
        const pajamaSizeRepository = new PrismaPajamaSizeRepository()
        const updateStockUseCase = new UpdateStockUseCase(pajamaSizeRepository)
        const updatedSize = await updateStockUseCase.execute({ pajamaSizeId: id, stockQuantity })
        return reply.status(200).send(updatedSize)
    } catch (err) {
        if (err instanceof ResourceNotFoundError) {
            return reply.status(404).send({ message: 'Tamanho de pijama não encontrado.' })
        }
        throw err
    }
}