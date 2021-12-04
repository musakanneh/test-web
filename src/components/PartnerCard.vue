<template>
  <body>
    <main class="container">
      <div class="row our__partners">
        <h1>PARTNERS</h1>
        <div class="col-xs-6 col-md-3">
          <a href="https://www.nunamaisha.org/nunamaisha-is/">
            <img
              src="../assets/partner-logo__nuna.png"
              class="img-responsive"
              alt="Responsive image"
            />
          </a>
        </div>
        <div class="col-xs-6 col-md-3">
          <a href="https://not1more.org">
            <img
              src="../assets/partner-logo__n1.png"
              class="img-responsive"
              alt="Responsive image"
            />
          </a>
        </div>
        <div class="col-xs-6 col-md-3">
          <a href="https://cicada.world">
            <img
              src="../assets/cicada.png"
              class="img-responsive"
              alt="Responsive image"
            />
          </a>
        </div>
        <div class="col-xs-6 col-md-3">
          <a href="https://giraffeconservation.org">
            <img
              src="../assets/gcf.png"
              class="img-responsive"
              alt="Responsive image"
            />
          </a>
        </div>
      </div>
      <div class="global__height">
        <h1>INTERNATIONAL MEMBERSHIP</h1>
        <div class="col-xs-6 col-md-12">
          <a
            href="https://www.iccaconsortium.org/index.php/members/the-eastern-serengeti-test/"
          >
            <img
              src="../assets/icca.jpg"
              class="img-responsive"
              alt="Responsive image"
            />
          </a>
        </div>
      </div>
    </main>
  </body>
</template>

<script>
export default {
  components: {},
};
</script>

<style lang="scss" scoped>
@media only screen and (max-width: 900px) {
  .our__partners,
  .global__height {
    img {
      border: 1px solid #ddd;
      margin-top: 1rem !important;
      padding: 1rem !important;
    }
  }
}
body {
  padding: 8rem 0 !important;

  main {
    .our__partners {
      padding: 3rem 0;
    }

    .global__height {
      img {
        width: 15%;
        margin: auto;
      }
    }

    img {
      width: 70%;
      margin: auto;

      &:hover {
        box-shadow: 1px 1px 5px rgba(150, 147, 147, 0.57);
        transition: 0.5s ease;
      }
    }

    h1 {
      padding-bottom: 3rem;
      text-align: center;
    }
  }
}
</style>
