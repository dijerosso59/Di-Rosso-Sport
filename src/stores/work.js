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
        state: false
      },
      biceps: {
        name: "Biceps",
        state: false
      },
      avantbras: {
        name: "Avant-bras",
        state: false
      },
      pecs: {
        name: "Pectoraux",
        state: false
      },
      abdos: {
        name: "Abdos",
        state: false
      },
      adducteurs: {
        name: "Adducteurs",
        state: false
      },
      quadriceps: {
        name: "Quadriceps",
        state: false
      },
      dos: {
        name: "Dos",
        state: false
      },
      dos: {
        name: "Dos",
        state: false
      }
    }
  })
})