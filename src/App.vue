<script>
export default {

  data() {
    return {
      state: "finish",
      serie: 2,
      repos: 3,
      repos_action: 0,
      work: null,
      chrono: null,
    };

  },

  methods: {
    handleSubmit() {
      this.state = "validate";
      this.work++;
    },

    Chrono() {
      this.state = "repos";
      this.repos_action = this.repos;

      this.chrono = setInterval(() => {
        this.repos_action--;

        if (this.repos_action === 0) {
          this.work++;
          clearInterval(this.chrono);

          if (this.work > this.serie) {
            this.state = "finish";
            this.work = null;
            this.chrono = null;
            this.repos_action = 0;

          } else {
            this.state = "validate";
          }

        }
      }, 1000);
    },

  },

};
</script>

<template>
  <header>
    <img
      alt="Vue logo"
      class="logo"
      src="@/assets/logo.svg"
      width="125"
      height="125"
    />
  </header>

  <main>
    <div v-if="state === 'finish'">
      <form @submit.prevent="handleSubmit">
        <div>
          <label>Series</label>
          <input type="number" v-model="serie" />
        </div>
        <div>
          <label>Repos</label>
          <input type="number" v-model="repos" />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>

    <div v-if="state === 'validate'">
      <h1>Série {{ work }}/{{ serie }}</h1>
      <button @click="Chrono()">Valider</button>
    </div>

    <div v-if="state === 'repos'">
      <h1>Temps : {{ repos_action }}</h1>
    </div>
  </main>
</template>