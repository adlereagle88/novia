import Fastify from 'fastify'
import cors from '@fastify/cors'

const app = Fastify({ logger: true })
await app.register(cors, { origin: true })

const seed = {
  departments: [{ code: 'OPS', name: 'Operations' }, { code: 'PLT', name: 'Platform' }],
  roles: ['vip', 'admin', 'manager', 'operator'],
  permissions: ['read_all', 'manage_projects', 'approve_risky_actions']
}

app.get('/health', async () => ({ status: 'ok', product: 'novia.ai', date: new Date().toISOString() }))
app.get('/api/v1/meta', async () => ({ architecture: 'api-first', modules: Object.keys(seed), audit: true }))
app.get('/api/v1/departments', async () => seed.departments)

app.listen({ port: 4000, host: '0.0.0.0' })
