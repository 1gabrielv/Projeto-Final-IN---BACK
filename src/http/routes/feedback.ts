import type { FastifyInstance } from 'fastify'
import { createFeedback } from '../controller/feedback/create_feedback.js'
import { getAllFeedbacks } from '../controller/feedback/get_all_feedbacks.js'
import { deleteFeedback } from '../controller/feedback/delete_feedback.js'

export async function feedbackRoutes(app: FastifyInstance) {
  app.post('/feedbacks', createFeedback)
  app.get('/feedbacks', getAllFeedbacks)
  app.delete('/feedbacks/:id', deleteFeedback)
}