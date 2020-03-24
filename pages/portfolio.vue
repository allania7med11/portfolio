<template>
  <div>
    <Header id="sticky" />
    <portfolio />
  </div>
</template>

<script>
import portfolio from "~/components/portfolio.vue";
import Header from "~/components/Header.vue";
export default {
  components: {
    portfolio,
    Header
  },
}
</script>
