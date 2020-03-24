<template>
  <div>
    <v-toolbar dense dark>
        <v-btn
          small
          fab
          text
          aria-label="Pages"
          class="d-flex d-sm-none mx-1"
          @click.stop="drawer = !drawer"
        >
          <Fas i="bars" />
        </v-btn>
        <v-toolbar-items v-if="$vuetify.breakpoint.smAndUp">
          <v-btn-toggle
            mandatory
            group
            :key="componentKey"
            @change="fpage"
            dark
            v-model="pageN"
            tile
            borderless
          >
            <v-btn  class="ma-0" value="home">
              <v-avatar>
                <!-- eslint-disable-next-line vue/html-self-closing -->
                <img class="pa-1" src="~/assets/favicon.png" alt="EffectiveWebApp" />
              </v-avatar>
              <span class="ml-2 font-weight-black font-italic">Home</span>
            </v-btn>
            <v-btn  class="ma-0" value="about">
              <span>About</span>
            </v-btn>
            <v-btn  class="ma-0" value="portfolio">
              <span>Portfolio</span>
            </v-btn>
            <v-btn  class="ma-0" value="contact">
              <span>Contact</span>
            </v-btn>
          </v-btn-toggle>
        </v-toolbar-items>
      </v-toolbar>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex"
export default {
  data() {
    return {
      clipped: false,
      drawer: false,
      miniVariant: false,
      componentKey: 0,
      pageN: "home",
      pages:[
        {name:"about", icon:"info-circle"},{name:"portfolio", icon:"book"},{name:"contact", icon:"envelope"}
      ]
    };
  },
  computed :{
    ...mapState(["page","isActive"])
  },
  methods: {
    ...mapActions(["pageChange"]),
    fpage() {
      this.pageChange(this.pageN)
    },
    fpageB(page) {
      if (page === this.pageN) {
        this.pageChange(this.pageN);
      }
    }
  },
  watch: {
    page: {
      handler() {
        if (this.page !== this.pageN) {
          this.pageN = this.page;
          this.componentKey=+ 1
        }
      }
    }
  }
};
</script>
<style>
.responsive {
  height: auto;
  width: 20px;
}
.txt-left {
  float: left;
}
.custom_cls {
  display: block;
  width: 100%;
}
.toggleVertical {
  flex-direction: column;
  width: 100%;
  margin: 0;
  padding: 0;
}
body {
  margin: 0;
  font-family: Arial, Helvetica, sans-serif;
}

.top-container {
  background-color: #f1f1f1;
  padding: 30px;
  text-align: center;
}

.header {
  padding: 10px 16px;
  background: #555;
  color: #f1f1f1;
}

.content {
  padding: 16px;
}

.sticky {
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 1;
}

.sticky + .content {
  padding-top: 102px;
}
</style>