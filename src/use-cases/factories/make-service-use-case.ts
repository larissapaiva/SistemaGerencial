import { PrismaServiceRepository } from '@/repositories/prisma/prisma-service-repository'
import { ServiceUseCase } from '../service'

export function makeServiceUseCase() {
  const serviceRepository = new PrismaServiceRepository()
  const serviceUseCase = new ServiceUseCase(serviceRepository)

  return serviceUseCase
}
