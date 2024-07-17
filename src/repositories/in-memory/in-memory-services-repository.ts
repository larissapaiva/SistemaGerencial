import { ServicesRepository } from '../services-repository'
import { Prisma, Service } from '@prisma/client'
import { randomUUID } from 'node:crypto'

export class InMemoryServicesRepository implements ServicesRepository {
  public items: Service[] = []

  async findById(id: string) {
    const service = this.items.find((item) => item.id === id)
    if (!service) {
      return null
    }
    return service
  }

  async findByDescribe(description: string) {
    const describe = this.items.find((item) => item.description === description)
    if (!describe) {
      return null
    }
    return describe
  }

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
