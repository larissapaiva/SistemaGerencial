import { Prisma, Client } from '@prisma/client'

export interface ClientRepository {
  // findById(id: string): Promise<Service | null>

  create(data: Prisma.ClientCreateInput): Promise<Client>
}
