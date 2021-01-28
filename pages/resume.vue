<template>
  <div class="d-flex">
    <div class="d-flex flex-column flex-grow-3 grey darken-3">
      <div class="d-flex flex-column text-center pa-4">
        <div class="display-1 font-weight-bold">
          {{ infos.name }}
        </div>
        <div class="title">{{ infos.profession }}</div>
        <div class="py-2">
          <img height="250px" :src="infos.image" />
        </div>
      </div>
      <div class="d-flex flex-column">
        <div class="black px-2 py-4 title">Personal Info</div>
        <div
          class="px-2 py-2"
          v-for="(value, key) in infos.personal"
          v-bind:key="key"
        >
          <div class="subheading font-weight-bold">{{ key }}:</div>
          <div class="body-2 font-weight-light">{{ value }}</div>
        </div>
      </div>
      <div class="d-flex flex-column">
        <div class="black px-2 py-4 title">Skills</div>
        <div class="px-2 py-1" v-for="(value, key) in skills" v-bind:key="key">
          <div class="subheading font-weight-bold">{{ value.name }}</div>
          <v-rating
            dark
            :empty-icon="emptyIcon"
            :full-icon="fullIcon"
            :half-icon="halfIcon"
            v-model="value.rate"
            background-color="white lighten-3"
            color="white"
            half-increments
            readonly
          ></v-rating>
        </div>
      </div>
    </div>
    <div class="d-flex flex-column flex-grow-9 ma-4">
      <div class="my-2">
        {{ infos.about }}
      </div>
      <div class="d-flex flex-column">
        <v-divider></v-divider>
        <div class="py-2 title">Experience</div>
        <v-divider></v-divider>
        <div
          v-for="experience in experiences"
          v-bind:key="experience.id"
          class="d-flex"
        >
          <div class="d-flex flex-column flex-grow-2 pa-2">
            <img height="50px" :src="experience.image" />
          </div>
          <div class="d-flex flex-column flex-grow-10">
            <div class="title pt-1">
              {{ experience.title }} at {{ experience.company }}
            </div>
            <div class="subtitle-2">
              {{ experience.dates.start }}-{{ experience.dates.end }}
            </div>
            <div class="py-2">
              {{ experience.description }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import infos from "~/data/infos";
import skills from "~/data/skills";
import experiences from "~/data/experiences";
export default {
  data: () => ({
    emptyIcon: "mdi-star-outline",
    fullIcon: "mdi-star",
    halfIcon: "mdi-star-half-full",
    infos: infos,
    skills: skills,
    experiences: experiences,
  }),
  created() {
    this.$vuetify.theme.dark = true;
  },
};
</script>

<style>

.progressbar {
  background-color: black;
  border-radius: 13px;
  /* (height of inner div) / 2 + padding */
  padding: 3px;
}

.progressbar>div {
  background-color: orange;
  width: 40%;
  /* Adjust with JavaScript */
  height: 20px;
  border-radius: 10px;
}
</style>