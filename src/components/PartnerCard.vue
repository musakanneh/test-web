<template>
  <body>
    <main class="container">
      <dl class="dl-horizontal">
        <dt><h1>PARTNERS:</h1></dt>
        <dd>
          <div class="col-xs-6 col-md-4">
            <a href="https://www.nunamaisha.org/nunamaisha-is/">
              <img
                src="../assets/partner-logo__nuna.png"
                class="img-responsive"
                alt="Responsive image"
              />
            </a>
          </div>
          <div class="col-xs-6 col-md-4">
            <a href="https://not1more.org">
              <img
                src="../assets/partner-logo__n1.png"
                class="img-responsive"
                alt="Responsive image"
              />
            </a>
          </div>
          <div class="col-xs-6 col-md-4">
            <a href="https://cicada.world">
              <img
                src="../assets/cicada.png"
                class="img-responsive"
                alt="Responsive image"
              />
            </a>
          </div>
        </dd>
      </dl>

      <dl class="dl-horizontal">
        <dt><h1>INT'L MEMBERSHIP:</h1></dt>
        <dd>
          <div class="col-xs-6 col-md-4">
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
        </dd>
      </dl>
    </main>
  </body>
</template>

<script>
export default {
  components: {},
};
</script>

<style lang="scss" scoped>
body {
  padding: 8rem 0 !important;

  main {
    img {
      width: 60%;
      border: 1px solid #ddd;

      &:hover {
        box-shadow: 1px 1px 5px rgba(150, 147, 147, 0.57);
        transition: 0.5s ease;
      }
    }

    h1 {
      font-size: 1.5rem;
      color: #303030;
      padding: 2rem 0;
      text-align: center;
    }
  }
}
</style>
