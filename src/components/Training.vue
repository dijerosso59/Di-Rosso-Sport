<script setup>
defineProps({
  text: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  link: {
    type: String,
    required: true,
  },
});
</script>

<template>
  <router-link class="space-y-2 col-span-2" :to="link">
    <img class="w-1/2 mx-auto" :src="'src/assets/images/' + image" alt="" />
    <h2>{{ text }}</h2>
  </router-link>
</template>