import { Prisma, Service } from '@prisma/client'

export interface ServicesRepository {
  // findById(id: string): Promise<Service | null>
  findByDescribe(description: string): Promise<Service | null>

  create(data: Prisma.ServiceCreateInput): Promise<Service>
}
