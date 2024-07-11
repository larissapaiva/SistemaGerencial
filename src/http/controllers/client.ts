import { InvalidRegisterError } from '@/use-cases/errors/invalid-register-errors'
import { makeClientUseCase } from '@/use-cases/factories/make-client-use-case'

import { FastifyReply, FastifyRequest } from 'fastify'
import { z } from 'zod'

export async function client(request: FastifyRequest, reply: FastifyReply) {
  const clientBodySchema = z.object({
    personType: z.enum(['INDIVIDUAL', 'CORPORATE']),
    document: z.string(),
    name: z.string(),
    businessName: z.string(),
    address: z.string(),
    email: z.string(),
  })

  const { personType, document, name, businessName, address, email } =
    clientBodySchema.parse(request.body)
  try {
    const clientUseCase = makeClientUseCase()

    await clientUseCase.execute({
      personType,
      document,
      name,
      businessName,
      address,
      email,
    })
  } catch (err) {
    if (err instanceof InvalidRegisterError) {
      return reply.status(409).send({ message: err.message })
    }
    throw err
  }
  return reply.status(201).send()
}
