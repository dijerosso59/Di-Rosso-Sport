import { defineStore } from 'pinia'

export const useWorkStore = defineStore({
  id: 'work',
  state: () => ({
    serie: 2,
    repos: 3,
    repos_action: 0,
    work: null,
    chrono: null,

    muscles : {
      epaules: {
        name: "Epaules",
        state: false,
        parts: ["front"]
      },
      biceps: {
        name: "Biceps",
        state: false,
        parts: ["front"]
      },
      avantbras: {
        name: "Avant-bras",
        state: false,
        parts: ["front"]
      },
      pecs: {
        name: "Pectoraux",
        state: false,
        parts: ["front"]
      },
      abdos: {
        name: "Abdos",
        state: false,
        parts: ["front"]
      },
      adducteurs: {
        name: "Adducteurs",
        state: false,
        parts: ["front"]
      },
      quadriceps: {
        name: "Quadriceps",
        state: false,
        parts: ["front"]
      },
      dos: {
        name: "Dos",
        state: false,
        parts: ["back"]
      },
      triceps: {
        name: "Triceps",
        state: false,
        parts: ["back"]
      },
      cuisses: {
        name: "Cuisses",
        state: false,
        parts: ["back"]
      },
      ischios: {
        name: "Ischios",
        state: false,
        parts: ["back"]
      },
      mollets: {
        name: "Mollets",
        state: false,
        parts: ["back"]
      },
    }
  })
})