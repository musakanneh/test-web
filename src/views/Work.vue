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
      <div class="our-work__cover3"></div>
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
  .our-work__cover {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;

    div {
      margin: 0.4rem;
      padding: 0.5rem 1rem;
      background: #ddd;
    }
  }

  .our-work__cover2 {
    display: grid;
    grid-template-columns: 2fr 1fr 1fr;

    div {
      margin: 0.4rem;
      padding: 0.5rem 1rem;

      p {
        text-align: left;
        padding-bottom: 1rem;
      }
    }
  }

  .our-work__cover3 {
    display: grid;
    grid-template-columns: 2fr 1.5fr 2fr;

    div {
      margin: 0.4rem;
      padding: 0.5rem 1rem;
      background: #ddd;

      p {
        text-align: left;
        padding-bottom: 1rem;
      }
    }
  }

  p {
    font-size: 15px !important;
  }

  img {
    width: 100%;
  }

  .mid-container {
    background-image: url("../assets/work.jpeg");
    background-repeat: no-repeat;
    background-attachment: fixed;
    position: center;
    background-size: cover;
    z-index: 1;
    padding: 5% 5%;
    text-align: center;

    p {
      color: #fff;
    }

    strong,
    h1 {
      color: #fff;
    }

    .inner-sec {
      padding: 5%;
      background-color: #a77e03;

      p {
        margin: auto;
      }
    }
  }

  main {
    padding: 1rem 0 4rem 0;
  }

  h2,
  strong,
  h3 {
    color: #689d1a;
    margin: 0;
  }
}
</style>
