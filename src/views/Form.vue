<script setup>
import { useWorkStore } from "../stores/work";
import { useRouter } from "vue-router";
import { exercicesServices } from "../services/exercices";
import { computed, onMounted, ref } from "vue";
import Button from "../components/Button.vue";

const store = useWorkStore();
const router = useRouter();

function handleSubmit() {
  router.push({ name: "Work" });
  store.work++;
  store.repos_action = store.repos;
}
</script>


<template>
  <div class="app justify-center text-center space-y-8">
    <h1>Personnalisez votre entrainement</h1>
    <ul>
      <li v-for="exercice in store.selectedsExercices" :key="exercice.id">
        {{ exercice.name }}
      </li>
    </ul>
    <form @submit.prevent="handleSubmit()" class="space-y-8" id="form-training">
      <div class="space-y-4">
        <input
          placeholder="Série(s)"
          type="number"
          v-model="store.serie"
          min="2"
          max="5"
          required
        />
        <input
          placeholder="Repos (en s)"
          type="number"
          v-model="store.repos"
          required
        />
      </div>
      <Button text="Commencer" type="submit" />
    </form>
  </div>
</template>