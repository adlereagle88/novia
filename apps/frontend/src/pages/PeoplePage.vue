<template><AdminShell><PageHeader title="Personen" subtitle="Rollen, Scope und Abteilungszuordnung" /><DataTable :headers="['Name','Rolle','Scope','Abteilung','Status']"><tr v-for="p in visible" :key="p.id"><td>{{p.name}}</td><td>{{p.role}}</td><td>{{p.scope}}</td><td>{{p.departmentCode}}</td><td>{{p.status}}</td></tr></DataTable></AdminShell></template>
<script setup lang="ts">
import AdminShell from '../layouts/AdminShell.vue'; import PageHeader from '../components/PageHeader.vue'; import DataTable from '../components/DataTable.vue'
import { canSeeDepartment, currentUser, people } from '../data/model'
const visible = people.filter((p) => canSeeDepartment(currentUser.role, currentUser.departmentCode, p.departmentCode))
</script>
