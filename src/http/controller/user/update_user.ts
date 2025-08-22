import { z } from 'zod'
import type { FastifyRequest, FastifyReply } from 'fastify'
import { PrismaUserRepository } from '@/repositories/prisma/prisma_user_repository.js'
import { UpdateUserUseCase } from '@/use-case/user/update_user_use_case.js'
import { ResourceNotFoundError } from '@/use-case/erros/resource_not_found_error.js'
import { UserAlreadyExistsError } from '@/use-case/erros/user_already_exists_error.js'

export async function updateUser(request: FastifyRequest, reply: FastifyReply) {
  const paramsSchema = z.object({
    id: z.string().uuid('ID deve ser um UUID válido'),
  })

  const bodySchema = z.object({
    name: z.string().min(1, 'Nome é obrigatório').optional(),
    username: z.string().min(3, 'Username deve ter pelo menos 3 caracteres').optional(),
    email: z.string().email('E-mail inválido').optional(),
    password: z.string().min(6, 'Senha deve ter pelo menos 6 caracteres').optional(),
  }).refine(data => Object.keys(data).length > 0, {
    message: 'Pelo menos um campo deve ser fornecido para atualização'
  })

  const { id } = paramsSchema.parse(request.params)
  const { name, username, email, password } = bodySchema.parse(request.body)

  try {
    const userRepository = new PrismaUserRepository()
    const updateUserUseCase = new UpdateUserUseCase(userRepository)
    
    const updateData: {
      userId: string
      name?: string
      username?: string
      email?: string
      password?: string
    } = { userId: id }

    if (name !== undefined) updateData.name = name
    if (username !== undefined) updateData.username = username
    if (email !== undefined) updateData.email = email
    if (password !== undefined) updateData.password = password
    
    const user = await updateUserUseCase.execute(updateData)

    // Remover a senha da resposta
    const { password: _, ...userWithoutPassword } = user

    return reply.status(200).send({ 
      message: 'Usuário atualizado com sucesso.',
      user: userWithoutPassword
    })
  } catch (err) {
    if (err instanceof ResourceNotFoundError) {
      return reply.status(404).send({ message: 'Usuário não encontrado.' })
    }

    if (err instanceof UserAlreadyExistsError) {
      return reply.status(409).send({ message: err.message })
    }

    if (err instanceof z.ZodError) {
      return reply.status(400).send({ 
        message: 'Dados inválidos',
        errors: err.issues
      })
    }

    return reply.status(500).send({ message: 'Erro interno do servidor.' })
  }
}
