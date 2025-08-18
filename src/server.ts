import { app } from './app.js' // Importa a aplicação JÁ CONFIGURADA do app.ts
import { env } from './env/index.js'

app
  .listen({
    host: '0.0.0.0',
    port: env.PORT,
  })
  .then(() => {
    console.log(`🚀 HTTP Server running on http://localhost:${env.PORT}`)
  })
  .catch((err) => {
    console.log(err)
    process.exit(1)
  })