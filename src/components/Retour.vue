<script setup>
defineProps({
  msg: {
    type: String,
    required: true,
  },
});
</script>

<template>
  <h1>{{ msg }}</h1>
  <a target="_blank" href="https://vitejs.dev/">Vite</a> +
  <a target="_blank" href="https://vuejs.org/">Vue 3</a>.
</template>