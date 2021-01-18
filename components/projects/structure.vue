<template>
  <v-row>
    <v-col cols="12">
      <v-divider></v-divider>
      <div class="projectName">Structure Analysis Software</div>
    </v-col>
    <v-col cols="12" md="6">
      <v-row>
        <v-container fluid>
          <v-row>
            <v-col cols="12">
              <v-row align="center" justify="center">
                <v-img
                  class="ml-2"
                  width="95%"
                  contain
                  :style="imageHeight"
                  :src="items[page - 1].src"
                />
              </v-row>
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
    <v-col cols="12" md="6">
      <v-card class="grey lighten-2" flat>
        <v-card-title class="font-weight-bold blue--text"
          >Description</v-card-title
        >
        <v-card-text class="my-0 py-0">
          We update our structure analysis software with the last technology to
          optimize our application and improve user experience
        </v-card-text>
        <v-card-subtitle class="my-0 py-0 font-weight-bold green--text"
          >Technology</v-card-subtitle
        >
        <v-card-text>
          <p>
            Django handle the back-end operations and provide the APIs using the
            (DRF) Django Rest Framework, while Nuxt.js create the frontend.
          </p>
          <p>
            <span class="font-weight-bold">- Nginx proxy:</span> We use Nginx
            proxy to serve django and nuxt app with the same domain so we can
            use session based authentication to authenticate user in both
            backend and frontend apps
          </p>
          <p>
            <span class="font-weight-bold">- Social login:</span> We provide
            social login like facebook twitter and google for fast registration
            and avoid password fatigue
          </p>
          <p>
            <span class="font-weight-bold">- PWA:</span> Our website is also PWA
            to improve loading time and work offline so user can see the
            projects they visited in their devices without the need of any
            connection then we use this technology to create android application
          </p>
        </v-card-text>
      </v-card>
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
