import { prisma } from '@/lib/prisma'
import { Prisma } from '@prisma/client'

import { ServicesRepository } from '../services-repository'

export class PrismaServiceRepository implements ServicesRepository {
  async create(data: Prisma.ServiceCreateInput) {
    const service = await prisma.service.create({
      data,
    })

    return service
  }
}
