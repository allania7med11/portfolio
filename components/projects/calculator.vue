<template>
  <v-row>
    <v-col cols="12">
      <div class="projectName">Effective Online Calculator</div>
    </v-col>
    <v-col cols="12" class="px-6">
      <v-card>
        <v-card-subtitle class="font-weight-bold primary--text title"
          >Technology</v-card-subtitle
        >
        <v-card-text class="pl-6">
          <v-chip
            v-for="(technology, index) in technologies"
            :key="index"
            class="ma-1"
            color="primary"
            text-color="white"
          >
            {{ technology }}
          </v-chip>
        </v-card-text>
        <v-card-subtitle class="font-weight-bold primary--text title"
          >Overview</v-card-subtitle
        >
        <v-card-text class="pl-6">
          {{ overview }}
          <ul class="features">
            <li v-for="(feature, index) in features" :key="index">
              <font-awesome-icon class="primary--text" icon="star" />
              {{ feature }}
            </li>
          </ul>
        </v-card-text>
      </v-card>
    </v-col>
    <v-col cols="12">
      <v-row>
        <v-container fluid>
          <v-row align="center" justify="center">
            <v-col cols="11">
                <iframe
                  title="Effective Online Calculator"
                  width="95%"
                  height="343"
                  src="https://www.youtube.com/embed/xUD84nl8Gjs"
                  frameborder="0"
                  allowfullscreen
                ></iframe>
            </v-col>
          </v-row>
        </v-container>
      </v-row>
    </v-col>

    <v-col cols="12">
      <v-row align="center" justify="center">
        <div class="text-center">
          <v-btn
            class="font-weight-bold"
            color="success"
            target="_blank"
            href="https://calculator.effectivewebapp.com/"
            >Visit Website</v-btn
          >
          <v-btn
            class="font-weight-bold"
            color="success"
            target="_blank"
            href="https://github.com/allania7med11/calculator"
            >View on Github</v-btn
          >
        </div>
      </v-row>
    </v-col>
  </v-row>
</template>

<script>
export default {
  data() {
    return {
      page: 1,
      technologies: ["Nuxt", "Vuetify", "MathExpressionEvaluator"],
      overview:"This application cover your need for any calculation from simple to advance one where you can find:",
      features: [
        `In standard view, all basic calculations such as addition, subtraction, multiplication, and division...`,
        `In scientific view ,more advance scientific operation such as trigonometric, logarithmic, and exponential functions...`,
      ],
      items: [
        {
          src: require("@/assets/structure/home.png"),
        },
        {
          src: require("@/assets/structure/login.png"),
        },
        {
          src: require("@/assets/structure/section.png"),
        },
        {
          src: require("@/assets/structure/detail.png"),
        },
        {
          src: require("@/assets/structure/offline.png"),
        },
      ],
    };
  },
  computed: {
    imageHeight() {
      if (this.$vuetify.breakpoint.mdAndUp) {
        return { height: "350px" };
      } else if (this.$vuetify.breakpoint.smAndUp) {
        return { height: "250px" };
      }
      return { height: "300px" };
    },
  },
};
</script>

<style lang="scss">
ul.features {
  list-style-type: none;
}
.sectionName {
  text-align: center;
  font-family: "Sansita Swashed";
  font-size: 38px;
  white-space: nowrap;
  font-weight: bolder;
  @media screen and (max-width: 700px) {
    font-size: 18px;
  }
}
</style>
