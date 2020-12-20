<template>
  <body>
    <main>
      <caption captions="About TEST"></caption>
      <HowCard />
    </main>
  </body>
</template>

<script>
import HowCard from "@/components/HowCard.vue";
// import Button from "@/components/Button.vue";
export default {
  components: {
    // Button,
    HowCard,
  },
};
</script>

<style lang="scss" scoped>
body {
  main {
    width: 90%;
    margin: auto;
    margin-top: 10%;
  }
}
</style>
