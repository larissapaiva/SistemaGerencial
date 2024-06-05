import { ServicesRepository } from '@/repositories/services-repository'
import { Service } from '@prisma/client'
import { InvalidServicesError } from './errors/invalid-service-errors'

interface ServiceUseCaseRequest {
  description: string
}

interface ServiceUseCaseResponse {
  service: Service
}

export class ServiceUseCase {
  constructor(private servicesRepository: ServicesRepository) {}

  async execute({
    description,
  }: ServiceUseCaseRequest): Promise<ServiceUseCaseResponse> {
    const service = await this.servicesRepository.create({
      description,
    })

    if (!service.description) {
      throw new InvalidServicesError()
    }

    return {
      service,
    }
  }
}
