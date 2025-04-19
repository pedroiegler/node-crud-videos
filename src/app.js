import { fastify } from 'fastify'
import { VideosAPI } from './routes/api.js'

const server = fastify()

server.listen({ port: process.env.PORT ?? 3333 })

VideosAPI(server)