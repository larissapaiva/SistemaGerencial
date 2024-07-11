import { ServicesRepository } from '@/repositories/services-repository'
import { Service } from '@prisma/client'
import { InvalidRegisterError } from './errors/invalid-register-errors'

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
    const serviceWithSameDescribe =
      await this.servicesRepository.findByDescribe(description)

    if (serviceWithSameDescribe) {
      throw new InvalidRegisterError()
    }

    const service = await this.servicesRepository.create({
      description,
    })

    if (!service.description) {
      throw new InvalidRegisterError()
    }

    return {
      service,
    }
  }
}
