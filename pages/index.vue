<template>
  <div>
    <v-container fluid class="full-height ma-0 pa-0">
      <home id="home" />
    </v-container>
    <Header />
    <v-container fluid class="ma-0 pa-0">
      <about id="about" class="full-height"/>
    </v-container>
  </div>
</template>

<script>
import Header from "~/components/Header.vue"
import home from "~/components/home.vue"
import about from "~/components/about.vue"
export default {
  components: {
    Header,
    home,
    about
  },
  data() {
    return {
      clipped: false
    };
  }
};
</script>

<style>
.full-height {
  height: 100vh;
}
</style>