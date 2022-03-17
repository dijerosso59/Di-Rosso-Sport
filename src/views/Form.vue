<script setup>
import { useWorkStore } from "../stores/work";
import { useRouter } from "vue-router";

const store = useWorkStore();
const router = useRouter();

function handleSubmit() {
  router.push({ name: "Work" });
  store.work++;
}
</script>


<template>
  <form @submit.prevent="handleSubmit()">
    <div>
      <label>Series</label>
      <input type="number" v-model="store.serie" />
    </div>
    <div>
      <label>Repos</label>
      <input type="number" v-model="store.repos" />
    </div>
    <button type="submit">Submit</button>
  </form>
</template>