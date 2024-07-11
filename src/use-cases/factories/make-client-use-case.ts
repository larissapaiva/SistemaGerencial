import { ClientUseCase } from '../client'
import { PrismaClientRepository } from '@/repositories/prisma/prisma-client-repository'

export function makeClientUseCase() {
  const clientRepository = new PrismaClientRepository()
  const clientUseCase = new ClientUseCase(clientRepository)

  return clientUseCase
}
