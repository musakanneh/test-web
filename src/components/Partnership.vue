<template>
  <body>
    <section class="partnership">
      <div>
        <h1>PARTNERSHIPS!</h1>
        <p>
          Building partnerships is necessary to combine knowledge, resources,
          skills and mandates in achieving our vision, Sustainable Development
          Goals (SDGs) and goals for Convection on Biological Diversity (CBD).
          Partnerships will enhance the inclusion of indigenous people in
          conservation initiatives to support livelihoods, ecosystem resilience,
          and positive human relations.
        </p>
        <p>
          Through partnerships we aim to restore indigenous confidence, the use
          of science and knowledge in ecological governance and management. This
          approach aims to bring all stakeholders on biodiversity conservation
          to commit to positive action through their ecological management
          capabilities. Through partnerships, we aim to build communities of
          practice to synergize a positive impact on ecosystems, people and
          wildlife in Tanzania.
        </p>
      </div>
    </section>
    <OurStrategy />
    <main>
      <article>
        <div>
          <OurFocus />
        </div>
      </article>
      <div class="partnership-sec">
        <div class="offers-cover-sec-1">
          <aside>
            <h4>
              TEST strongly believes in poverty reduction as a solution in
              addressing conservation challenges
            </h4>
          </aside>
        </div>
      </div>
    </main>
  </body>
</template>

<script>
import OurStrategy from "@/components/OurStrategy.vue";
import OurFocus from "@/components/OurFocus.vue";

export default {
  components: {
    OurFocus,
    OurStrategy,
  },
};
</script>

<style lang="scss" scoped>
body {
  height: 100%;
  width: 100%;

  .partnership {
    width: 100%;
    background-image: linear-gradient(rgba(0, 0, 0, 0.96), rgba(0, 0, 0, 0.712)),
      url("../assets/bel.jpeg");
    opacity: 1;
    background-repeat: no-repeat;
    background-attachment: fixed;
    background-size: cover;
    padding: 10rem 0;
    height: 100%;

    p {
      color: #fbfbfbe5;
      width: 60%;
      padding: 1rem;
      line-height: 1.5 !important;
      font-size: 18px !important;
      margin: auto;
      font-weight: normal;
      font-style: normal;
      text-align: center;
    }

    h1 {
      text-align: center;
    }
  }

  span {
    color: #c98811;
  }

  article {
    width: 100%;
    text-align: center;

    img {
      width: 100%;
    }
  }

  main {
    .partnership-sec {
      justify-content: space-between;
      flex: auto;
      display: flex;
      width: 100%;
      display: flex !important;
      background: #303030;
      background-image: linear-gradient(
          rgba(0, 0, 0, 0.7),
          rgba(0, 0, 0, 0.712)
        ),
        url("../assets/cros.png");
      opacity: 1;
      background-repeat: no-repeat;
      background-size: cover;

      aside {
        width: 100%;
        text-align: center;
        padding: 10% 0;

        h4 {
          color: #fff;
          padding: 8rem 0;
          font-size: 3rem;
          margin: auto;
          line-height: 2;
          text-align: center;
        }
      }

      .offers-cover-sec-1 {
        width: 50%;
        margin: auto;
      }
    }
  }
}
</style>
