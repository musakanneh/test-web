<template>
  <body>
    <main class="container">
      <h1>PARTNERS</h1>
      <section>
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

      <h1>INTERNATIONAL MEMBERSHIP</h1>
      <section>
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
// import TeamTag from "@/components/TeamTag.vue";
export default {
  components: {
    // TeamTag,
  },
};
</script>

<style lang="scss" scoped>
body {
  //   padding: 1rem 0 5rem 0;
  //   border: 1px solid red;
  background: #ddd;

  main {
    position: relative;
    padding: 3px 50px;
    height: 100%;

    img {
      width: 70%;
      border-radius: 50rem;
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
