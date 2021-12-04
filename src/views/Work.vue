<template>
  <body>
    <div class="global__height"></div>
    <main class="container animate_1 mobile_top_margin">
      <br />
      <h1>PEOPLE SAVE WILDLIFE</h1>
      <PeopleSaveWildlife />
    </main>
    <div class="mid-container">
      <div class="container animate_2">
        <h1 class="">LIVELIHOODS ACCELERATOR FELLOWSHIP</h1>
        <div class="inner-sec our-work__cover2">
          <SupportSustainableLivelihood />
        </div>
      </div>
    </div>
    <main class="container animate_4">
      <br />
      <h1>LIVING ECOSYSTEMS</h1>
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
@media only screen and (max-width: 900px) {
  body {
    .mobile_top_margin {
      margin-top: -4rem !important;
    }

    .global__height {
      display: none;
    }
    main {
      h1 {
        font-size: 2.5rem;
        padding: 1rem 0 2.5rem 0 !important;
        text-align: center;
      }
    }
  }
}
body {
  padding: 8rem 0 4rem 0;

  p {
    font-size: 15px !important;
  }

  .animate_4 {
    margin-top: 2rem;
  }

  .mid-container {
    background-image: url("../assets/work.jpeg");
    background-repeat: no-repeat;
    background-attachment: fixed;
    position: center;
    background-size: cover;
    z-index: 1;
    padding: 6rem 0;

    strong,
    h1 {
      color: #fff;
      padding: 1rem 0 2.5rem 0;
    }

    .inner-sec {
      padding: 1rem;
      background: rgb(230, 230, 230);
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
