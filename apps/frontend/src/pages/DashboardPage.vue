<template>
  <AdminShell>
    <PageHeader title="Dashboard" subtitle="Systemzustand, Prioritäten und nächste Entscheidungen" />
    <div class="grid">
      <article class="card"><small>Aktive Projekte</small><h3>{{ projects.length }}</h3></article>
      <article class="card"><small>Offene Aufgaben</small><h3>{{ tasks.length }}</h3></article>
      <article class="card"><small>Agenten online</small><h3>{{ agents.length }}</h3></article>
      <article class="card"><small>Audit-Einträge</small><h3>{{ auditEntries.length }}</h3></article>
    </div>
  </AdminShell>
</template>
<script setup lang="ts">
import AdminShell from '../layouts/AdminShell.vue'
import PageHeader from '../components/PageHeader.vue'
import { agents, auditEntries, projects, tasks } from '../data/model'
</script>
