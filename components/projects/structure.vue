<template>
  <v-row>
    <v-col cols="12">
      <div class="projectName">Structure Analysis Software</div>
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
          Structure Analysis is an improved version from Legacy Structure
          Analysis where I add many features to improve user experience such as
          :
          <ul class="features">
            <li v-for="(feature, index) in features" :key="index">
              <font-awesome-icon class="primary--text" icon="star" />
              {{ feature }}
            </li>
          </ul>
        </v-card-text>
      </v-card>
    </v-col>
    <v-col cols="12" lg="5">
      <v-row>
        <v-container fluid>
          <v-row align="center" justify="center">
            <v-col cols="11">
              <v-img
                class="ml-2"
                width="95%"
                contain
                :style="imageHeight"
                :src="items[page - 1].src"
              />
            </v-col>
          </v-row>
        </v-container>
      </v-row>
      <v-row align="center" justify="center">
        <div class="text-center">
          <v-pagination v-model="page" :length="items.length"></v-pagination>
        </div>
      </v-row>
    </v-col>

    <v-col cols="12">
      <v-row align="center" justify="center">
        <div class="text-center">
          <v-btn
            class="font-weight-bold"
            color="success"
            target="_blank"
            href="https://effectivewebapp.com/"
            >Visit Website</v-btn
          >
          <v-btn
            class="font-weight-bold"
            color="success"
            target="_blank"
            href="https://play.google.com/store/apps/details?id=com.effectivewebapp"
            >Go to App</v-btn
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
      technologies: ["Django Rest Framework", "Nuxt", "Vuetify", "PWA"],
      features: [
        `social login like facebook twitter and google for fast registration
                and avoid password fatigue`,
        `offline support to check your project even when you are offline and go through calculated results`,
        `adding stress section to detailed analysis  to help engineers having deeper understanding for the behave of the structure`,
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
