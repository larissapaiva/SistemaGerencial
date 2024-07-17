import { prisma } from '@/lib/prisma'
import { Prisma, Service } from '@prisma/client'

import { ServicesRepository } from '../services-repository'

export class PrismaServiceRepository implements ServicesRepository {
  async findById(id: string): Promise<Service | null> {
    const service = await prisma.service.findUnique({
      where: {
        id,
      },
    })
    return service
  }

  async findByDescribe(description: string) {
    const value = await prisma.service.findFirst({
      where: {
        description,
      },
    })
    return value
  }

  async create(data: Prisma.ServiceCreateInput) {
    const service = await prisma.service.create({
      data,
    })

    return service
  }
}
