<template><AdminShell><h2>Dashboard</h2><div class="grid"><article v-for="s in stats" :key="s.label" class="card"><small>{{ s.label }}</small><h3>{{ s.value }}</h3></article></div></AdminShell></template>
<script setup lang="ts">import AdminShell from '../layouts/AdminShell.vue'; import { stats } from '../data/model'</script>
