import { describe, it, expect, beforeEach } from 'vitest'
import { InMemoryServicesRepository } from '../repositories/in-memory/in-memory-services-repository'
import { ServiceUseCase } from './service'
import { InvalidRegisterError } from './errors/invalid-register-errors'

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
    await expect(async () => {
      await sut.execute({
        description: '',
      })
    }).rejects.toBeInstanceOf(InvalidRegisterError)
  })

  it('should not be able to register with same description twice', async () => {
    await sut.execute({
      description: 'Serviços',
    })

    await expect(() =>
      sut.execute({
        description: 'Serviços',
      }),
    ).rejects.toBeInstanceOf(InvalidRegisterError)
  })
})
