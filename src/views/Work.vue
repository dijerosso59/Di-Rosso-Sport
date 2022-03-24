<script setup>
import { useWorkStore } from "../stores/work";
import { useRouter } from "vue-router";

const store = useWorkStore();
const router = useRouter();

const num_work = store.work;
const num_serie = store.serie;

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
  <div class="app justify-center">
    <h1 class="text-center">Entrainement</h1>
    <!-- <h1>Série {{ store.work }}/{{ store.serie }}</h1> -->
    <ul id="training" class="flex justify-center space-x-8 my-16">
      <li
        :class="
          num_work <= store.work ? 'check bg-lime-300 text-black' : 'check border-2 border-white'
        "
        v-for="num_work in num_serie"
        :key="num_work"
      >
        {{ num_work }}
      </li>
    </ul>
    <button class="btn-lime" @click="Chrono()">Valider</button>
  </div>
</template>