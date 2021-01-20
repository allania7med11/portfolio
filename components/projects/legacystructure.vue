<template>
  <v-row>
    <v-col cols="12">
      <div class="projectName">Legacy Structure Analysis Software</div>
    </v-col>
    <v-col cols="12" class="px-6">
      <v-card >
        <v-card-subtitle class="font-weight-bold primary--text title"
          >Technology</v-card-subtitle
        >
        <v-card-text class="pl-6">
          <div>
            <v-chip
            color="primary"
            text-color="white"
            >
              Django
            </v-chip>
            <v-chip
              color="primary"
              text-color="white"
            >
              Bootstrap 
            </v-chip>
            <v-chip
              color="primary"
              text-color="white"
            >
              JQuery
            </v-chip>
            <v-chip
              color="primary"
              text-color="white"
            >
              Filmora
            </v-chip>
          </div>
        </v-card-text>
        <v-card-subtitle class="font-weight-bold primary--text title"
          >Overview</v-card-subtitle
        >
        <v-card-text class="pl-6">
          <p>
            Legacy Structure Analysis in an online software created by engineer for engineers with many
            features to make their work more effective such as:
            <ul class="features">
              <li>
                <font-awesome-icon class="primary--text" icon="star" />
                Design truss and frame 2D structure  with unlimited supports, sections,beams and loads to define</li>
              <li>
                <font-awesome-icon class="primary--text" icon="star" />
                Calculate and get all diagrams and equations of efforts,stress and displacements for each beam in the structure and a lot more...</li>
              <li>
                <font-awesome-icon class="primary--text" icon="star" />
                Save all their work online to their account so no download required and they can access to all their projects anytime from any devices</li>
            </ul>
          </p>
        </v-card-text>
      </v-card>
    </v-col>
    <v-col cols="12" lg="5">
      <v-row>
        <v-container fluid>
          <v-row align="center" justify="center">
            <v-col cols="11">
                <iframe
                  title="Effective Web App | Free Online Structure Analysis Software"
                  width="95%"
                  height="343"
                  src="https://www.youtube.com/embed/videoseries?list=PLDFGldFvahMtwgBPyknkKHGuu0pB1VMD4&amp;index=0"
                  frameborder="0"
                  allowfullscreen
                ></iframe>
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
