export type Role = 'vip' | 'admin' | 'manager' | 'operator'

export const currentUser = { name: 'A. Steiner', role: 'admin' as Role, departmentCode: 'OPS' }

export const stats = [
  { label: 'Aktive Projekte', value: 12 },
  { label: 'Offene Aufgaben', value: 43 },
  { label: 'Agenten online', value: '17 / 21' },
  { label: 'Risiko-Flags', value: 3 }
]

export const departments = [
  { name: 'Operations', code: 'OPS', owner: 'M. Weber', status: 'active', source: 'Novia', notes: 'Steuerung laufender Prozesse' },
  { name: 'Platform', code: 'PLT', owner: 'R. Özdemir', status: 'active', source: 'Hybrid', notes: 'Infrastruktur und Runtime' }
]

export const people = [
  { name: 'L. Berger', role: 'Manager', scope: 'Projects', department: 'OPS', status: 'active' },
  { name: 'J. Kahn', role: 'Operator', scope: 'Tasks', department: 'OPS', status: 'active' },
  { name: 'E. Schmitt', role: 'Engineer', scope: 'Infrastructure', department: 'PLT', status: 'limited' }
]

export const projects = [
  { key: 'PRJ-001', name: 'Onboarding Pipeline', owner: 'L. Berger', tasks: 8, status: 'in_progress' },
  { key: 'PRJ-002', name: 'Runtime Hardening', owner: 'E. Schmitt', tasks: 13, status: 'blocked' }
]

export const tasks = [
  { id: 'TSK-900', title: 'Genehmigungsflow API', status: 'in_arbeit', priority: 'hoch', assignee: 'J. Kahn', history: 5 },
  { id: 'TSK-901', title: 'Edge Monitoring erweitern', status: 'offen', priority: 'mittel', assignee: 'PLT', history: 2 }
]

export const agents = [
  { id: 'agt-provisioner', purpose: 'Provisioning', scope: 'PLT', status: 'online', rights: 'project_scoped', schedule: '*/10 * * * *' },
  { id: 'agt-audit-watch', purpose: 'Audit Inspection', scope: 'global', status: 'online', rights: 'read_only', schedule: '*/5 * * * *' }
]
