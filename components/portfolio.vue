<template>
  <v-container fluid>
    <v-row>
      <v-col>
        <div
          class="sectionName"
          style="text-decoration: underline"
        >
          PORTFOLIO
        </div>
      </v-col>
    </v-row>
    <structure />
    <legacystructure />
  </v-container>
</template>

<script>
import structure from "~/components/projects/structure.vue";
import legacystructure from "~/components/projects/legacystructure.vue";
export default {
  components: {
    structure,
    legacystructure,
  },
};
</script>
<style scoped>
img {
  height: 50%;
}
</style>