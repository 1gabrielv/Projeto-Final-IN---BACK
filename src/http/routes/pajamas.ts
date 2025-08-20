import type { FastifyInstance } from 'fastify'
import { createPajama } from '../controller/pajama/create_pajama.js'
import { getAllPajamas } from '../controller/pajama/get_all_pajamas.js'
import { getPajamaById } from '../controller/pajama/get_pajama_by_id.js'
import { updatePajama } from '../controller/pajama/update_pajama.js'
import { updateStock } from '../controller/pajama/update_stock.js'
import { deletePajama } from '../controller/pajama/delete_pajama.js'

export async function pajamasRoutes(app: FastifyInstance) {
  // CRUD Básico de Pijamas
  app.post('/pajamas', createPajama)
  app.get('/pajamas', getAllPajamas)
  app.get('/pajamas/:id', getPajamaById)
  app.patch('/pajamas/:id', updatePajama)
  
  app.delete('/pajamas/:id', deletePajama)

  // Rota específica para atualizar o stock de um TAMANHO
  app.patch('/pajama-sizes/:id/stock', updateStock)
} 