<template>
  <body>
    <CaptionDescription title="" />
    <div class="container">
      <main>
        <section class="about">
          <div class="sec-one-inner">
            <div class="image">
              <img src="../assets/div.png" alt="" />
            </div>
            <div class="content__text">
              <h3>Collaborative Research</h3>
              <p>
                TEST shall host a collaborative research program with renowned
                academic and research institutions to develop the database of
                the indigenous ecological knowledge practices that enhance
                environmental and cultural sustainability. Furthermore, explore
                best options to merge scientific conservation approaches with
                indigenous traditional knowledge towards sustainable
                conservation actions that address resource tenure and
                governance, environmental hazards, illegal wildlife trade, and
                the climate emergency.
              </p>
            </div>
          </div>
        </section>

        <section class="about">
          <div class="sec-one-inner">
            <div class="image">
              <img src="../assets/edu1.png" alt="" />
            </div>
            <div class="content__text">
              <h3>Education and Capacity building</h3>
              <p>
                TEST shall facilitate a comprehensive awareness creation program
                to disseminate and exhibit the findings of the action research.
                The action will employ such media as film, radio, and other
                storytelling tools. The purpose is to enable the scientific
                forum to recognize and adopt indigenous communities’ best land
                management practices for sustainable ecosystems management and
                integrate such suitable indigenous cultures into official school
                curricula.
              </p>
            </div>
          </div>
        </section>

        <section class="about">
          <div class="sec-one-inner">
            <div class="image">
              <img src="../assets/cultural-e.png" alt="" />
            </div>
            <div class="content__text">
              <h3>Cultural Exchange</h3>
              <p>
                Tanzania has a diversity if indigenous cultures contributing to
                community and ecological resilience. TEST will facilitate
                targeted cultural exchange visits with and among diverse
                cultural groups to enhance learning, sharing culturally valued
                lessons across diverse communities in Tanzania and beyond.
              </p>
            </div>
          </div>
        </section>

        <section class="about">
          <div class="sec-one-inner">
            <div class="image">
              <img src="../assets/eco-s.png" alt="" />
            </div>
            <div class="content__text">
              <h3>Ecosystem Governance</h3>
              <p>
                TEST shall spearhead the development of a
                participatory-landscape approach to land-use-plans including
                guidelines for governing and controlling the use of the land
                resources at the community level and ecosystem-wide levels.
              </p>
            </div>
          </div>
        </section>
      </main>
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

  main {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-row-gap: 30px;
    width: 100%;

    padding: 4rem 0;

    .content__text {
      width: 70%;
    }

    .about {
      width: 95%;
      background: #ffffff;
      border: 1px solid #ddd;

      margin: auto;
      box-shadow: 0px 6px 20px rgba(0, 0, 0, 0.06);

      .sec-one-inner {
        display: flex;
        width: 100%;

        h3,
        p {
          margin: 1rem 1.5rem;
        }

        h3 {
          color: #a77e03;
          font-weight: 500;
        }

        .image {
          width: 40%;

          img {
            width: 100%;
          }
        }
      }
    }
  }
}
</style>
