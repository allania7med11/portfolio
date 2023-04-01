<template>
  <div>
    <v-container fluid class="full-height ma-0 pa-0">
      <home  id="home" />
    </v-container>
    <div id="sticky">
      <client-only>
        <Header />
      </client-only>
    </div>
    <v-container fluid class="full3-height ma-0 pa-0">
     <div id="about" style="padding-top: 70px;" min-height="100vh">
        <v-lazy v-model="Active['about']" :options="{threshold: .5}" min-height="200px">
          <about />
        </v-lazy>
      </div>
      <div id="portfolio" style="padding-top: 60px;" class="grey lighten-2" min-height="100vh">
        <v-lazy v-model="Active['portfolio']" :options="{threshold: .5}" min-height="200px">
          <portfolio />
        </v-lazy>
      </div>
      <div id="contact" style="padding-top: 60px;" class="grey darken-4 min-full-height" min-height="100vh">
        <v-lazy v-model="Active['contact']" :options="{threshold: .5}" min-height="200px">
          <contact />
        </v-lazy>
      </div>
    </v-container>
  </div>
</template>

<script>
import Header from "~/components/Header.vue";
import home from "~/components/home.vue";
import about from "~/components/about.vue";
import portfolio from "~/components/portfolio.vue";
import contact from "~/components/contact.vue";
import { mapState, mapActions } from "vuex";
export default {
  components: {
    Header,
    home,
    about,
    portfolio,
    contact,
  },
  data() {
    return {
      vpage: "home",
      clipped: false
    };
  },
  computed: {
    ...mapState(["Active", "page", "isActive"]),
  },
  created() {
    this.$vuetify.theme.dark = false
    if (process.client) {
      window.addEventListener("scroll", this.handleScroll);
    }
  },
  mounted() {
    this.handleScroll();
  },
  destroyed() {
    if (process.client) {
      window.removeEventListener("scroll", this.handleScroll);
    }
  },
  watch: {
    vpage: {
      immediate: true,
      handler(val) {
        if (process.client) {
          this.stateChange({ state: "page", value: val });
        }
      },
    },
  },
  methods: {
    ...mapActions(["ActiveChange", "stateChange"]),
    handleScroll() {
      if (process.client) {
        const sticky = document.getElementById("sticky").offsetTop;
        const tAbout = document.getElementById("about").offsetTop;
        const tPortfolio = document.getElementById("portfolio").offsetTop;
        const tContact = document.getElementById("contact").offsetTop;
        if (1.1 * window.pageYOffset >= tContact) {
          this.vpage = "contact";
        } else if (1.1 * window.pageYOffset >= tPortfolio) {
          this.vpage = "portfolio";
        } else if (1.1 * window.pageYOffset >= tAbout) {
          this.vpage = "about";
        } else {
          this.vpage = "home";
        }
        if (window.pageYOffset > sticky) {
          this.stateChange({ state: "isActive", value: true });
        } else {
          this.stateChange({ state: "isActive", value: false });
        }
      }
    },
  },
};
</script>

<style>
.full3-height {
  height: 300vh;
}
.full-height {
  height: 100vh;
}
.min-full-height {
  min-height: 100vh;
}
</style>