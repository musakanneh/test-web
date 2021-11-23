<template>
  <body>
    <div class="global__height"></div>
    <div class="container">
      <div class="row height_and_weight__global">
        <div class="col-xs-6 col-md-12 border__">
          <div class="image">
            <img
              src="../assets/banner4.jpeg"
              class="img-responsive"
              alt="Responsive image"
            />
          </div>
          <div class="content__text">
            <h3>
              Co-developing Data Technology for Inclusive Conservation in the
              Eastern Serengeti.
            </h3>
            <p>
              This is a 1-year project with the aim of co-developing together
              with the local communities, a mobile app and data collection and
              management protocols. This will serve the interests of the
              communities for more research to inform both the local indigenous
              people on their wildlife monitoring and livestock grazing
              strategies, and protected areas management. This project is funded
              by the Centre for Indigenous Conservation and Development
              Alternatives (CICADA at the University of McGill, Canada.
            </p>
          </div>
        </div>
        <div class="col-xs-6 col-md-12 border__">
          <div class="image">
            <img
              src="../assets/banner4.jpeg"
              class="img-responsive"
              alt="Responsive image"
            />
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
      </div>
    </div>
  </body>
</template>

<script>
export default {
  components: {},
};
</script>

<style lang="scss" scoped>
@media only screen and (max-width: 900px) {
  .border__ {
    display: block !important;

    h3 {
      padding: 2rem 0 1rem 0;
    }
    p {
      margin: 0 !important;
      padding: 0.5rem 0;
    }
  }
}
body {
  background: #ddd;
  padding: 2rem 0 4rem 0;

  .border__ {
    display: grid;
    grid-template-columns: 1fr 2fr;
    column-gap: 50px;
    padding: 3rem 0;

    p {
      font-size: 1.6rem;
      color: #303030 !important;
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
