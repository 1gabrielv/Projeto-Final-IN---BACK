import type { FastifyInstance } from 'fastify'
import { registerController } from '../controller/auth/register.controller.js'
import { loginController } from '../controller/auth/login.controller.js'

export async function authRoutes(app: FastifyInstance) {
  app.post('/auth/register', registerController) // públicas
  app.post('/auth/login', loginController)
}
