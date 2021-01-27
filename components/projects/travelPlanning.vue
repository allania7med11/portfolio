<template>
  <v-row>
    <v-col cols="12">
      <div class="projectName">Travel Planner</div>
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
          this website application will make trip planning more fun and easy with many feature such as:
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
          <v-row align="center" justify="center">
            <div class="text-center">
              <v-pagination
                v-model="page"
                :length="items.length"
              ></v-pagination>
            </div>
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
            href="https://triplanning.herokuapp.com/"
            >Visit Website</v-btn
          >
          <v-btn
            class="font-weight-bold"
            color="success"
            target="_blank"
            href="https://github.com/allania7med11/TravelPlanner"
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
      technologies: ["Heroku", "Html", "Scss", "Express", "Webpack", "PWA"],
      features: [
        `getting images to your distinations in any place in the world`,
        `getting day to day infos about temperatue, precipitation ,wind speed during your trip`,
        `reminding yourself how many days to start the trip , how many days you already spent on it and even how many days since you finish your adventure`,
        `saving your trips to get all the infos you need later even when you are offline`
      ],
      items: [
        {
          src: require("@/assets/travelPlanning/form.png"),
        },
        {
          src: require("@/assets/travelPlanning/img.png"),
        },
        {
          src: require("@/assets/travelPlanning/tmp.png"),
        },
        {
          src: require("@/assets/travelPlanning/prep.png"),
        },
        {
          src: require("@/assets/travelPlanning/history.png"),
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
