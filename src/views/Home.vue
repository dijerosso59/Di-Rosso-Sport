<script setup>
  import {
    useWorkStore
  } from "../stores/work";
  import {
    useRouter
  } from "vue-router";
  import Retour from '@/components/Retour.vue';

  const store = useWorkStore();
  const router = useRouter();
</script>

<template>
  <div class="app justify-center">
    <h1 class="text-center text-5xl">Di Rosso Sport</h1>
    <img class="w-1/3 mt-8 mb-12 mx-auto" src="@/assets/images/logo.svg" alt="">
    <button class="btn-lime hidden" @click="sound()">Commencer</button>
    <router-link class="btn-lime" to="/muscle">Commencer</router-link>
    <!-- <Retour msg="salut" />  -->
  </div>
</template>