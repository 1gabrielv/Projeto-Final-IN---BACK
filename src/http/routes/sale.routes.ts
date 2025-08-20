import type { FastifyInstance } from 'fastify'
import { createSaleController } from '../controller/sale/create_sale.controller.js'
import { listSalesController } from '../controller/sale/list_sales.controller.js'
import { getSaleByIdController } from '../controller/sale/get_sale_by_id.controller.js'
import { updateSaleController } from '../controller/sale/update_sale.controller.js'
import { deleteSaleController } from '../controller/sale/delete_sale.controller.js'

export async function saleRoutes(app: FastifyInstance) {
  app.addHook('onRequest', app.authenticate) // protege só /sales

  app.post('/', createSaleController)
  app.get('/', listSalesController)
  app.get('/:id', getSaleByIdController)
  app.put('/:id', updateSaleController)
  app.delete('/:id', deleteSaleController)
}