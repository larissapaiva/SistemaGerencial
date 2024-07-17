import { Prisma, Client } from '@prisma/client'

// Interface do repositório de clientes
export interface ClientRepository {
  // Método para encontrar um cliente pelo ID
  findById(id: string): Promise<Client | null>

  // Método para encontrar um cliente pelo documento (CPF ou CNPJ)
  findByDocument(document: string): Promise<Client | null>

  // Método para criar um novo cliente no banco de dados
  create(data: Prisma.ClientCreateInput): Promise<Client>
}
