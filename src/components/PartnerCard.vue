<template>
  <body>
    <main class="container">
      <section>
        <div>
          <h1>PARTNERS:</h1>
        </div>
        <div>
          <a href="https://www.nunamaisha.org/nunamaisha-is/"
            ><img src="../assets/partner-logo__nuna.png" alt=""
          /></a>
        </div>
        <div>
          <a href="https://not1more.org"
            ><img src="../assets/partner-logo__n1.png" alt=""
          /></a>
        </div>
        <div>
          <a href="https://cicada.world"
            ><img src="../assets/cicada.png" alt=""
          /></a>
        </div>
      </section>

      <section>
        <div><h1>INTERNATIONAL MEMBERSHIP:</h1></div>
        <div>
          <a
            href="https://www.iccaconsortium.org/index.php/members/the-eastern-serengeti-test/"
            ><img src="../assets/icca.jpg" alt=""
          /></a>
        </div>
      </section>
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
  background: #ddd;
  padding: 8rem 0 !important;

  main {
    padding: 3px 50px;
    height: 100%;

    img {
      width: 70%;
      box-shadow: 1px 1px 5px rgba(150, 147, 147, 0.185);

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

    section {
      justify-content: space-between;
      width: 100%;
      display: grid;
      grid-template-columns: 1fr 1fr 1fr 1fr;

      h3 {
        margin: 0;
      }

      div {
        text-align: center;

        p {
          font-size: 14px;
          width: 80%;
          padding: 0.5rem 0;
          margin: auto;
        }

        a {
          text-decoration: none;
          font-size: 12px;
        }
      }
    }
  }
}
</style>
