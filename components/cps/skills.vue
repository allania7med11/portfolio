<template>
  <v-row no-gutters align="start" justify="start">
    <v-col cols="12" sm="5">
      <v-card data-aos="fade-right" class="text-center" flat>
        <img height="200px" :src="require('@/assets/profile.png')" />
        <v-card-title class="justify-center">Who's this guy?</v-card-title>
        <v-card-subtitle class="justify-center">
          I'm a full-stack web developer from Tunis ,Kairouan.
          <br />I have a passion to solve difficult problems and make effective
          applications that make life of people easier.
          <br />
          <v-btn
            small
            class="pl-0 text-center font-weight-bold blue--text"
            text
            @click="pageChange('contact')"
          >
            Let's make something special.
          </v-btn>
        </v-card-subtitle>
      </v-card>
    </v-col>
    <v-col cols="12" sm="7">
      <v-card
        data-aos="fade-left"
        v-observe-visibility="visibilityChanged"
        class="text-center"
        flat
      >
        <v-row
          stretch
          v-for="(value, key) in skills"
          class="my-4"
          no-gutters
          v-bind:key="key"
        >
          <v-col>
            <div class="text-center blue darken-1 white--text">
              <span class="body-2 font-weight-bold px-1">{{ value.name }}</span>
            </div>
          </v-col>
          <v-col>
            <div style="height: 100%" class="grey lighten-3">
              <div
                style="height: 100%;transition: width 2s;transition-delay: 1s;"
                :style="{ width: isVisible ? value.value : '0%' }"
                class="blue darken-4"
              >
                &nbsp;
              </div>
            </div>
          </v-col>
          <v-col cols="1">
            <div
              class="text-center grey lighten-2 text-right grey--text--lighten-1"
            >
              <span class="body-2">{{ value.value }}</span>
            </div>
          </v-col>
        </v-row>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
import features from "~/components/cps/features.vue";
import skills from "~/components/cps/skills.vue";
import { mapState, mapActions } from "vuex";
export default {
  components: {
    features,
    skills,
  },
  data: () => ({
    show: false,
    isVisible: false,
    skills: [
      { name: "Html/Css", rate: "0%", value: "90%" },
      { name: "Javascript/Node/Express", rate: "0%", value: "80%" },
      { name: "Python/Django/DRF", rate: "0%", value: "90%" },
      { name: "Vue/Vuetify/Nuxt", rate: "0%", value: "85%" },
      { name: "React/MATERIAL-UI", rate: "0%", value: "85%" },
      { name: "Angular/Bootstrap", rate: "0%", value: "70%" },
      { name: "SQL/Postgresql", rate: "0%", value: "80%" },
      { name: "NoSQL/Mongodb", rate: "0%", value: "80%" },
      { name: "Pytest/Cypress", rate: "0%", value: "75%" },
      { name: "Photoshop/Filmora", rate: "0%", value: "60%" },
    ],
  }),
  methods: {
    ...mapActions(["pageChange"]),
    visibilityChanged(isVisible, entry) {
      this.isVisible = isVisible;
      console.log({ isVisible });
    },
  },
};
</script>

<style>

</style>