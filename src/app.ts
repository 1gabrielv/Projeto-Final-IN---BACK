import fastify from 'fastify'
import fastifyCors from '@fastify/cors'
import { feedbackRoutes } from './http/routes/feedback.js' // Corrigido para o seu padrão de nome
import { pajamasRoutes } from './http/routes/pajamas.js'

export const app = fastify()

// Registrar CORS (em dev origin: true permite qualquer origem)
app.register(fastifyCors, { origin: true })

// Aqui é o lugar certo para registrar as suas rotas
app.register(feedbackRoutes)
app.register(pajamasRoutes)

// No futuro, plugins como JWT também serão registrados aqui.