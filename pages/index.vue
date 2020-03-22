<template>
  <div>
    <v-container fluid class="full-height ma-0 pa-0">
      <home id="home" />
    </v-container>
    <Header
      id="sticky"
      :page="page"
      :isActive="isActive"
      @change="onChangeHeader"
    />
    <v-container fluid class="full3-height ma-0 pa-0">
      <div id="about" min-height="100vh">
        <v-lazy v-model="Active['about']" :options="{threshold: .5}" min-height="200px">
          <about />
        </v-lazy>
      </div>
      <div id="portfolio" min-height="100vh">
        <v-lazy v-model="Active['portfolio']" :options="{threshold: .5}" min-height="200px">
          <portfolio />
        </v-lazy>
      </div>
      <div id="contact" min-height="100vh">
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
      vpage: "home",
      clipped: false,
      page: "home",
      isActive: false,
      Active: { about: false, portfolio: false, contact: true }
    };
  },
  created() {
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
          this.page = val;
        }
      }
    }
  },
  methods: {
    async onChangeHeader(value) {
      switch (value) {
        case "about":
          this.Active = Object.assign(this.Active, { about: true });
          break;
        case "portfolio":
          this.Active = Object.assign(this.Active, {
            about: true,
            portfolio: true
          });
          break;
        case "contact":
          this.Active = Object.assign(this.Active, {
            about: true,
            portfolio: true,
            contact: true
          });
          break;
      }
      this.page = await value;
      document.getElementById(this.page).scrollIntoView();
    },
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