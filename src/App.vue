<script setup>
  import {
    RouterView
  } from "vue-router";

</script>

<template>
  <Transition>
    <RouterView />
  </Transition>
</template>

<style>
  .v-enter-active,
  .v-leave-active {
    transition: opacity 1s ease;
  }

  .v-enter-from,
  .v-leave-to {
    opacity: 0;
  }
</style>