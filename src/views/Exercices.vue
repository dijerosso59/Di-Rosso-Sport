<script setup>
import { useWorkStore } from "../stores/work";
import { useRouter } from "vue-router";
import { exercicesServices } from "../services/exercices";
import { computed, onMounted, ref } from "vue";
import Button from "../components/Button.vue";

const store = useWorkStore();
const router = useRouter();

const exercices = ref([]);

async function setExercices() {
  exercices.value = await exercicesServices.getAll();
}

onMounted(() => {
  setExercices();
});

function getExerciceByMuscle(muscles) {
  return exercices.value.filter((exercice) => muscles == exercice.muscle);
}

function handleSubmit() {
  store.selectedsExercices = exercices.value.filter(
    (exercice) => exercice.state
  );
  router.push({ name: "Form" });
}

const musclesChoices = computed(() => {
  const muscles = store.muscles.filter((muscle) => muscle.state);

  return muscles.map((muscle) => muscle.name);
});
</script>


<template>
  <div class="app justify-center space-y-8">
    <h1 class="text-center">Liste Exercices</h1>
    <form class="space-y-6" @submit.prevent="handleSubmit()">
      <ul
        class="border-2 border-lime-300 p-6 rounded-xl space-y-4"
        v-for="muscle in musclesChoices"
        :key="muscle"
      >
        <h2>{{ muscle }}</h2>
        <div class="flex items-center overflow-x-auto space-x-8">
          <li
            class="flex-none mb-6 flex items-center space-x-2"
            v-for="exercice in getExerciceByMuscle(muscle)"
            :key="exercice.id"
            @click="exercice.state = !exercice.state"
          >
            <input
              type="checkbox"
              class="
                h-6
                w-6
                appearance-none
                bg-zinc-700
                rounded-full
                duration-200
              "
              v-model="exercice.state"
            />
            <!-- <img
            :src="'/src/assets/images/' + exercice.image"
            :alt="exercice.name"
          /> -->
            <label class="font-semibold text-xl">{{ exercice.name }}</label>
          </li>
        </div>
      </ul>
      <Button text="Valider" type="submit" />
    </form>
  </div>
</template>