import { ClientRepository } from '@/repositories/client-repository'
import { Client, PersonType } from '@prisma/client'
import { InvalidRegisterError } from './errors/invalid-register-errors'

import { cpf, cnpj } from 'cpf-cnpj-validator'

interface ClientUseCaseRequest {
  personType: PersonType
  document: string | null
  name: string | null
  businessName: string | null
  address: string | null
  email: string | null
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
    if (!personType || !document) {
      throw new InvalidRegisterError()
    }

    if (personType === 'INDIVIDUAL' && !cpf.isValid(document)) {
      throw new InvalidRegisterError()
    }

    if (personType === 'CORPORATE' && !cnpj.isValid(document)) {
      throw new InvalidRegisterError()
    }

    document =
      personType === 'INDIVIDUAL' ? cpf.format(document) : cnpj.format(document)

    const existingClient = await this.clientRepository.findByDocument(document)
    if (existingClient) {
      throw new InvalidRegisterError()
    }
    const clientData: Partial<Client> & {
      personType: PersonType
      document: string
    } = {
      personType,
      document,
    }

    if (name !== null) {
      clientData.name = name
    }
    if (businessName !== null) {
      clientData.businessName = businessName
    }
    if (address !== null) {
      clientData.address = address
    }
    if (email !== null) {
      clientData.email = email
    }

    const client = await this.clientRepository.create(clientData)

    return {
      client,
    }
  }
}
