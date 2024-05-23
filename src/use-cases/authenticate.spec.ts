import { describe, it, expect } from 'vitest'
import { InMemoryUserRepository } from '../repositories/in-memory/in-memory-users-repository'

import { AuthenticateUseCase } from './authenticate'
import { InvalidCredentialsError } from './errors/invalid-credentials-errors'
import { hash } from 'bcryptjs'

describe('Authenticate Use Case', () => {
  it('should be able to authenticate', async () => {
    const usersRepository = new InMemoryUserRepository()
    const sut = new AuthenticateUseCase(usersRepository)

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

    it('should not be able to authenticate with wrong email', async () => {
      await expect(() =>
        sut.execute({
          email: 'johndoe@example.com',
          password: '123456',
        }),
      ).rejects.toBeInstanceOf(InvalidCredentialsError)
    })
  })
  it('should not be able to authenticate with wrong password', async () => {
    const usersRepository = new InMemoryUserRepository()
    const sut = new AuthenticateUseCase(usersRepository)

    it('should not be able to authenticate with wrong email', async () => {
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
})
