export type RoleKey = 'vip' | 'admin' | 'manager' | 'operator'

export type Department = {
  id: string
  name: string
  code: string
  owner: string
  status: 'active' | 'paused'
  source: 'Novia' | 'AD' | 'Manuell' | 'Hybrid'
  notes: string
}

export type Person = {
  id: string
  name: string
  role: string
  scope: string
  departmentCode: string
  status: 'active' | 'limited'
}

export const currentUser = {
  id: 'usr-admin-01',
  name: 'A. Steiner',
  role: 'admin' as RoleKey,
  departmentCode: 'OPS'
}

export const departments: Department[] = [
  { id: 'dep-ops', name: 'Operations', code: 'OPS', owner: 'M. Weber', status: 'active', source: 'Novia', notes: 'Operative Steuerung und Delivery.' },
  { id: 'dep-plt', name: 'Platform', code: 'PLT', owner: 'R. Özdemir', status: 'active', source: 'Hybrid', notes: 'Infrastruktur, Runtime und SRE.' },
  { id: 'dep-sec', name: 'Security', code: 'SEC', owner: 'K. Lang', status: 'paused', source: 'AD', notes: 'Policy, Risiko und Compliance.' }
]

export const people: Person[] = [
  { id: 'prs-01', name: 'L. Berger', role: 'Manager', scope: 'Projects', departmentCode: 'OPS', status: 'active' },
  { id: 'prs-02', name: 'J. Kahn', role: 'Operator', scope: 'Tasks', departmentCode: 'OPS', status: 'active' },
  { id: 'prs-03', name: 'E. Schmitt', role: 'Engineer', scope: 'Infrastructure', departmentCode: 'PLT', status: 'limited' }
]

export const projects = [
  { id: 'prj-001', key: 'PRJ-001', name: 'Onboarding Pipeline', departmentCode: 'OPS', owner: 'L. Berger', status: 'in_progress', tasks: 8, risk: 'medium' },
  { id: 'prj-002', key: 'PRJ-002', name: 'Runtime Hardening', departmentCode: 'PLT', owner: 'E. Schmitt', status: 'blocked', tasks: 13, risk: 'high' }
]

export const tasks = [
  { id: 'TSK-900', title: 'Genehmigungsflow API', status: 'in_arbeit', priority: 'hoch', assignedType: 'person', assignee: 'J. Kahn', historyCount: 5 },
  { id: 'TSK-901', title: 'Edge Monitoring erweitern', status: 'offen', priority: 'mittel', assignedType: 'department', assignee: 'PLT', historyCount: 2 }
]

export const agents = [
  { id: 'agt-provisioner', purpose: 'Provisioning', scope: 'PLT', status: 'online', rights: 'project_scoped', schedule: '*/10 * * * *' },
  { id: 'agt-audit-watch', purpose: 'Audit Inspection', scope: 'global', status: 'online', rights: 'read_only', schedule: '*/5 * * * *' }
]

export const auditEntries = [
  { id: 'aud-01', at: '2026-05-07T13:49:00Z', actor: 'A. Steiner', action: 'APPROVAL_GRANTED', target: 'TSK-900', risk: 'high' },
  { id: 'aud-02', at: '2026-05-07T14:12:00Z', actor: 'agt-audit-watch', action: 'SCAN_COMPLETED', target: 'Global', risk: 'low' }
]

export const infraNodes = [
  { id: 'host-core-01', type: 'host', ip: '10.0.1.11', status: 'green' },
  { id: 'postgres-primary', type: 'container', ip: '10.0.1.31:5432', status: 'yellow' },
  { id: 'agent-gateway', type: 'service', ip: '10.0.1.52:8443', status: 'red' }
]

export const monitoringEvents = [
  { at: '14:10', level: 'warning', source: 'postgres-primary', message: 'Connection pool near limit' },
  { at: '14:13', level: 'info', source: 'agt-audit-watch', message: 'Approval queue scanned' }
]

export const canSeeDepartment = (role: RoleKey, userDept: string, entityDept: string) => role === 'vip' || role === 'admin' || userDept === entityDept
