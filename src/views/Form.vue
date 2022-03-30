<script setup>
import { useWorkStore } from "../stores/work";
import { useRouter } from "vue-router";

const store = useWorkStore();
const router = useRouter();

function handleSubmit() {
  router.push({ name: "Work" });
  store.work++;
  store.repos_action = store.repos;
}
</script>


<template>
  <div class="app justify-center text-center">
    <h1 class="mb-20">Personnalisez votre entrainement</h1>
    <form @submit.prevent="handleSubmit()" id="form-training">
      <div class="space-y-4">
        <input placeholder="Série(s)" type="number" v-model="store.serie" required />
        <input placeholder="Repos (en s)" type="number" v-model="store.repos" required />
      </div>
      <button class="btn-lime mt-10" type="submit">Commencer</button>
    </form>
  </div>
</template>