// src/erros/invalid_credentials_error.ts
export class InvalidCredentialsError extends Error {
  status = 401
  constructor() {
    super('Credenciais inválidas')
  }
}
