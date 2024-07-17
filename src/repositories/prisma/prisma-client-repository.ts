import { prisma } from '@/lib/prisma'
import { Prisma } from '@prisma/client'

import { ClientRepository } from '../client-repository'

export class PrismaClientRepository implements ClientRepository {
  // Método para encontrar um cliente pelo ID
  async findById(id: string) {
    const client = await prisma.client.findUnique({
      where: {
        id,
      },
    })
    return client
  }

  // Método para encontrar um cliente pelo documento (CPF ou CNPJ)
  async findByDocument(document: string) {
    const client = await prisma.client.findFirst({
      where: {
        document,
      },
    })
    return client
  }

  // Método para criar um novo cliente no banco de dados
  async create(data: Prisma.ClientCreateInput) {
    const client = await prisma.client.create({
      data,
    })

    return client
  }
}
