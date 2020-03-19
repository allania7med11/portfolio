<template>
  <v-container  fluid>
    <v-row class="grey lighten-3">
      <v-col cols="12" md="6">
        <v-card class="grey lighten-3" flat>
          <v-card-title class="font-weight-bold blue--text">Legacy Structure Analysis Software</v-card-title>
          <v-card-text >
            our first application to calculate efforts,stress and displacements
            of the structure
          </v-card-text>
          <v-card-subtitle class="font-weight-bold green--text">Technology</v-card-subtitle>
          <v-card-text>
            <p>
              <span class="font-weight-bold">-Django:</span> We use django to serve our application and generate tables and forms when need it
            </p>
            <p>
              <span class="font-weight-bold">-Bootstrap:</span> We use bootstrap with jquery to style our app and make it responsive
            </p>
            <p>
              <span class="font-weight-bold">-Filmora:</span> We use Filmora to create trailer video and many tutorials to explain the application and make it very easy to use
            </p>
          </v-card-text>
        </v-card>
      </v-col>
      <v-col cols="12" md="6">
        <v-row>
          <v-container fluid>
            <v-row>
              <v-col cols="12">
                <v-row align="center" justify="center">
                  <iframe
                    title="Effective Web App | Free Online Structure Analysis Software"
                    width="95%"
                    height="343"
                    src="https://www.youtube.com/embed/videoseries?list=PLDFGldFvahMtwgBPyknkKHGuu0pB1VMD4&amp;index=0"
                    frameborder="0"
                    allowfullscreen
                  ></iframe>
                </v-row>
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
              href="https://legacy.effectivewebapp.com/"
            >Visit Website</v-btn>
          </div>
        </v-row>
      </v-col>
    </v-row>
    <v-row class="grey lighten-2">
      <v-col  cols="12" md="6">
        <v-row>
          <v-container fluid>
            <v-row>
              <v-col cols="12">
                <v-row align="center" justify="center">
                  <v-img class="ml-2" width="95%" contain :style="imageHeight" :src="items[page-1].src" />
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
          <v-card-title class="font-weight-bold blue--text">Structure Analysis Software</v-card-title>
          <v-card-text class="my-0 py-0">
            effective structure analysis software to calculate and
            get all diagrams and equations of efforts,stress and displacements
            for each beam in the structure and a lot more
          </v-card-text>
          <v-card-subtitle class="my-0 py-0 font-weight-bold green--text">Technology</v-card-subtitle>
          <v-card-text>
            <p>
              Django handle the back-end operations and provide the APIs
              using the (DRF) Django Rest Framework,
              while Nuxt.js create the frontend.
            </p>
            <p>
              <span class="font-weight-bold">-Nginx proxy:</span> We use Nginx proxy to serve django and nuxt app with the same domain so we can
              use session based authentication to authenticate user in both backend and
              frontend apps
            </p>
            <p>
              <span class="font-weight-bold">-Social login:</span> We provide social login like facebook twitter and google for fast registration and
              avoid password fatigue
            </p>
            <p>
              <span class="font-weight-bold">-PWA:</span> Our website is also PWA to improve loading time and work offline so user can see the
              projects they visited in their devices without the need of any connection
              then we use this technology to create android app
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
            >Visit Website</v-btn>
            <v-btn
              class="font-weight-bold"
              color="success"
              target="_blank"
              href="https://play.google.com/store/apps/details?id=com.effectivewebapp"
            >Go to App</v-btn>
          </div>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      page: 1,
      items: [
        {
          src: require("@/assets/structure/home.png")
        },
        {
          src: require("@/assets/structure/login.png")
        },
        {
          src: require("@/assets/structure/section.png")
        },
        {
          src: require("@/assets/structure/detail.png")
        },
        {
          src: require("@/assets/structure/offline.png")
        }
      ]
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
    }
  }
};
</script>
<style scoped>
img {
  height: 50%;
}
</style>