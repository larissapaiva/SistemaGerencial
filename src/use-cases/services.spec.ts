import { describe, it, expect, beforeEach } from 'vitest'
import { InMemoryServicesRepository } from '../repositories/in-memory/in-memory-services-repository'
import { ServiceUseCase } from './services'
import { InvalidServicesError } from './errors/invalid-service-errors'

let servicesRepository: InMemoryServicesRepository
let sut: ServiceUseCase

describe('Service Use Case', () => {
  beforeEach(() => {
    servicesRepository = new InMemoryServicesRepository()
    sut = new ServiceUseCase(servicesRepository)
  })
  it('should be able to create service', async () => {
    const { service } = await sut.execute({
      description: 'Consultoria',
    })
    expect(service.id).toEqual(expect.any(String))
  })

  it('should not be able to create service with empty description', async () => {
    await expect(() =>
      sut.execute({
        description: '',
      }),
    ).rejects.toBeInstanceOf(InvalidServicesError)
  })
})
