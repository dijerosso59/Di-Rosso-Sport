<script setup>
import { useWorkStore } from "../stores/work";
import { useRouter } from "vue-router";
import { reactive } from "vue";
import Button from '../components/Button.vue'


const store = useWorkStore();
const router = useRouter();

const num_work = store.work;
const num_serie = store.serie;

const data = reactive({
  show: false,
});

function Chrono() {
  data.show = true;

  if (store.work == store.serie) {
    router.push({ name: "Form" });
    store.work = null;
    store.chrono = null;
    store.repos_action = 0;
  } 
  
  else {
    store.repos_action = store.repos;

    store.chrono = setInterval(() => {
      store.repos_action--;

      if (store.repos_action === 0) {
        store.work++;
        clearInterval(store.chrono);
        data.show = false;
      }

    }, 1000);
  }

}
</script>


<template>
  <div class="app justify-center space-y-12">
    <h1 class="text-center">Entraînement</h1>
    <h1
      :class="data.show ? 'bg-lime-300' : 'bg-black'"
      class="time"
    >
      {{ store.repos_action }}
    </h1>
    <ul id="training" class="flex justify-center space-x-8">
      <li
        :class="
          num_work <= store.work
            ? 'check bg-lime-300 text-black'
            : 'check border-2 border-white'
        "
        v-for="num_work in num_serie"
        :key="num_work"
      >
        {{ num_work }}
      </li>
    </ul>
    <Button text="Valider" @click="Chrono()" />
  </div>
</template>