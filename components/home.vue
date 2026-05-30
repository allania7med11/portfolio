<template>
  <v-container class="bgImgCenter white--text pa-5 ma-0 text-center" fill-height fluid>
    <v-row align="center"
        justify="center">
        <v-col>
          <h1 >Hello, I'm <span class="primary--text">Allani Ahmed</span></h1>
          <h1 >I'm a Full Stack Engineer</h1>
          <v-btn @click="pageChange('about')" class="ma-2" outlined color="white" >
            View my work<Fas class="ml-2" i="arrow-right" />
          </v-btn>
        </v-col>
    </v-row>
  </v-container>
</template>
<script>
import {  mapActions } from "vuex"
export default {
  methods:{
    ...mapActions(["pageChange"])
  }
}
</script>
<style scoped>
.bgImgCenter{
    background-image: url('~assets/images/home.png');
    background-repeat: no-repeat;
    background-position: center center; 
    background-attachment: fixed;
    background-size: cover;
    position: relative;
}
.full-height {
  height: 100%;
}
</style>
