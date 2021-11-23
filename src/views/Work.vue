<template>
  <body>
    <main class="container">
      <h1>PEOPLE SAVE WILDLIFE</h1>
      <PeopleSaveWildlife />
    </main>
    <div class="mid-container">
      <div class="container">
        <h1 class="">SUPPORT SUSTAINABLE LIVELIHOODS</h1>
        <div class="inner-sec our-work__cover2">
          <SupportSustainableLivelihood />
        </div>
      </div>
    </div>
    <main class="container">
      <h1>SUSTAINABLE ECOSYSTEMS</h1>
      <SustainableEcosystems />
    </main>
  </body>
</template>

<script>
import PeopleSaveWildlife from "@/components/Tabs/PeopleSaveWildlife.vue";
import SupportSustainableLivelihood from "@/components/Tabs/SupportSustainableLivelihood.vue";
import SustainableEcosystems from "@/components/Tabs/SustainableEcosystems.vue";

export default {
  components: {
    PeopleSaveWildlife,
    SustainableEcosystems,
    SupportSustainableLivelihood,
  },
};
</script>

<style lang="scss" scoped>
body {
  padding: 8rem 0 4rem 0;

  p {
    font-size: 15px !important;
  }

  .mid-container {
    background-image: url("../assets/work.jpeg");
    background-repeat: no-repeat;
    background-attachment: fixed;
    position: center;
    background-size: cover;
    z-index: 1;
    padding: 8rem 0;

    strong,
    h1 {
      color: #fff;
      padding: 1rem 0 2.5rem 0;
    }

    .inner-sec {
      padding: 5rem;
      background: rgba(221, 221, 221, 0.849);
    }
  }

  main {
    padding: 0 0 6rem 0;

    h1 {
      padding: 0 0 1rem 0;
    }
  }
}
</style>
