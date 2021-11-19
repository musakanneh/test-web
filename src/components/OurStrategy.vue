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

  .current-tab-sec {
    display: flex;
    width: 100%;
    justify-content: space-between;
  }

  .activities-sec-cover {
    .tm-content {
      width: 40%;
      padding: 3rem 0;

      p {
        color: #303030;
      }
    }

    .tm-img {
      width: 50%;
    }

    img {
      width: 100%;
    }
  }

  .default-tabs {
    position: relative;
    margin: 0 auto;
    &__item {
      &_active {
        color: black;
      }
      &:hover {
        border-bottom: 2px solid #c98811;
        color: #c98811;
      }
      &:focus {
        outline: none;
        border-bottom: 2px solid #c98811;
        color: #c98811;
      }
      &:first-child {
        margin-left: 0;
      }
      &:last-child {
        margin-right: 0;
      }
    }
    &__active-line {
      position: absolute;
      bottom: 0;
      left: 0;
      height: 2px;
      background-color: black;
      transition: transform 0.4s ease, width 0.4s ease;
    }
  }
}
</style>
