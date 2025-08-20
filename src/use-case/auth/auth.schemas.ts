import { z } from 'zod'

export const registerSchema = z.object({
  name: z.string().min(1),
  username: z.string().min(3),
  email: z.string().email(),
  password: z.string().min(6),
})
export type RegisterInput = z.infer<typeof registerSchema>

export const loginSchema = z.object({
  identifier: z
    .string()
    .min(1, "É necessário fornecer um e-mail ou nome de usuário."),

  password: z
    .string()
    .min(6, "A senha deve ter no mínimo 6 caracteres"),
})

export type LoginInput = z.infer<typeof loginSchema>