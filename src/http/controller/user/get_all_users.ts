import type { FastifyRequest, FastifyReply } from 'fastify'
import { PrismaUserRepository } from '../../../repositories/prisma/prisma_user_repository.js'
import { GetAllUsersUseCase } from '../../../use-case/user/get_all_users_use_case.js'

export async function getAllUsers(request: FastifyRequest, reply: FastifyReply) {
  try {
    const userRepository = new PrismaUserRepository()
    const getAllUsersUseCase = new GetAllUsersUseCase(userRepository)
    
    const users = await getAllUsersUseCase.execute()

    // Remover senhas da resposta
    const usersWithoutPassword = users.map(user => {
      const { password: _, ...userWithoutPassword } = user
      return userWithoutPassword
    })

    return reply.status(200).send({ users: usersWithoutPassword })
  } catch (err) {
    return reply.status(500).send({ message: 'Erro interno do servidor.' })
  }
}
