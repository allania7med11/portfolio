<template>
  <v-row no-gutters align="start" justify="start">
    <v-col cols="12" sm="5">
      <v-card data-aos="fade-right" class="text-center" flat>
        <img height="200px" :src="require('@/assets/images/profile.png')" />
        <v-card-title class="justify-center">Who's this guy?</v-card-title>
        <v-card-subtitle class="justify-center">
          I'm a Full Stack Engineer from Kairouan, Tunisia.
          <br />I have a passion to solve difficult problems and build effective
          applications that make life easier.
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
        class="text-center pa-4"
        flat
      >
        <div
          v-for="(techs, category) in skills"
          v-bind:key="category"
          class="mb-4 text-left"
        >
          <div class="subtitle-1 font-weight-bold mb-2">
            {{ category }}
          </div>
          <div class="d-flex flex-wrap">
            <v-chip
              v-for="tech in techs"
              v-bind:key="tech"
              class="mr-2 mb-2"
              color="primary"
              text-color="white"
            >
              {{ tech }}
            </v-chip>
          </div>
        </div>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
import features from "~/components/about/features.vue";
import { mapActions } from "vuex";
export default {
  components: {
    features,
  },
  data: () => ({
    show: false,
    skills: {
      Backend: ["Python", "Django", "FastAPI", "Celery"],
      Frontend: ["React", "Next.js", "Vue", "TypeScript"],
      Data: ["PostgreSQL", "MongoDB", "Redis", "Kafka"],
      DevOps: ["Docker", "Linux", "CI/CD", "Ansible"],
      AI: ["OpenAI", "LangChain"]
    },
  }),
  methods: {
    ...mapActions(["pageChange"]),
  },
};
</script>

<style></style>
