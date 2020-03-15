<template>
  <v-row no-gutters align="center">
      <v-col cols="12" sm="5">
          <v-card data-aos="fade-right" class="text-center" flat>
            <img height="250px" :src="require('@/assets/profile.png')" />
            <v-card-title class="justify-center">Who's this guy?</v-card-title>
            <v-card-subtitle class="justify-center">
              I'm a full-stack web developer from Tunis ,Kairouan.
              <br />I have a passion to solve difficult problems and make effective applications that make life of people easier.
              <br />Let's make something special.
            </v-card-subtitle>
          </v-card>
      </v-col>
      <v-col cols="12" sm="7" >
        <v-card  data-aos="fade-left" class="text-center" flat>
          <v-row v-observe-visibility="visibilityChanged" v-for="(value, key) in skills" class="my-4" no-gutters v-bind:key="key">
            <v-col cols="3">
              <div class="text-center blue darken-1 white--text">
                <span class="body-2 font-weight-bold">{{ value.name }}</span></div>
            </v-col>
            <v-col>
              <div class="grey lighten-3">
                <div :style="{ width : value.rate, transition: 'width 2s' }" class="blue darken-4">&nbsp;</div>
              </div>
            </v-col>
            <v-col cols="1">
              <div class="text-center grey lighten-2 text-right grey--text--lighten-1">
                <span class="body-2">{{ value.value }}</span>
              </div>
            </v-col>
          </v-row>
        </v-card>
      </v-col>
    </v-row>
</template>

<script>
import features from "~/components/cps/features.vue"
import skills from "~/components/cps/skills.vue"
export default {
  components: {
    features,
    skills
  },
  data: () => ({
    show: false,
    isVisible: false,
    skills: [
      { name: "Html/Css", rate: "0%", value: "90%" },
      { name: "Vue/Nuxt", rate: "0%", value: "85%" },
      { name: "Javascript", rate: "0%", value: "80%" },
      { name: "Cypress", rate: "0%", value: "70%" },
      { name: "Django/DRF", rate: "0%", value: "90%" },
      { name: "Postgresql", rate: "0%", value: "80%" },
      { name: "Python", rate: "0%", value: "85%" },
      { name: "Pytest", rate: "0%", value: "80%" },
      { name: "Photoshop", rate: "0%", value: "60%" },
      { name: "Filmora", rate: "0%", value: "70%" }
    ]
  }),
  methods: {
    visibilityChanged (isVisible, entry) {
      const l=this.skills.map(cv => Object.assign(cv, {rate: cv.value}))
      this.skills= l
    },
  }
};
</script>

<style>

</style>