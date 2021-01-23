<template>
  <v-container fluid>
    <v-row>
      <v-col>
        <div class="sectionName" style="text-decoration: underline">
          PORTFOLIO
        </div>
      </v-col>
    </v-row>
    <v-row justify="space-around">
      <v-col v-for="(project, index) in projects" :key="index" md="4">
        <v-hover v-slot="{ hover }" open-delay="200">
          <v-card :elevation="hover ? 8 : 4" outlined shaped style="height: 100%" >
            <v-img
              :src="require(`~/assets/${project.image}/entry.png`)"
              class="projectImage"
            >
              <div
                v-if="hover"
                :style="cardColor(hover)"
                style="height: 100%; width: 100%; white-space: nowrap"
              >
                <div class="centered-axis-xy text-center">
                  <div class="title font-weight-black my-1">
                    {{ project.name }}
                  </div>
                  <div
                    class="subtitle-1 font-italic purple--text text--darken-2 my-1"
                  >
                    {{ project.technology }}
                  </div>
                  <div>
                    <v-btn
                      class="purple--text text--darken-2 ma-4"
                      outlined
                      @click="openProject(project)"
                    >
                      LEARN MORE
                    </v-btn>
                  </div>
                </div>
              </div>
            </v-img>
          </v-card>
        </v-hover>
      </v-col>
    </v-row>
    <v-dialog v-model="dialog">
      <v-card v-if="dialog">
        <component :is="currentComponent"></component>
      </v-card>
    </v-dialog>
  </v-container>
</template>

<script>
import calculator from "~/components/projects/calculator.vue";
import structure from "~/components/projects/structure.vue";
import legacystructure from "~/components/projects/legacystructure.vue";
export default {
  components: {
    calculator,
    structure,
    legacystructure,
  },
  data() {
    return {
      currentComponent: "structure",
      dialog: false,
      projects: [
        {
          value: "calculator",
          image: "calculator",
          name: "Effective Online Calculator",
          technology: "Vue/MathJS",
        },
        {
          value: "structure",
          image: "structure",
          name: "Structure Analysis",
          technology: "Django/Vue",
        },
        {
          value: "legacystructure",
          image: "legacystructure",
          name: "Legacy Structure Analysis",
          technology: "Django/Bootstrap",
        },
      ],
    };
  },
  methods: {
    openProject(project) {
      this.currentComponent = project.value;
      this.dialog = true;
    },
    cardColor(hover) {
      let opacity = hover ? 0.8 : 0;
      return { backgroundColor: `rgba(255, 255, 255, ${opacity})!important` };
    },
  },
};
</script>
<style scoped>
.projectImage {
  height: 100%;
}
.centered-axis-xy {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}
</style>