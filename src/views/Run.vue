<script setup>
  import {
    useWorkStore
  } from "../stores/work";
  import {
    useRouter
  } from "vue-router";

  const store = useWorkStore();
  const router = useRouter();
</script>

<template>
  <div class="app justify-center space-y-8">
    <h1 class="text-center text-5xl">En DLC</h1>
    <router-link class="btn-lime" to="/select">Retour</router-link>
  </div>
</template>