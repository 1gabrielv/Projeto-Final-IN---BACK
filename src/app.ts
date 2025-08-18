import fastify from 'fastify'
import { feedbackRoutes } from './http/routes/feedback.js' // Corrigido para o seu padrão de nome

export const app = fastify()

// Aqui é o lugar certo para registrar as suas rotas
app.register(feedbackRoutes)

// No futuro, plugins como CORS e JWT também serão registrados aqui.