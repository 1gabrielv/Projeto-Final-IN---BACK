import type { FastifyInstance } from 'fastify'
import { loginController } from '../controller/auth/login.controller.js'

export async function authRoutes(app: FastifyInstance) {
  app.post('/auth/login', loginController)
}
