<template>
<div :class="{ sticky: isActive }" ref="myHeader">
  <v-toolbar  dense dark >
      <v-toolbar-items>
        <v-btn text to="#home" exact>
          <v-avatar>
            <!-- eslint-disable-next-line vue/html-self-closing -->
            <img
              class="pa-1"
              src="~/assets/favicon.png"
              alt="EffectiveWebApp"
            />
          </v-avatar>
          <span class="ml-2 font-weight-black font-italic">
            Home
          </span>
        </v-btn>
      </v-toolbar-items>
      <v-toolbar-items>
        <v-btn to="#about" text exact>
          <span>About</span>
        </v-btn>
      </v-toolbar-items>
    </v-toolbar>
</div>
</template>

<script>
export default {
  created() {
    if (process.client) {
      window.addEventListener("scroll", this.handleScroll);
    }
  },
  destroyed() {
    if (process.client) {
      window.removeEventListener("scroll", this.handleScroll);
    }
  },
  data() {
    return {
      isActive: false,
    };
  },
  methods: {
    handleScroll(event) {
      if (process.client) {
        var header = this.$refs.myHeader;
        var sticky = header.offsetTop;
        if (window.pageYOffset > sticky) {
          this.isActive=true
        } else {
          this.isActive=false
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
