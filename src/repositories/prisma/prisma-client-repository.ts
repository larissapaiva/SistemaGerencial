import { prisma } from '@/lib/prisma'
import { Prisma } from '@prisma/client'

import { ClientRepository } from '../client-repository'

export class PrismaClientRepository implements ClientRepository {
  async findById(id: string) {
    const client = await prisma.client.findUnique({
      where: {
        id,
      },
    })
    return client
  }

  async create(data: Prisma.ClientCreateInput) {
    const client = await prisma.client.create({
      data,
    })

    return client
  }
}
