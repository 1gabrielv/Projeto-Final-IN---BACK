import fastify from 'fastify'
import fastifyCors from '@fastify/cors'
import { feedbackRoutes } from './http/routes/feedback.js'
import { pajamasRoutes } from './http/routes/pajamas.js'
import { userRoutes } from './http/routes/user.js'
import { authRoutes } from './http/routes/auth.routes.js' // <— suas rotas de auth (públicas)
import { saleRoutes } from './http/routes/sale.routes.js'
import jwt from '@fastify/jwt'


export const app = fastify()

// Registrar CORS (em dev origin: true permite qualquer origem)
app.register(fastifyCors, { origin: true })

// JWT (usa JWT_SECRET do .env; carregue dotenv no server.ts)
app.register(jwt, { secret: process.env.JWT_SECRET! })

// decorator para proteger rotas específicas (nível de rota, não global)
app.decorate('authenticate', async function (request: any, reply: any) {
  try {
    await request.jwtVerify()
  } catch {
    return reply.code(401).send({ message: 'Não autenticado' })
  }
})



// Aqui é o lugar certo para registrar as suas rotas
app.register(feedbackRoutes)
app.register(pajamasRoutes)
app.register(userRoutes)
app.register(authRoutes)
app.register(saleRoutes)

// OBS: o listen fica no server.ts (ou index.ts) pra manter app puro.
declare module 'fastify' {
  interface FastifyInstance {
    authenticate: any
  }
}
