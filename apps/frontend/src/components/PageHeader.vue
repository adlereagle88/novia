<template>
  <div class="page-head">
    <div>
      <h2>{{ title }}</h2>
      <p>{{ subtitle }}</p>
    </div>
  </div>
</template>
<script setup lang="ts">
defineProps<{ title: string; subtitle: string }>()
</script>
