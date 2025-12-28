<template>
  <div class="sections">
    <div class="side-section grey darken-3 py-4">
      <div class="d-flex flex-column text-center pa-4 text-no-wrap">
        <div class="display-1 font-weight-bold">
          {{ infos.name }}
        </div>
        <div class="title">{{ _tr(infos.profession) }}</div>
        <div class="py-2">
          <img height="200px" :src="infos.image" />
        </div>
      </div>
      <div class="d-flex flex-column">
        <div class="black px-2 py-4 title">{{ _tr(msgs.personel_info) }}</div>
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
        <div class="black px-2 py-4 title">{{ _tr(msgs.skills) }}</div>
        <div class="px-2 py-2" v-for="(techs, category) in skills" v-bind:key="category">
          <div class="subheading font-weight-bold mb-1">{{ category }}</div>
          <div class="d-flex flex-wrap">
            <span
              v-for="tech in techs"
              v-bind:key="tech"
              class="skill-tag mr-1 mb-1"
            >{{ tech }}</span>
          </div>
        </div>
      </div>
    </div>
    <div class="main-section ma-4">
      <div class="my-2">
        {{ _tr(infos.about) }}
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
              {{ _tr(experience.title) }} {{ _tr(msgs.at) }}
              {{ experience.company }}
            </div>
            <div class="subtitle-2">
              {{ _tr(experience.dates.start) }}-{{ _tr(experience.dates.end) }}
            </div>
            <div class="py-2 description">
              {{ _tr(experience.description) }}
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
              {{ education.degree }}{{ _tr(education.field) }}
            </div>
            <div class="subtitle-2">
              {{ education.dates.start }}-{{ education.dates.end }}
            </div>
            <div class="py-2 description">
              {{ _tr(education.description) }}
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
    educations,
    lang: "en",
    msgs: {
      at: {
        en: "at",
        fr: "chez",
      },
      personel_info : {
        en: "Personal Info",
        fr: "Informations Personnelles"
      },
      skills : {
        en: "Skills",
        fr: "Compétences"
      },

    },
  }),
  created() {
    this.$vuetify.theme.dark = true;
    this.lang = this.$route.query.lang || "en";
  },
  methods: {
    _tr(obj) {
      if (typeof obj === "string") {
        return obj;
      }
      if (this.lang in obj) {
        return obj[this.lang];
      }
      if ("en" in obj) {
        return obj["en"];
      }
      return obj;
    },
  },
};
</script>

<style>
.subtitle-2 {
  font-size: 13px;
}
.description {
  font-size: 15px;
}
.skill-tag {
  background-color: #616161;
  color: white;
  padding: 2px 8px;
  border-radius: 4px;
  font-size: 11px;
  font-weight: 500;
}
.sections {
  display: flex;
  flex-wrap: wrap;
}
.side-section {
  flex-basis: 200px;
  flex-grow: 1;
  flex-shrink: 0;
}
.main-section {
  flex-basis: 325px;
  flex-grow: 16;
  flex-shrink: 1;
  word-break: break-word;
}
</style>