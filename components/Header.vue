<template>
  <div :class="{ sticky: isActive }" >
    <v-toolbar dense dark>
      <v-toolbar-items>
        <v-btn-toggle mandatory group :key="componentKey"     @change="fpage" dark v-model="pageN" tile group borderless>
          <v-btn @click="fpageB('home')" class="ma-0"  value="home">
            <v-avatar>
              <!-- eslint-disable-next-line vue/html-self-closing -->
              <img class="pa-1" src="~/assets/favicon.png" alt="EffectiveWebApp" />
            </v-avatar>
            <span class="ml-2 font-weight-black font-italic">Home</span>
          </v-btn>
          <v-btn @click="fpageB('about')" class="ma-0" value="about" >
            <span>About</span>
          </v-btn>
          <v-btn @click="fpageB('portfolio')" class="ma-0" value="portfolio" >
            <span>Portfolio</span>
          </v-btn>
          <v-btn @click="fpageB('contact')" class="ma-0" value="contact" >
            <span>Contact</span>
          </v-btn>
        </v-btn-toggle>
      </v-toolbar-items>
    </v-toolbar>
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
      componentKey :0,
      pageN: 'home',
    };
  },
  methods: {
    async fpage() {
      console.log("fpage", this.pageN)
      await this.$emit('change', this.pageN)
    },
    async fpageB(page) {
      if (page===this.pageN){
        console.log("fpageB", this.pageN)
        await this.$emit('change', this.pageN)
      }
    }
  },
  watch: {
    page: {
      immediate: true,
      handler(value) { 
        this.pageN = this.page
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
