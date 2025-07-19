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
          <template v-if="project.groups">
            <div
              v-for="(group, groupName) in project.groups"
              :key="groupName"
              class="feature-group"
            >
              <div class="group-title">{{ groupName }}</div>
              <ul class="features">
                <li
                  v-for="(feature, index) in group.features"
                  :key="index"
                  class="feature"
                >
                  <div class="feature-icon">
                    <font-awesome-icon class="primary--text" icon="star" />
                  </div>
                  <div class="feature-text">
                    {{ feature }}
                  </div>
                </li>
              </ul>
            </div>
          </template>
          <template v-else>
            <ul class="features">
              <li
                v-for="(feature, index) in project.features"
                :key="index"
                class="feature"
              >
                <div class="feature-icon">
                  <font-awesome-icon class="primary--text" icon="star" />
                </div>
                <div class="feature-text">
                  {{ feature }}
                </div>
              </li>
            </ul>
          </template>
        </v-card-text>
      </v-card>
    </v-col>
    <v-col cols="12">
      <template v-if="project.images || project.groups">
        <v-row>
          <v-container fluid>
            <v-row align="center" justify="center">
              <v-col cols="11">
                <template v-if="project.groups">
                  <div
                    v-for="(group, groupName) in project.groups"
                    :key="groupName"
                    class="image-group"
                  >
                    <div class="group-title">{{ groupName }}</div>
                    <v-img
                      class="ml-2 zoom-cursor mb-4"
                      width="95%"
                      contain
                      :style="imageHeight"
                      :src="group.images[groupPages[groupName] - 1].src"
                      @click="
                        openOverlay(group.images[groupPages[groupName] - 1].src)
                      "
                    />
                    <v-row align="center" justify="center" class="mt-4">
                      <div class="text-center">
                        <v-pagination
                          v-model="groupPages[groupName]"
                          :length="group.images.length"
                          @input="updateGroupImage(groupName)"
                        ></v-pagination>
                      </div>
                    </v-row>
                  </div>
                </template>
                <template v-else>
                  <v-img
                    class="ml-2 zoom-cursor"
                    width="95%"
                    contain
                    :style="imageHeight"
                    :src="project.images[page - 1].src"
                    @click="openOverlay(project.images[page - 1].src)"
                  />
                </template>

                <v-overlay
                  v-if="overlayImage"
                  :value="overlayImage"
                  class="d-flex justify-center align-center zoom-out-cursor"
                  @click="overlayImage = false"
                >
                  <v-img :src="currentImage" max-width="90vw" />
                </v-overlay>
              </v-col>
            </v-row>
          </v-container>
        </v-row>
        <v-row v-if="!project.groups" align="center" justify="center">
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
          <div class="video-description">
            This is a trailer for the software in version 1
          </div>
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
      overlayImage: false,
      currentImage: null,
      groupPages: {},
    };
  },
  created() {
    // Initialize page numbers for each group
    if (this.project.groups) {
      Object.keys(this.project.groups).forEach((groupName) => {
        this.groupPages[groupName] = 1;
      });
    }
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
  methods: {
    openOverlay(imageSrc) {
      this.currentImage = imageSrc;
      this.overlayImage = true;
    },
    updateGroupImage(groupName) {
      // Force a re-render of the image when pagination changes
      this.$forceUpdate();
    },
  },
};
</script>

<style lang="scss">
ul.features {
  list-style-type: none;
  display: flex;
  flex-direction: column;
  gap: 4px;
  padding-left: 18px;
  padding-top: 8px;
}
.feature {
  display: flex;
  align-items: start;
  gap: 8px;
}
.feature-icon {
  min-width: 16px;
  margin-top: 2px;
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
.video-description {
  text-align: center;
  font-weight: bold;
  margin-bottom: 8px;
}

.zoom-cursor {
  cursor: zoom-in;
}

.zoom-out-cursor {
  cursor: zoom-out;
}

.feature-group {
  margin-bottom: 24px;
}
.group-title {
  font-weight: bold;
  color: var(--v-primary-base);
  margin-bottom: 12px;
  font-size: 1.1em;
}
.image-group {
  margin-bottom: 32px;
}
</style>
