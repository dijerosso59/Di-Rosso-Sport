<script setup>
import { useWorkStore } from "../stores/work";
import { useRouter } from "vue-router";

const store = useWorkStore();
const router = useRouter();
</script>


<template>
  <div>
    <h1>Temps : {{ store.repos_action }}</h1>
  </div>
</template>