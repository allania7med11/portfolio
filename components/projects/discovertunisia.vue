<template>
  <v-row>
    <v-col cols="12">
      <div class="projectName">Discover Tunisia</div>
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
          This website is for  promoting tourism in Tunisia and show the beauty of this country where you can find:
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
            href="https://discovertunisia.netlify.app/"
            >Visit Website</v-btn
          >
          <v-btn
            class="font-weight-bold"
            color="success"
            target="_blank"
            href="https://github.com/allania7med11/DiscoverTunisia"
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
      technologies: ["Netlify", "Html", "Css"],
      features: [
        `An overview of this country with different destination you can visit`,
        `Detailed description for each destination where you can informations and images of sights you can visit`,
        `Ability to share any blog  you like with your friends in social media like Facebook Twitter and Linkedin`,
      ],
      items: [
        {
          src: require("@/assets/discovertunisia/home.png"),
        },
        {
          src: require("@/assets/discovertunisia/tabarka.png"),
        },
        {
          src: require("@/assets/discovertunisia/djerba.png"),
        },
        {
          src: require("@/assets/discovertunisia/south.png"),
        }
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
