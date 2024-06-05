import { Prisma, Service } from '@prisma/client'
import { ServicesRepository } from '../services-repository'
import { randomUUID } from 'node:crypto'

export class InMemoryServicesRepository implements ServicesRepository {
  public items: Service[] = []

  async create(data: Prisma.ServiceCreateInput) {
    const service = {
      id: randomUUID(),
      description: data.description,
      created_at: new Date(),
    }
    this.items.push(service)

    return service
  }
}
