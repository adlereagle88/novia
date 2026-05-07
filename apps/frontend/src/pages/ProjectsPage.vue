<template><AdminShell><h2>Projekte</h2><div class="grid"><article class="card" v-for="p in projects" :key="p.key"><strong>{{p.name}}</strong><div>{{p.key}} · {{p.status}}</div><small>Owner: {{p.owner}} · Tasks: {{p.tasks}}</small></article></div></AdminShell></template>
<script setup lang="ts">import AdminShell from '../layouts/AdminShell.vue'; import { projects } from '../data/model'</script>
