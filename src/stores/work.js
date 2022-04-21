import { defineStore } from 'pinia'

export const useWorkStore = defineStore({
  id: 'work',

  state: () => ({
    isFront: true,
    serie: null,
    repos: null,
    repos_action: 0,
    work: null,
    chrono: null,

    muscles : [
      {
        name: "Epaules",
        state: false,
        parts: ["front"]
      },
      {
        name: "Biceps",
        state: false,
        parts: ["front"]
      },
      {
        name: "Avant-bras",
        state: false,
        parts: ["front"]
      },
      {
        name: "Pectoraux",
        state: false,
        parts: ["front"]
      },
      {
        name: "Abdos",
        state: false,
        parts: ["front"]
      },
      {
        name: "Adducteurs",
        state: false,
        parts: ["front"]
      },
      {
        name: "Quadriceps",
        state: false,
        parts: ["front"]
      },
      {
        name: "Dos",
        state: false,
        parts: ["back"]
      },
      {
        name: "Triceps",
        state: false,
        parts: ["back"]
      },
      {
        name: "Ischios",
        state: false,
        parts: ["back"]
      },
      {
        name: "Mollets",
        state: false,
        parts: ["back"]
      }
    ],
    
    selectedsExercices: []
  })
})