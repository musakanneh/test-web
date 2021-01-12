<template>
  <body>
    <aside >
      <h1>OUR WORK</h1>
    </aside>
    <main>
      <h1 class="comm-conservation">COMMUNITY WILDLIFE CONSERVATION</h1>
      <div class="community-wildlife-coservation">
        <div class="inner">
          <strong>Why?</strong>
          <p>
            The wildlife in natural ecosystems share their habitats with
            indigenous peoples and their livelihoods mostly grazing rangelands
            and farms. Wildlife within these ecosystems have been and continue
            to experience challenges of movement, habitat management and are a
            source of rampant human-wildlife conflicts through predation of
            livestock, marauding farms and loss of life for humans. Just having
            wildlife on these ecosystems, people and wildlife face challenges of
            co-habiting. The future of wildlife in Tanzania depends on positive
            understanding of indigenous communities and the acceptance of their
            role.
          </p>
        </div>
        <img src="../assets/eco.png" alt="" />
      </div>

      <div class="community-wildlife-coservation">
        <div class="inner">
          <strong>Objective</strong>
          <p>
            To re-activate the support of indigenous communities in wildlife
            conservation whose indigenous traditional knowledge systems and
            their territories are vital in wildlife conservation and enhance
            meaningful collaboration of indigenous communities and government
            agencies. Through this achievement, we will be able to enhance the
            quality of wildlife habitats.
          </p>
        </div>
        <img src="../assets/ind.png" alt="" />
      </div>

      <div class="community-wildlife-coservation">
        <div class="inner">
          <strong>Plan</strong>
          <p>
            TEST is committed to facilitate the provision of wildlife
            conservation support, services and campaigns for indigenous
            communities within their territories and ecosystems. Further to
            this, TEST will assist in obtaining formal recognition of the
            indigenous community conserved areas (ICCAs) for wildlife in the
            natural ecosystems in Tanzania.
          </p>
        </div>
        <img src="../assets/work1.png" alt="" />
      </div>
    </main>

    <div class="mid-container">
      <div class="inner-sec">
        <h1>SUSTAINABLE COMMUNITY DEVELOPMENT</h1>
        <p>
          <strong>Why:</strong>
          Indigenous peoples and local communities in Tanzania continue to
          experience abject poverty and deteriorating livelihoods. They do not
          have access to reliable safe and clean water services, quality
          education, health services or sustainable livelihoods options. The
          provision and the design of public services for indigenous peoples and
          local communities continue to perpetuate huge dependency of the donors
          of such projects.
        </p>
        <br />
        <p>
          <strong>Objective</strong>
          To design social services (education, energy, health and water) and
          livelihood options with indigenous communities in a participatory
          process through enterprise-based models for ensuring sustainability
          and growth. TEST will adopt an approach to build the capacity of IPLCs
          and create sustainability of service delivery.
        </p>
        <br />
        <p>
          <strong>Plan:</strong>
          TEST will, in collaboration with its partners, assist indigenous
          communities to adopt enterprise-based solutions in designing social
          and basic services to address poverty and increase access to
          fundamental social services such as education, health and water.
        </p>
      </div>
    </div>

    <main>
      <h1>INDIGENOUS RANGELANDS MANAGEMENT</h1>
      <div class="community-wildlife-coservation">
        <div class="inner">
          <strong>Why:</strong>
          <p>
            Traditionally indigenous peoples have their own ways of land
            governance and use for all seasons and for various uses. This
            cultural practice allowed the lands to recover between seasons and
            pasture to be available throughout the year. But the pastoralists in
            Tanzania can hardly do this. Population growth, coupled with land
            defragmentation and climate change have reduced the extent of their
            pasturelands and resulted into deterioration in quality. As a
            result, livestock often die in the dry season or in droughts from
            lack of grass and lack of water. This is devastating.
          </p>
        </div>
        <img src="../assets/work1.png" alt="" />
      </div>

      <div class="community-wildlife-coservation">
        <div class="inner">
          <strong>Objective:</strong>
          <p>
            TEST is committed to introduce an innovative rangeland governance
            system that will re-design grazing patterns through the combination
            of scientific options with traditional practices for the livestock
            to improve the livelihoods of the local communities as well as
            enhance the conservation of biodiversity.
          </p>
        </div>
        <img src="../assets/work1.png" alt="" />
      </div>

      <div class="community-wildlife-coservation">
        <div class="inner">
          <strong>Outcome:</strong>
          <p>
            TEST, in collaboration with the pastoralists in Tanzania will
            restore indigenous land use practices and coping mechanisms to
            ensure availability of pasture and to address the effects of climate
            and cultural change. Together with partners, TEST will facilitate
            for the design of livestock to markets programme as incentives for
            regulating the number of livestock on the land. The programme will
            control and maintain the carrying capacity of the land and loss of
            biodiversity. This will ensure that livestock are kept at certain
            numbers at different seasons (dry and wet) and according to land use
            zones. The livestock will be sold at certain intervals during the
            year.
          </p>
        </div>
        <img src="../assets/edu.png" alt="" />
      </div>
    </main>
  </body>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
body {
  .mid-container {
    background-image: url("../assets/work.jpeg");
    background-repeat: no-repeat;
    background-attachment: fixed;
    position: center;
    background-size: cover;
    z-index: 1;
    padding: 5% 5%;

    p {
      color: #fff;
    }
  }
}

.mid-container {
  text-align: center;

  strong,
  h1 {
    color: #fff;
  }

  .inner-sec {
    padding: 5%;
    background-color: #699d1af0;

    p {
      width: 80%;
      margin: auto;
    }

    strong {
      color: goldenrod;
    }
  }
}
aside {
  background-image: url("../assets/back-img.jpeg");
  background-repeat: no-repeat;
  position: center;
  background-size: cover;
  z-index: 1;
  padding: 5%;
  margin: auto;

  h1 {
    color: #689d1a;
    margin-bottom: -3%;
  }
}

main {
  width: 90%;
  margin: auto;
  padding: 5% 0;

  h1 {
    text-align: left;
  }

  .inner {
    width: 55%;
  }

  img {
    width: 40%;
  }

  .community-wildlife-coservation {
    margin-bottom: 2px;
    object-fit: contain;
    width: 100%;
    display: flex;
    justify-content: space-between;
  }
}

h2,
strong,
h3 {
  color: #689d1a;
  margin: 0;
}
</style>
