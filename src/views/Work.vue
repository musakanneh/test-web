<template>
  <body>
    <CaptionDescription title="WOUR WORK" />
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
import CaptionDescription from "@/components/CaptionDescription.vue";

export default {
  components: {
    CaptionDescription,
    PeopleSaveWildlife,
    SustainableEcosystems,
    SupportSustainableLivelihood,
  },
};
</script>

<style lang="scss" scoped>
body {
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
    padding: 5rem;
    text-align: center;

    strong,
    h1 {
      color: #fff;
    }

    .inner-sec {
      padding: 5rem;
      background-color: #fff;
    }
  }

  main {
    padding: 1rem 0 4rem 0;
  }
}
</style>
