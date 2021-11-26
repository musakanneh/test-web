<template>
  <body>
    <div class="global__height"></div>
    <div class="container">
      <br /><br /><br />
      <h4>Current Projects</h4>
      <div class="row">
        <div class="col-xs-6 col-md-12 border__">
          <div class="image">
            <img
              src="../assets/cicada.png"
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
              src="../assets/gcf.png"
              class="img-responsive"
              alt="Responsive image"
            />
          </div>
          <div class="content__text">
            <h3>
              Twiga Wetu: Masai Giraffe Conservation Outside Protected Areas –
              the Role of Indigenous Knowledge and Traditional Systems.
            </h3>
            <p>
              This project is a 1-year project (Oct. 2020 – Sept. 2021) funded
              by Giraffe Conservation Foundation
              <a href="www.giraffeconservation.org"
                >(www.giraffeconservation.org)</a
              >. The aim of this project is to revitalize indigenous
              conservation of Masai giraffe in the eastern Serengeti Ecosystem.
              This will serve the interests of the local communities to be
              involved in the conservation and monitoring of giraffe linked with
              livestock grazing strategies outside protected areas.
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

  .row {
    margin: auto;
  }

  .image {
    border: 1px solid #30303011;
  }

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
      padding: 2rem;
    }
  }

  h3 {
    margin: 0;
    font-size: 20px;
    line-height: 1.5;
    padding-bottom: 1rem;
  }

  h4 {
    color: #505050;
    margin: 0;
    padding: 0;
  }
}
</style>
