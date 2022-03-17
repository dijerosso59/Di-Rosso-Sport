<script setup>
import { useWorkStore } from "../stores/work";
import { useRouter } from "vue-router";

const store = useWorkStore();
const router = useRouter();

function Chrono() {
  if (store.work == store.serie) {
    router.push({ name: "Form" });
    store.work = null;
    store.chrono = null;
    store.repos_action = 0;
  } else {
    router.push({ name: "Repos" });
    store.repos_action = store.repos;

    store.chrono = setInterval(() => {
      store.repos_action--;

      if (store.repos_action === 0) {
        store.work++;
        clearInterval(store.chrono);

        router.push({ name: "Work" });
      }
    }, 1000);
  }
}
</script>


<template>
  <div class="bg-red-500">
    <h1>Série {{ store.work }}/{{ store.serie }}</h1>
    <button @click="Chrono()">Valider</button>
  </div>
</template>