<template>
  <v-container fluid>
    <v-row>
      <v-col>
        <v-card flat>
          <v-card-title>Online Structure Analysis Software</v-card-title>
          <v-card-text>
            effective structure analysis software to calculate and
            get all diagrams and equations of efforts,stress and displacements
            for each beam in the structure and a lot more
          </v-card-text>
          <v-card-subtitle>Technology</v-card-subtitle>Django handle the back-end operations and provide the APIs using the (DRF) Django Rest Framework,
          while Nuxt.js create the frontend.
        </v-card>
      </v-col>
      <v-col>
        <v-carousel cycle height="400" hide-delimiter-background show-arrows-on-hover>
          <v-carousel-item v-for="(slide, i) in slides" :key="i">
            <v-sheet :color="colors[i]" height="100%">
              <v-row class="fill-height" align="center" justify="center">
                <div class="display-3">{{ slide }} Slide</div>
              </v-row>
            </v-sheet>
          </v-carousel-item>
        </v-carousel>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {};
</script>

<style>
</style>