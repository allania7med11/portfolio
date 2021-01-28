<template>
  <v-row no-gutters>
      <v-col v-for="(about, key) in abouts" cols="6" sm="3" v-bind:key="key">
        <v-card class="text-center" flat>
          <img data-aos="flip-left" height="125px" :src="require(`@/assets/images/${about.img}.png`)" />
          <v-card-title data-aos="zoom-in" class="justify-center">{{ about.title }}</v-card-title>
          <v-card-subtitle data-aos="zoom-in" class="justify-center">{{ about.subtitle }}</v-card-subtitle>
        </v-card>
      </v-col>
    </v-row>
</template>

<script>
export default {
  data: () => ({
    isActive1: false,
    abouts: [
      {
        img: "fast",
        title: "Fast",
        subtitle:
          "Fast load times and lag free interaction, my highest priority."
      },
      {
        img: "responsive",
        title: "Responsive",
        subtitle: "My layouts will work on any device, big or small."
      },
      {
        img: "intuitive",
        title: "Intuitive",
        subtitle: "Strong preference for easy to use, intuitive UX/UI."
      },
      {
        img: "dynamic",
        title: "Dynamic",
        subtitle:
          "Websites don't have to be static, I love making pages come to life."
      }
    ]
  })
};
</script>

<style>

</style>