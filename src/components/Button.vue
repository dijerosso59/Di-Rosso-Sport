<script setup>
defineProps({
  text: {
    type: String,
    required: true
  },
});
</script>

<template>
  <button class="btn-lime">{{ text }}</button>
</template>