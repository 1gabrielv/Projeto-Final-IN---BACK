# 🧥 Pijam{IN}ha — Documentação do Projeto

Este documento reúne os READMEs dos repositórios **Backend** e **Frontend** do projeto **Pijam{IN}ha**, um e-commerce fictício de pijamas.

---

## 📦 Backend — API Pijam{IN}ha

API RESTful desenvolvida em **Node.js** + **TypeScript**, seguindo princípios de **Clean Architecture** para garantir organização, escalabilidade e testabilidade.  
O **CORS** já está configurado, permitindo que qualquer frontend consuma a API.

### ⚙️ Funcionalidades

#### 👤 Usuários (Users)
- Registro com `username` e `email` únicos.  
- CRUD completo (listar, buscar por ID, atualizar e deletar).  

#### 👕 Pijamas (Pajamas)
- Criação inteligente: gera automaticamente tamanhos `PP, P, M, G, GG` com estoque inicial **0**.  
- Leitura detalhada: retorna produto + lista de tamanhos com seus estoques.  
- Atualização de estoque por tamanho.  
- Deleção em cascata (remove pijama e tamanhos associados).  

#### 🛒 Vendas (Sales)
- Criação de venda: registra **Sale** e **Address** em uma única transação.  
- Preço calculado no backend para evitar manipulação no cliente.  
- Relação **N:N** entre vendas e pijamas, com quantidade e preço de cada item.  

#### ⭐ Feedback
- CRUD básico: criar, listar e deletar feedbacks de clientes.  

### 🏛️ Arquitetura
- **Controllers:** recebem HTTP, validam com **Zod** e chamam casos de uso.  
- **Use Cases:** lógica de negócio pura, sem dependência de HTTP/DB.  
- **Repositories:** acesso a dados via **Prisma ORM**, seguindo contratos (interfaces).  

### 💻 Tecnologias
- Node.js, TypeScript  
- Fastify  
- Prisma (ORM)  
- SQLite (banco)  
- Zod (validação)  
- tsup (build)  
- tsx (execução em dev)  
- bcryptjs, @fastify/jwt (segurança)  
- @fastify/cors (CORS)  

### 🚀 Como rodar o Backend

```bash
# 1. Clonar o repositório
git clone SEU_LINK_DO_REPOSITORIO_BACKEND

# 2. Instalar dependências
npm install

# 3. Configurar variáveis de ambiente (.env na raiz)
NODE_ENV=dev
PORT=3333
DATABASE_URL="file:./prisma/dev.db"
JWT_SECRET="sua-chave-secreta-para-jwt"

# 4. Executar migrações
npx prisma migrate dev

# 5. Iniciar o servidor
npm run dev

O servidor estará rodando em: http://localhost:3333
