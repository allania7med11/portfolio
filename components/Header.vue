<template>
  <div :class="{ sticky: isActive }" >
    <v-toolbar dense dark>
      <v-toolbar-items>
        <v-btn-toggle group :key="componentKey" @change="fpage" dark v-model="page" tile group borderless>
          <v-btn class="ma-0"  value="home">
            <v-avatar>
              <!-- eslint-disable-next-line vue/html-self-closing -->
              <img class="pa-1" src="~/assets/favicon.png" alt="EffectiveWebApp" />
            </v-avatar>
            <span class="ml-2 font-weight-black font-italic">Home</span>
          </v-btn>
          <v-btn class="ma-0" value="about" >
            <span>About</span>
          </v-btn>
        </v-btn-toggle>
      </v-toolbar-items>
    </v-toolbar>
  </div>
</template>

<script>
export default {
  props: {
    vpage: {
      type: String,
      required: true,
      default: "home"
    },
    isActive: {
      type: Boolean,
      required: true,
      default: "home"
    }
  },
  data() {
    return {
      componentKey: 0,
      pageold: "home",
      page: "home"
    };
  },
  methods: {
    fpage() {
      if (process.client) {
        if (["about","home"].includes(this.page)){
          document.getElementById(this.page).scrollIntoView();
          this.pageold=this.page
        } else {
          this.page=this.pageold
          document.getElementById(this.page).scrollIntoView();
          this.componentKey += 1
        }
      }
    }
  },
  watch: {
    vpage: {
      immediate: true,
      handler(value) { 
        if (["about","home"].includes(this.vpage)){
          this.page= this.vpage
          this.componentKey += 1
        }
      }
    }
  }
};
</script>
<style>
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
