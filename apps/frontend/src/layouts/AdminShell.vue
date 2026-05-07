<template>
  <div class="shell">
    <aside class="sidebar">
      <h1>Novia.ai</h1>
      <nav>
        <RouterLink v-for="item in items" :key="item.to" :to="item.to">{{ item.label }}</RouterLink>
      </nav>
    </aside>
    <main>
      <header class="header">
        <div><strong>Abteilung:</strong> {{ department }}</div>
        <div>{{ user.name }} · {{ user.role }}</div>
      </header>
      <section class="content"><slot /></section>
    </main>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { currentUser, departments } from '../data/model'
const items = [
  { label: 'Dashboard', to: '/' },
  { label: 'Organigramm', to: '/organigramm' },
  { label: 'Abteilungen', to: '/abteilungen' },
  { label: 'Personen', to: '/personen' },
  { label: 'Projekte', to: '/projekte' },
  { label: 'Aufgaben', to: '/aufgaben' },
  { label: 'Agenten', to: '/agenten' },
  { label: 'Infrastruktur', to: '/infrastruktur' },
  { label: 'Monitoring', to: '/monitoring' },
  { label: 'Einstellungen', to: '/einstellungen' }
]
const user = currentUser
const department = computed(() => departments.find((d) => d.code === user.departmentCode)?.name ?? user.departmentCode)
</script>
