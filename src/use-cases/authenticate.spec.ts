import { describe, it, expect, beforeEach } from 'vitest'
import { InMemoryUserRepository } from '../repositories/in-memory/in-memory-users-repository'

import { AuthenticateUseCase } from './authenticate'
import { InvalidCredentialsError } from './errors/invalid-credentials-errors'
import { hash } from 'bcryptjs'

let usersRepository: InMemoryUserRepository
let sut: AuthenticateUseCase

describe('Authenticate Use Case', () => {
  beforeEach(() => {
    usersRepository = new InMemoryUserRepository()
    sut = new AuthenticateUseCase(usersRepository)
  })
  it('should be able to authenticate', async () => {
    await usersRepository.create({
      name: 'John Doe',
      email: 'johndoe@examplem.com',
      password_hash: await hash('123456', 6),
    })

    const { user } = await sut.execute({
      email: 'johndoe@examplem.com',
      password: '123456',
    })
    expect(user.id).toEqual(expect.any(String))
  })

  it('should not be able to authenticate with wrong email', async () => {
    const usersRepository = new InMemoryUserRepository()
    const sut = new AuthenticateUseCase(usersRepository)

    await expect(() =>
      sut.execute({
        email: 'johndoe@example.com',
        password: '123456',
      }),
    ).rejects.toBeInstanceOf(InvalidCredentialsError)
  })
  it('should not be able to authenticate with wrong email', async () => {
    const usersRepository = new InMemoryUserRepository()
    const sut = new AuthenticateUseCase(usersRepository)
    await usersRepository.create({
      name: 'John Doe',
      email: 'johndoe@examplem.com',
      password_hash: await hash('123456', 6),
    })

    await expect(() =>
      sut.execute({
        email: 'johndoe@example.com',
        password: '123123',
      }),
    ).rejects.toBeInstanceOf(InvalidCredentialsError)
  })
})
