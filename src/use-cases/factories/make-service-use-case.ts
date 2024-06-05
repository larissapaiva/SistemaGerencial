import { PrismaServiceRepository } from '@/repositories/prisma/prisma-service-repository'
import { ServiceUseCase } from '../services'

export function makeServiceUseCase() {
  const serviceRepository = new PrismaServiceRepository()
  const serviceUseCase = new ServiceUseCase(serviceRepository)

  return serviceUseCase
}
