<template>
  <body class="height_and_weight__global">
    <main class="container">
      <h1>OUR STRATEGY</h1>
      <AimAndOutcome />
    </main>
  </body>
</template>

<script>
import AimAndOutcome from "@/components/Tabs/AimAndOutcome.vue";

export default {
  components: {
    AimAndOutcome,
  },
};
</script>

<style lang="scss" scoped>
body {
  background: #ddd;
  

  h1 {
    text-align: center;
    padding-bottom: 2rem;
  }
}
</style>
