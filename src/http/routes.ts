import { FastifyInstance } from 'fastify'
import { register } from './controllers/register'
import { authenticate } from './controllers/authenticate'
import { service } from './controllers/service'
import { client } from './controllers/client'

export async function appRoutes(app: FastifyInstance) {
  app.post('/users', register)

  app.post('/sessions', authenticate)
  app.post('/services', service)
  app.post('/client', client)
}
