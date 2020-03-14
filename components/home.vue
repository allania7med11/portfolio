<template>
  <v-container class="bgImgCenter white--text pa-5 ma-0 text-center" fill-height fluid>
    <v-row align="center"
        justify="center">
        <v-col>
          <h1 >Hello, I'm <span class="primary--text">Allani Ahmed</span></h1>
          <h1 >I'am a full-stack web developper</h1>
          <v-btn @click="fpage('about')" class="ma-2" outlined color="white" >
            View my work<Fas class="ml-2" i="arrow-right" />
          </v-btn>
        </v-col>
    </v-row>
  </v-container>
</template>
<script>
export default {
  methods:{
    fpage(name) {
      if (process.client) {
        document.getElementById( name ).scrollIntoView();
      }
    },
  }
}
</script>
<style scoped>
.bgImgCenter{
    background-image: url('~assets/home.png');
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
