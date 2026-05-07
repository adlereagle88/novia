<template>
  <table>
    <thead><tr><th v-for="h in headers" :key="h">{{ h }}</th></tr></thead>
    <tbody><slot /></tbody>
  </table>
</template>
<script setup lang="ts">
defineProps<{ headers: string[] }>()
</script>
