<template>
  <body>
    <CaptionDescription title="" />
    <div class="container">
      <div class="row">
        <div class="col-xs-6 col-md-12 border__">
          <div class="image">
            <img src="../assets/banner4.jpeg" alt="..." class="img-rounded" />
          </div>
          <div class="content__text">
            <h3>Collaborative Research</h3>
            <p>
              TEST shall host a collaborative research program with renowned
              academic and research institutions to develop the database of the
              indigenous ecological knowledge practices that enhance
              environmental and cultural sustainability. Furthermore, explore
              best options to merge scientific conservation approaches with
              indigenous traditional knowledge towards sustainable conservation
              actions that address resource tenure and governance, environmental
              hazards, illegal wildlife trade, and the climate emergency.
            </p>
          </div>
        </div>
        <div class="col-xs-6 col-md-12 border__">
          <div class="image">
            <img src="../assets/banner4.jpeg" alt="..." class="img-rounded" />
          </div>
          <div class="content__text">
            <h3>Education and Capacity building</h3>
            <p>
              TEST shall facilitate a comprehensive awareness creation program
              to disseminate and exhibit the findings of the action research.
              The action will employ such media as film, radio, and other
              storytelling tools. The purpose is to enable the scientific forum
              to recognize and adopt indigenous communities’ best land
              management practices for sustainable ecosystems management and
              integrate such suitable indigenous cultures into official school
              curricula.
            </p>
          </div>
        </div>
        <div class="col-xs-6 col-md-12 border__">
          <div class="image">
            <img src="../assets/banner4.jpeg" alt="..." class="img-rounded" />
          </div>
          <div class="content__text">
            <h3>Cultural Exchange</h3>
            <p>
              Tanzania has a diversity if indigenous cultures contributing to
              community and ecological resilience. TEST will facilitate targeted
              cultural exchange visits with and among diverse cultural groups to
              enhance learning, sharing culturally valued lessons across diverse
              communities in Tanzania and beyond.
            </p>
          </div>
        </div>
        <div class="col-xs-6 col-md-12 border__">
          <div class="image">
            <img src="../assets/banner4.jpeg" alt="..." class="img-rounded" />
          </div>
          <div class="content__text">
            <h3>Ecosystem Governance</h3>
            <p>
              TEST shall spearhead the development of a participatory-landscape
              approach to land-use-plans including guidelines for governing and
              controlling the use of the land resources at the community level
              and ecosystem-wide levels.
            </p>
          </div>
        </div>
      </div>
    </div>
  </body>
</template>

<script>
import CaptionDescription from "@/components/CaptionDescription.vue";
export default {
  components: {
    CaptionDescription,
  },
};
</script>

<style lang="scss" scoped>
body {
  background: #ddd;
  padding: 2rem 0 4rem 0;

  .border__ {
    display: grid;
    grid-template-columns: 1fr 2fr;
    grid-template-rows: 80px auto 80px;
    column-gap: 50px;
    row-gap: 15px;
    padding: 4rem 0;

    p {
      font-size: 1.8rem;
    }

    img {
      width: 100%;
    }
  }

  main {
    display: flex !important;
    .content__text {
      width: 70%;
    }
  }
}
</style>
