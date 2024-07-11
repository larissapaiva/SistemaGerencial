import { describe, it, expect, beforeEach } from 'vitest'
import { InMemoryClientRepository } from '@/repositories/in-memory/in-memory-client-repository'
import { ClientUseCase } from './client'
import { InvalidRegisterError } from './errors/invalid-register-errors'

import { cnpj, cpf } from 'cpf-cnpj-validator'

let clientRepository: InMemoryClientRepository
let sut: ClientUseCase

describe('Client Use Case', () => {
  beforeEach(() => {
    clientRepository = new InMemoryClientRepository()
    sut = new ClientUseCase(clientRepository)
  })
  it('should be able to create a client PF', async () => {
    const { client } = await sut.execute({
      personType: 'INDIVIDUAL',
      document: cpf.generate(),
      name: 'John Doe',
      address: 'endereco numero 1',
      email: 'johndoe@email.com',
    })
    expect(client.id).toEqual(expect.any(String))
  })
  it('should be able to create a client PJ', async () => {
    const { client } = await sut.execute({
      personType: 'CORPORATE',
      document: cnpj.generate(),
      businessName: 'Name Business',
      address: 'endereco numero 2',
      email: 'namebusiness@email.com',
    })
    expect(client.id).toEqual(expect.any(String))
  })
  it('should be able to create a client without optional fields PF', async () => {
    const { client } = await sut.execute({
      personType: 'INDIVIDUAL',
      document: cpf.generate(),
      name: 'John Doe',
    })
    expect(client.id).toEqual(expect.any(String))
  })
  it('should be able to create a client without optional fields PJ', async () => {
    const { client } = await sut.execute({
      personType: 'CORPORATE',
      document: cnpj.generate(),
      businessName: 'Name Business',
    })
    expect(client.id).toEqual(expect.any(String))
  })
  it('should throw an error if required fields are missing', async () => {
    await expect(
      sut.execute({
        personType: 'INDIVIDUAL',
        document: '',
        name: 'John Doe',
      }),
    ).rejects.toBeInstanceOf(InvalidRegisterError)
  })
})
