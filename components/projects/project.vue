<template>
  <v-row>
    <v-col cols="12">
      <div class="projectName">{{ project.name }}</div>
    </v-col>
    <v-col cols="12" class="px-6">
      <v-card>
        <v-card-subtitle class="font-weight-bold primary--text title"
          >Technology</v-card-subtitle
        >
        <v-card-text class="pl-6">
          <v-chip
            v-for="(technology, index) in project.technologies"
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
          {{ project.overview }}
          <ul class="features">
            <li v-for="(feature, index) in project.features" :key="index">
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
                :src="project.images[page - 1].src"
              />
            </v-col>
          </v-row>
        </v-container>
      </v-row>
      <v-row align="center" justify="center">
        <div class="text-center">
          <v-pagination
            v-model="page"
            :length="project.images.length"
          ></v-pagination>
        </div>
      </v-row>
    </v-col>

    <v-col cols="12">
      <v-row align="center" justify="center">
        <div class="text-center">
          <v-btn
            v-for="(action, index) in project.actions"
            :key="index"
            class="font-weight-bold"
            color="success"
            target="_blank"
            :href="action.href"
            >{{ action.text }}</v-btn
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
      project: {
        name: "Best Electric Bike",
        technologies: ["GitHub Pages", "Html", "Css", "Javascript", "GIMP"],
        overview: `This website is for for marketing JD-20A06 Electric Bike and convert
          visitors to buyers by shown them:`,
        features: [
          `Features for the product like speed , range ,load capacity...`,
          `Reviews from verified buyers and their experience with the product`,
          `Special offer with different choices for limited period of time and call to action`,
        ],
        images: [
          {
            src: require("@/assets/bestElectricBike/features.png"),
          },
          {
            src: require("@/assets/bestElectricBike/reviews.png"),
          },
          {
            src: require("@/assets/bestElectricBike/offer.png"),
          },
        ],
        actions: [
          {
            text: "Visit Website",
            href: "https://allania7med11.github.io/DeployLandingPage/",
          },
          {
            text: "View on Github",
            href: "https://github.com/allania7med11/BestElectricBike/",
          },
        ],
      },
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
