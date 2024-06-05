import { UserAlreadyExistsError } from '@/use-cases/errors/user-already-exists-error'

import { makeServiceUseCase } from '@/use-cases/factories/make-service-use-case'
import { FastifyReply, FastifyRequest } from 'fastify'
import { z } from 'zod'

export async function service(request: FastifyRequest, reply: FastifyReply) {
  const serviceBodySchema = z.object({
    description: z.string(),
  })

  const { description } = serviceBodySchema.parse(request.body)
  try {
    const serviceUseCase = makeServiceUseCase()

    await serviceUseCase.execute({
      description,
    })
  } catch (err) {
    if (err instanceof UserAlreadyExistsError) {
      return reply.status(409).send({ message: err.message })
    }
    throw err
  }
  return reply.status(201).send()
}
