import { ClientRepository } from '@/repositories/client-repository'
import { Client, PersonType } from '@prisma/client'
import { InvalidRegisterError } from './errors/invalid-register-errors'

import { cpf, cnpj } from 'cpf-cnpj-validator'

interface ClientUseCaseRequest {
  personType: PersonType
  document: string
  name?: string
  businessName?: string
  address?: string
  email?: string
}

interface ClientUseCaseResponse {
  client: Client
}

export class ClientUseCase {
  constructor(private clientRepository: ClientRepository) {}

  async execute({
    personType,
    document,
    name,
    businessName,
    address,
    email,
  }: ClientUseCaseRequest): Promise<ClientUseCaseResponse> {
    const clientData: Partial<Client> & {
      personType: PersonType
      document: string
    } = {
      personType,
      document,
    }

    if (!personType || !document) {
      throw new InvalidRegisterError()
    }

    if (name !== undefined) {
      clientData.name = name
    }
    if (businessName !== undefined) {
      clientData.businessName = businessName
    }
    if (address !== undefined) {
      clientData.address = address
    }
    if (email !== undefined) {
      clientData.email = email
    }

    if (personType === 'INDIVIDUAL' && !cpf.isValid(document)) {
      throw new InvalidRegisterError()
    }
    if (personType === 'CORPORATE' && !cnpj.isValid(document)) {
      throw new InvalidRegisterError()
    }

    const client = await this.clientRepository.create(clientData)

    return {
      client,
    }
  }
}
