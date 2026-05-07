<template><AdminShell><PageHeader title="Abteilungen" subtitle="First-class Zuständigkeitsräume mit Quelle und Status" /><DataTable :headers="['Name','Code','Owner','Status','Quelle','Notizen']"><tr v-for="d in visible" :key="d.id"><td>{{d.name}}</td><td>{{d.code}}</td><td>{{d.owner}}</td><td>{{d.status}}</td><td>{{d.source}}</td><td>{{d.notes}}</td></tr></DataTable></AdminShell></template>
<script setup lang="ts">
import AdminShell from '../layouts/AdminShell.vue'; import PageHeader from '../components/PageHeader.vue'; import DataTable from '../components/DataTable.vue'
import { canSeeDepartment, currentUser, departments } from '../data/model'
const visible = departments.filter((d) => canSeeDepartment(currentUser.role, currentUser.departmentCode, d.code))
</script>
