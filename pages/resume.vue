<template>
  <div class="sections">
    <div class="side-section grey darken-3 py-4">
      <div class="d-flex flex-column text-center pa-4 text-no-wrap">
        <div class="display-1 font-weight-bold">
          {{ infos.name }}
        </div>
        <div class="title">{{ infos.profession }}</div>
        <div class="py-2">
          <img height="200px" :src="infos.image" />
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
        <div class="px-2 py-1" v-for="(skill, key) in skills" v-bind:key="key">
          <div class="subheading font-weight-bold d-flex" style="justify-content:space-between">
            <div>{{ skill.name }}</div>
            <div>{{ skill.value }}</div>
          </div>
          <div class="progressbar">
            <div :style="{ width: skill.value }"></div>
          </div>
        </div>
      </div>
    </div>
    <div class="main-section ma-4">
      <div class="my-2">
        {{ infos.about }}
      </div>
      <div class="d-flex flex-column">
        <v-divider></v-divider>
        <div class="py-3 title">Experience</div>
        <v-divider></v-divider>
        <div
          v-for="experience in experiences"
          v-bind:key="experience.id"
          class="d-flex my-2"
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
      <div class="d-flex flex-column">
        <v-divider></v-divider>
        <div class="py-3 title">Education</div>
        <v-divider></v-divider>
        <div
          v-for="education in educations"
          v-bind:key="education.id"
          class="d-flex my-2"
        >
          <div class="d-flex flex-column flex-grow-2 pa-2">
            <img height="50px" :src="education.image" />
          </div>
          <div class="d-flex flex-column flex-grow-10">
            <div class="title pt-1">
              {{ education.school }}
            </div>
            <div class="subtitle-2">
              {{ education.degree }}{{ education.field }}
            </div>
            <div class="subtitle-2">
              {{ education.dates.start }}-{{ education.dates.end }}
            </div>
            <div class="py-2">
              {{ education.description }}
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
import educations from "~/data/educations";
export default {
  data: () => ({
    emptyIcon: "mdi-star-outline",
    fullIcon: "mdi-star",
    halfIcon: "mdi-star-half-full",
    infos,
    skills,
    experiences,
    educations
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

.progressbar > div {
  background-color: orange;
  /* Adjust with JavaScript */
  height: 5px;
  border-radius: 2px;
}
.sections {
  display: flex;
  flex-wrap: wrap;
}
.side-section{
  flex-basis: 200px;
  flex-grow: 1;
  flex-shrink: 0;
}
.main-section{
  flex-basis: 325px;
  flex-grow: 16;
  flex-shrink: 1;
  word-break: break-word;
}
</style>