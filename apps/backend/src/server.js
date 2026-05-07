import Fastify from 'fastify'
import cors from '@fastify/cors'
import { catalog } from './modules/catalog.js'

const app = Fastify({ logger: true })
await app.register(cors, { origin: true })

const departments = [
  { id: 'dep-ops', code: 'OPS', name: 'Operations' },
  { id: 'dep-plt', code: 'PLT', name: 'Platform' }
]

app.get('/health', async () => ({ status: 'ok', product: 'novia.ai', date: new Date().toISOString() }))
app.get('/api/v1/meta', async () => ({ architecture: 'api-first', modules: ['departments', 'projects', 'tasks', 'agents', 'audit'], audit: true }))
app.get('/api/v1/catalog', async () => catalog)
app.get('/api/v1/departments', async () => departments)

app.listen({ port: 4000, host: '0.0.0.0' })
