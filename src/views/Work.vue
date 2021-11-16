<template>
  <body>
    <CaptionDescription title="WOUR WORK" />
    <main class="container">
      <h1>PEOPLE SAVE WILDLIFE</h1>
      <div class="community-wildlife-coservation">
        <div class="our-work__cover">
          <div>
            <p>
              <strong>Why?</strong>
              The wildlife in natural ecosystems share their habitats with
              indigenous peoples and their livelihoods mostly pastureland and
              farms. However, indigenous peoples and local communities have been
              side-lined in mainstream wildlife conservation initiatives
              completely jeopardizing the peaceful co-existence witnessed for
              many centuries. Wildlife within these ecosystems have been and
              continue to experience challenges of movement, habitat management
              and are a source of rampant human-wildlife conflicts.
            </p>
            <p>
              Human-wildlife conflicts have intensified in the last decade
              through predation of livestock, marauding farms and loss of life
              for humans. Tensions continue to grow between wildlife and people
              in our ecosystems/landscapes. The future of wildlife in Tanzania
              depends on positive conservation contribution of indigenous
              communities.
            </p>
            <img src="../assets/leo.png" alt="" />
          </div>
          <div>
            <p>
              <strong>Objective</strong>
              o re-activate the role and support of indigenous communities for
              wildlife protection within community lands. The indigenous
              traditional knowledge systems and their territories are vital in
              continuing the peaceful co-existence to ensure wildlife
              conservation in community lands.
            </p>
            <p>
              The restoration of community roles in wildlife conservation will
              strengthen and enhance meaningful collaboration of indigenous
              communities and government agencies. Through this achievement,
              TEST will increase the quality and quantity of wildlife habitats.
            </p>
            <img src="../assets/leo.png" alt="" />
          </div>

          <div>
            <p>
              <strong>Plan</strong>
              TEST is committed to work with indigenous peoples and local
              communities to provide wildlife conservation support, services and
              campaigns within their territories and ecosystems.
            </p>
            <p>
              Further to this, TEST will assist in obtaining formal recognition
              of the indigenous community conserved areas (ICCAs) for wildlife
              in the natural ecosystems in Tanzania.
            </p>
            <br />
            <img src="../assets/people4.jpeg" alt="" />
          </div>
        </div>
      </div>
    </main>

    <div class="mid-container">
      <h1>SUPPORT SUSTAINABLE LIVELIHOODS</h1>
      <div class="inner-sec our-work__cover2">
        <div>
          <p>
            <strong>Why:</strong>
            Indigenous peoples and local communities in Tanzania are communities
            in transition. They desire improved and reliable livelihoods
            options. But they continue to experience abject poverty and
            deteriorating livelihoods. They do not have access to reliable safe
            and clean water services, quality education, health services or
            sustainable livelihoods options. The provision and the design of
            public services for indigenous peoples and local communities need to
            be sustainable and in line with biodiversity conservation approaches
            and interests.
          </p>
          <img src="../assets/leo.png" alt="" />
        </div>

        <div>
          <p>
            <strong>Objective</strong>
            To design social services (education, energy, health and water) and
            livelihood options through innovative financial models for ensuring
            sustainability, growth and compatibility with biodiversity
            approaches.
          </p>
          <img src="../assets/cros.png" alt="" />
        </div>

        <div>
          <p>
            <strong>Plan:</strong>
            TEST will, in collaboration with its partners, embark in innovation
            in designing and delivering livelihoods options to address poverty
            and increase access to fundamental social services such as
            education, health and water.
          </p>
          <img src="../assets/cros.png" alt="" />
        </div>
      </div>
    </div>

    <main class="container">
      <h1>SUSTAINABLE ECOSYSTEMS</h1>
      <div class="community-wildlife-coservation">
        <div class="our-work__cover3">
          <div>
            <p>
              <strong>Why:</strong>
              Natural ecosystems are shrinking, deteriorating with no clear
              governance mechanisms. Traditionally indigenous peoples have their
              own ways of land governance and use for all seasons and for
              various uses. The land governance system was confined to small
              villages. This cultural practice allowed the lands to recover
              between seasons and pasture to be available throughout the year.
              But the pastoralists in Tanzania can hardly do this.
            </p>
            <p>
              Population growth, coupled with land defragmentation and climate
              change have reduced the extent of their pasturelands and resulted
              into deterioration in quality and regular land use conflicts. As a
              result, livestock and wildlife often die in the dry season or in
              droughts from lack of grass and lack of water. This is
              devastating.
            </p>
            <img src="../assets/eco.png" alt="" />
          </div>

          <div>
            <p>
              <strong>Objective:</strong>
              TEST is committed to introduce an innovative ecosystem governance
              approach that will transcend boundaries of village systems in
              Tanzania to encompass connected cultural and geographical
              ecosystems and landscapes.
            </p>
            <p>
              The Sustainable Ecosystems Approach will re-design land use and
              governing models to allow integrated landscape approach to improve
              the livelihoods of the local communities as well as enhance the
              conservation of biodiversity.
            </p>
            <img src="../assets/lady.jpeg" alt="" />
          </div>

          <div>
            <p>
              <strong>Outcome:</strong>
              TEST, in collaboration with indigenous peoples and partners in
              Tanzania will introduce an innovative approach to govern and
              manage ecosystems and landscapes to ensure sustainability of
              ecosystems availability of pasture and to address the effects of
              climate and cultural change.
            </p>
            <p>
              Together with partners, TEST will facilitate for the design of
              livestock to markets programme as incentives for regulating the
              number of livestock on the land. The programme will control and
              maintain the carrying capacity of the land and loss of
              biodiversity. This will ensure that livestock are kept at certain
              numbers at different seasons (dry and wet) and according to land
              use zones. The livestock will be sold at certain intervals during
              the year.
            </p>
            <img src="../assets/eco.png" alt="" />
          </div>
        </div>
      </div>
    </main>
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
    // border: 1px solid red;
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
