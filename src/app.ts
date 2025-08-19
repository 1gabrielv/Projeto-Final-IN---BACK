import fastify from 'fastify'
import { feedbackRoutes } from './http/routes/feedback.js'
import { userRoutes } from './http/routes/user.js'

export const app = fastify()

// Aqui é o lugar certo para registrar as suas rotas
app.register(feedbackRoutes)
app.register(userRoutes)

// No futuro, plugins como CORS e JWT também serão registrados aqui.