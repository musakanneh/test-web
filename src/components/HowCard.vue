<template>
  <body>
    <section class="about">
      <div class="sec-one-cover">
        <div class="sec-one-inner">
          <div class="image">
            <img src="../assets/research.png" alt="" />
          </div>
          <h3>Collaborative Research</h3>
          <p v-scrollanimation>
            TEST shall host a collaborative research program with renowned
            academic and research institutions to develop the database of the
            indigenous ecological knowledge practices that enhance environmental
            and cultural sustainability. Furthermore, explore best options to
            merge scientific conservation approaches with indigenous traditional
            knowledge towards sustainable conservation actions that address
            resource tenure and governance, environmental hazards, illegal
            wildlife trade, and the climate emergency.
          </p>
        </div>
      </div>
    </section>
    <section class="about">
      <div class="sec-one-cover">
        <div class="sec-one-inner">
          <div class="image">
            <img src="../assets/edu.png" alt="" />
          </div>
          <h3>Education and Capacity building</h3>
          <p v-scrollanimation>
            TEST shall facilitate a comprehensive awareness creation program to
            disseminate and exhibit the findings of the action research. The
            action will employ such media as film, radio, and other storytelling
            tools. The purpose is to enable the scientific forum to recognize
            and adopt indigenous communities’ best land management practices for
            sustainable ecosystems management and integrate such suitable
            indigenous cultures into official school curricula.
          </p>
        </div>
      </div>
    </section>

    <section class="about">
      <div class="sec-one-cover">
        <div class="sec-one-inner">
          <div class="image">
            <img src="../assets/culture.png" alt="" />
          </div>
          <h3>Cultural Exchange</h3>
          <p v-scrollanimation>
            Tanzania has a diversity if indigenous cultures contributing to
            community and ecological resilience. TEST will facilitate targeted
            cultural exchange visits with and among diverse cultural groups to
            enhance learning, sharing culturally valued lessons across diverse
            communities in Tanzania and beyond.
          </p>
        </div>
      </div>
    </section>
    <section class="about">
      <div class="sec-one-cover">
        <div class="sec-one-inner">
          <div class="image">
            <img src="../assets/lions.jpeg" alt="" />
          </div>
          <h3>Ecosystem Governance</h3>
          <p v-scrollanimation>
            TEST shall spearhead the development of a participatory-landscape
            approach to land-use-plans including guidelines for governing and
            controlling the use of the land resources at the community level and
            ecosystem-wide levels.
          </p>
        </div>
      </div>
    </section>
  </body>
</template>

<script>
// import Button from "@/components/Button.vue";
export default {
  components: {},
};
</script>

<style lang="scss" scoped>
body {
  display: grid;
  grid-template-columns: 1fr 1fr;
  width: 100%;
  padding: 0 0 10% 0;
  flex: auto;
  flex-direction: row;

  .about {
    justify-content: space-between;
    width: 95%;
    background: #ffffff;
    margin: auto;
    box-shadow: 0px 6px 20px rgba(0, 0, 0, 0.06);

    .sec-one-inner {
      width: 100%;
      h3,
      p {
        margin: 0.5rem 1rem;
      }

      h3 {
        color: #689D1A;
        font-weight: 500;
      }

      img {
        width: 100%;
      }
    }
  }
}
</style>
