import type { FastifyInstance } from 'fastify'
import { createUser } from '../controller/user/create_user.js'
import { getAllUsers } from '../controller/user/get_all_users.js'
import { getUserById } from '../controller/user/get_user_by_id.js'
import { updateUser } from '../controller/user/update_user.js'
import { deleteUser } from '../controller/user/delete_user.js'

export async function userRoutes(app: FastifyInstance) {
  app.post('/users', createUser)
  app.get('/users', getAllUsers)
  app.get('/users/:id', getUserById)
  app.put('/users/:id', updateUser)
  app.delete('/users/:id', deleteUser)
}
