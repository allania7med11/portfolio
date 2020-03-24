<template>
  <div>
    <v-navigation-drawer
      v-if="!$vuetify.breakpoint.smAndUp"
      v-model="drawer"
      :mini-variant="miniVariant"
      :clipped="clipped"
      dark
      fixed
      app
    >
      <v-list class="pa-0">
        <v-list-item class="pa-0 custom_cls">
          <v-btn-toggle
            class="toggleVertical text-left"
            mandatory
            group
            :key="componentKey"
            @change="fpage"
            dark
            v-model="pageN"
            tile
            borderless
          >
            <v-btn @click="fpageB('home')" class="ma-0" value="home">
              <v-list-item >
                <v-list-item-action>
                <div>
                  <!-- eslint-disable-next-line vue/html-self-closing -->
                  <img  class="mr-3 responsive" src="~/assets/favicon.png" alt="EffectiveWebApp" />
                  Home
                </div>
                </v-list-item-action>
              </v-list-item>
            </v-btn>
            <v-btn v-for="pg in pages"  @click="fpageB(pg.name)"  :value="pg.name" class="ma-0" :key="pg.id">
              <v-list-item>
                <v-list-item-action>
                <div>
                 <Fas class="mr-4" :i="pg.icon" />{{ pg.name }}
                </div>
                </v-list-item-action>
              </v-list-item>
            </v-btn>
          </v-btn-toggle>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <div :class="{ sticky: isActive }">
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
            <v-btn @click="fpageB('home')" class="ma-0" value="home">
              <v-avatar>
                <!-- eslint-disable-next-line vue/html-self-closing -->
                <img class="pa-1" src="~/assets/favicon.png" alt="EffectiveWebApp" />
              </v-avatar>
              <span class="ml-2 font-weight-black font-italic">Home</span>
            </v-btn>
            <v-btn @click="fpageB('about')" class="ma-0" value="about">
              <span>About</span>
            </v-btn>
            <v-btn @click="fpageB('portfolio')" class="ma-0" value="portfolio">
              <span>Portfolio</span>
            </v-btn>
            <v-btn @click="fpageB('contact')" class="ma-0" value="contact">
              <span>Contact</span>
            </v-btn>
          </v-btn-toggle>
        </v-toolbar-items>
      </v-toolbar>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    page: {
      type: String,
      required: true,
      default: "home"
    },
    isActive: {
      type: Boolean,
      required: true,
      default: false
    }
  },
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
  methods: {
    async fpage() {
      console.log("fpage", this.pageN);
      await this.$emit("change", this.pageN);
    },
    async fpageB(page) {
      if (page === this.pageN) {
        console.log("fpageB", this.pageN);
        await this.$emit("change", this.pageN);
      }
    }
  },
  watch: {
    page: {
      immediate: true,
      handler(value) {
        this.pageN = this.page;
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
