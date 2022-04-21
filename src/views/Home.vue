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
  <div class="app justify-center">
    <h1 class="text-center text-5xl">Di Rosso Sport</h1>
    <img class="w-1/3 mt-8 mb-12 mx-auto" src="@/assets/images/logo.svg" alt="">
    <router-link class="btn-lime" to="/muscle">Commencer</router-link>
  </div>
</template>