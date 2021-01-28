<template>
  <v-container fluid>
    <v-row>
      <v-col>
        <div
          class="sectionName"
          style="text-decoration: underline;"
        >ABOUT</div>
      </v-col>
    </v-row>
    <br />
    <br />
    <br />
      <features/>
    <br />
    <br />
      <skills/>
    <br />
    <br />
    <br />
    <br />
  </v-container>
</template>
<script>
import features from "~/components/about/features.vue"
import skills from "~/components/about/skills.vue"
export default {
  components: {
    features,
    skills
  },
  data: () => ({
    isActive1: false,
    isActive2: false,
  })
};
</script>

<style>
</style>