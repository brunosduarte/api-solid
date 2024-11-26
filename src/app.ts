import fastify from 'fastify'
import { PrismaClient } from '@prisma/client'

export const app = fastify()

const prisma = new PrismaClient()
prisma.user.create({
  data: {
    name: 'Bruno S. Duarte', //
    email: 'bruno@dev.br',
  },
})
