import { UsersRepository } from '@/repositories/users-repository'
import { Prisma, User } from '@prisma/client'

export class InMemoryUserRepository implements UsersRepository {
  public items: User[] = []
  async findById(id: string) {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const user = this.items.find((item) => item.id === id)
    if (!user) {
      return null
    }

    return user
  }

  async findByEmail(email: string) {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const user = this.items.find((item) => item.email === email)
    if (!user) {
      return null
    }

    return user
  }

  async create(data: Prisma.UserCreateInput) {
    const user = {
      id: 'user-1',
      name: data.name,
      email: data.email,
      password_hash: data.password_hash,
      created_at: new Date(),
    }
    this.items.push(user)

    return user
  }
}
