import { Prisma, Client } from '@prisma/client'
import { ClientRepository } from '../client-repository'
import { randomUUID } from 'node:crypto'

export class InMemoryClientRepository implements ClientRepository {
  public items: Client[] = []

  async create(data: Prisma.ClientCreateInput) {
    const client = {
      id: randomUUID(),
      personType: data.personType,
      document: data.document,
      name: data.name,
      businessName: data.businessName,
      address: data.address,
      email: data.email,
      created_at: new Date(),
    } as Client
    this.items.push(client)

    return client
  }
}
