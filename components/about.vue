<template>
  <v-container fluid>
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
  })
};
</script>

<style>
</style>