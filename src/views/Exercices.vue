<script setup>
import { useWorkStore } from "../stores/work";
import { useRouter } from "vue-router";
import { exercicesServices } from "../services/exercices"
import { computed, onMounted, ref } from "vue";

const store = useWorkStore();
const router = useRouter();

const exercices = ref([])

async function setExercices() {
  exercices.value = await exercicesServices.getAll()
  console.log(exercices)
}

setExercices()

const getExercicesByMuscle = computed(() => muscle => {
  return exercices.value.filter(exercice => exercice.muscle === muscle)
})
</script>


<template>
  <div class="app justify-center">
    <h1>Liste Exercices</h1>
    <ul>
      <template v-for="muscle in store.muscles">
        <template v-if="muscle.state">
          <template v-for="exercice in getExercicesByMuscle(muscle)" :key="exercice.id">
          {{ exercice }}
            <li>{{ exercice.name }}</li>
          </template>
        </template>
      </template>
    </ul>
  </div>
</template>