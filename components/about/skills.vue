<template>
  <v-row no-gutters align="start" justify="start">
    <v-col cols="12" sm="5">
      <v-card data-aos="fade-right" class="text-center" flat>
        <img height="200px" :src="require('@/assets/images/profile.png')" />
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
import features from "~/components/about/features.vue";
import skills from "~/components/about/skills.vue";
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
      { name: "Html/Css", value: "90%" },
      { name: "Javascript/Typescript", value: "85%" },
      { name: "Python/Django/DRF", value: "90%" },
      { name: "Channels/WebSockets", value: "80%" },
      { name: "React/MATERIAL-UI/Next", value: "90%" },
      { name: "Pytest/Playwright", value: "80%" },
      { name: "Node/Express", value: "80%" },
      { name: "Vue/Vuetify/Nuxt", value: "85%" },
      { name: "SQL/Postgresql", value: "80%" },
      { name: "NoSQL/Mongodb", value: "80%" },
      { name: "Linux/Ansible/Docker", value: "85%" },
      { name: "Figma/UI", value: "75%" },
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