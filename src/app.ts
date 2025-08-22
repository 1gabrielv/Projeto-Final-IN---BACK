import fastify from 'fastify'
import fastifyCors from '@fastify/cors'
import { feedbackRoutes } from './http/routes/feedback.js'
import { pajamasRoutes } from './http/routes/pajamas.js'
import { userRoutes } from './http/routes/user.js'
import { authRoutes } from './http/routes/auth.routes.js'
import { saleRoutes } from './http/routes/sale.routes.js'
import jwt from '@fastify/jwt'


export const app = fastify()

app.register(fastifyCors, { origin: true })

app.register(jwt, { secret: process.env.JWT_SECRET! })

app.decorate('authenticate', async function (request: any, reply: any) {
  try {
    await request.jwtVerify()
  } catch {
    return reply.code(401).send({ message: 'Não autenticado' })
  }
})



app.register(feedbackRoutes)
app.register(pajamasRoutes)
app.register(userRoutes)
app.register(authRoutes)
app.register(saleRoutes)

declare module 'fastify' {
  interface FastifyInstance {
    authenticate: any
  }
}
