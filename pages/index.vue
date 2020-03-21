<template>
  <div>
    <v-container fluid class="full-height ma-0 pa-0">
      <home id="home"  />
    </v-container>
    <Header id="sticky" :vpage="vpage" :isActive="isActive"  />
    <v-container fluid class="full3-height ma-0 pa-0">
      <about id="about"   />
      <portfolio id="portfolio"   />
      <contact id="contact"   />
    </v-container>
  </div>
</template>

<script>
import Header from "~/components/Header.vue"
import home from "~/components/home.vue"
import about from "~/components/about.vue"
import portfolio from "~/components/portfolio.vue"
import contact from "~/components/contact.vue"
export default {
  components: {
    Header,
    home,
    about,
    portfolio,
    contact
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
        const tAbout = document.getElementById("about").offsetTop
        const tPortfolio = document.getElementById("portfolio").offsetTop
        const tContact = document.getElementById("contact").offsetTop
        console.log(window.pageYOffset,tContact)
        if (1.1*window.pageYOffset>=tContact){
          this.vpage = "contact"
        } else if(1.1*window.pageYOffset>=tPortfolio) {
          this.vpage = "portfolio"
        } else if(1.1*window.pageYOffset>=tAbout) {
          this.vpage = "about"
        } else {
          this.vpage = "home"
        }
        console.log(this.vpage)
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
.full3-height {
  height: 300vh;
}
.full-height {
  height: 100vh;
}
</style>