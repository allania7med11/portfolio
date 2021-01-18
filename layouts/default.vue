<template>
  <v-app>
    <nuxt />
  </v-app>
</template>

<script>
import Header from "~/components/Header.vue";
export default {
  components: {
    Header,
  },
  data() {
    return {
      clipped: false,
    };
  },
};
</script>

<style lang="scss">
html {
  scroll-behavior: smooth;
}
%name-shared{
  text-align: center;
  font-family: "Sansita Swashed";
  white-space: nowrap;
  font-weight: bolder;
}
.sectionName {
  @extend %name-shared;
  font-size: 38px;
  @media screen and (max-width: 700px) {
    font-size: 24px;
  }
}
.projectName {
  @extend %name-shared;
  font-size: 32px;
  @media screen and (max-width: 700px) {
    font-size: 18px;
  }
}
</style>