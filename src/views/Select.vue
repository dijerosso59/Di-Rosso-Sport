<script setup>
import { useWorkStore } from "../stores/work";
import { useRouter } from "vue-router";
import Training from "../components/Training.vue";

const store = useWorkStore();
const router = useRouter();
</script>

<template>
  <div class="app justify-center text-center space-y-12">
    <h1>Menu principal</h1>

    <div class="grid grid-cols-4 gap-8">

      <Training text="Muscle" image="muscle-flexing.svg" link="/muscle" />
      <Training text="Course" image="run-sprint.svg" link="/run" />
      <Training class="col-start-2" text="Libre" image="strength.svg" link="/form" />
      
    </div>
  </div>
</template>