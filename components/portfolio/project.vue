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
    <v-col cols="12">
      <template v-if="project.images">
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
      </template>
      <template v-if="project.video">
        <v-row>
          <v-container fluid class="mt-8">
            <v-row align="center" justify="center">
              <v-col cols="11">
                <div class="video-description">This is a trailer for the software in version 1</div>
                <div class="video-container">
                  <iframe
                    :title="project.name"
                    width="95%"
                    height="343"
                    :src="project.video"
                    frameborder="0"
                    allowfullscreen
                  ></iframe>
                </div>
              </v-col>
            </v-row>
          </v-container>
        </v-row>
      </template>
    </v-col>

    <v-col cols="12">
      <v-row align="center" justify="center">
        <div class="text-center">
          <v-btn
            v-for="(action, index) in project.actions"
            :key="index"
            class="font-weight-bold ma-5"
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
  props: ["project"],
  data() {
    return {
      page: 1,
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
.video-container {
  max-width: 600px;
  margin: auto;
}
.video-description{
  text-align: center;
  font-weight: bold;
  margin-bottom: 8px;
}
</style>
