import { createRouter, createWebHistory } from 'vue-router'
import Dashboard from '../pages/DashboardPage.vue'
import Org from '../pages/OrganigrammPage.vue'
import Departments from '../pages/DepartmentsPage.vue'
import People from '../pages/PeoplePage.vue'
import Projects from '../pages/ProjectsPage.vue'
import Tasks from '../pages/TasksPage.vue'
import Agents from '../pages/AgentsPage.vue'
import Infra from '../pages/InfrastructurePage.vue'
import Monitoring from '../pages/MonitoringPage.vue'
import Settings from '../pages/SettingsPage.vue'

export default createRouter({ history: createWebHistory(), routes: [
  { path: '/', component: Dashboard },
  { path: '/organigramm', component: Org },
  { path: '/abteilungen', component: Departments },
  { path: '/personen', component: People },
  { path: '/projekte', component: Projects },
  { path: '/aufgaben', component: Tasks },
  { path: '/agenten', component: Agents },
  { path: '/infrastruktur', component: Infra },
  { path: '/monitoring', component: Monitoring },
  { path: '/einstellungen', component: Settings }
] })
