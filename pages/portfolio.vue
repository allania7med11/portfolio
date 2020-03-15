<template>
  <v-container class="grey lighten-3" fluid>
    <v-row>
      <v-col  cols="12" sm="5">
        <v-card class="grey lighten-3" flat>
          <v-card-title class="font-weight-bold blue--text">Structure Analysis Software</v-card-title>
          <v-card-text class="my-0 py-0">
            effective structure analysis software to calculate and
            get all diagrams and equations of efforts,stress and displacements
            for each beam in the structure and a lot more
          </v-card-text>
          <v-card-subtitle class="my-0 py-0 font-weight-bold green--text">Technology</v-card-subtitle>
          <v-card-text>
            Django handle the back-end operations and provide the APIs using the (DRF) Django Rest Framework,
            while Nuxt.js create the frontend.
          </v-card-text>
        </v-card>
      </v-col>
      <v-col cols="12" sm="7">
        <v-row>
          <v-img :src="items[page-1].src" />
        </v-row>
        <v-row align="center" justify="center"> 
          <div class="text-center">
            <v-pagination
              v-model="page"
              :length="4"
            ></v-pagination>
          </div>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>
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
          src:require("@/assets/structure/section.png")
        },
        {
          src:require("@/assets/structure/detail.png")
        }
      ]
    };
  }
};
</script>
