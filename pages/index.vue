<template>
  <div>
    <v-container fluid class="full-height ma-0 pa-0">
      <home id="home"  />
    </v-container>
    <Header id="sticky" :vpage="vpage" :isActive="isActive"  />
    <v-container fluid class="full-height ma-0 pa-0">
      <about id="about"   />
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
      clipped: false,
      vpage:"home",
      isActive: false
    };
  },
  created() {
    if (process.client) {
      window.addEventListener("scroll", this.handleScroll);
    }
  },
  mounted() {
    this.handleScroll()
  },
  destroyed() {
    if (process.client) {
      window.removeEventListener("scroll", this.handleScroll);
    }
  },
  methods:{
    handleScroll() {
      if (process.client) {
        const sticky = document.getElementById("sticky").offsetTop
        const tHome = document.getElementById("home").offsetTop
        const tAbout = document.getElementById("about").offsetTop
        if (window.pageYOffset<tAbout){
          this.vpage = "home"
        } else {
          this.vpage = "about"
        }
        if (window.pageYOffset > sticky) {
          this.isActive = true;
        } else {
          this.isActive = false;
        }
      }
    }
  }
};
</script>

<style>
.full-height {
  height: 100vh;
}
</style>