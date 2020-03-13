<template>
  <v-container fluid>
    <br />
    <br />
    <br />
    <br />
    <v-row>
      <v-col>
        <div
          class="display-1 font-weight-bold text-center mb-4"
          style="text-decoration: underline;"
        >ABOUT</div>
      </v-col>
    </v-row>
    <br />
    <br />
    <v-lazy
          v-model="isActive1"
          :options="{
          threshold: .5
        }"
          min-height="200"
        >
      <features/>
    </v-lazy>
    <br />
    <br />
    <v-lazy
          v-model="isActive2"
          :options="{
          threshold: .5
        }"
          min-height="200"
        >
      <skills/>
    </v-lazy>
  </v-container>
</template>
<script>
import features from "~/components/cps/features.vue"
import skills from "~/components/cps/skills.vue"
export default {
  components: {
    features,
    skills
  },
  data: () => ({
    isActive1: false,
    isActive2: false,
    show: false,
    isVisible: true
  })
};
</script>

<style>
</style>