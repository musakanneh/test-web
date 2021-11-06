<template>
  <body class="height_and_weight__global">
    <h1 class="container">Our Focus</h1>
    <main class="container">
      <div>
        <h3>11 Regions</h3>
        <img src="../assets/banner.jpg" alt="" />
      </div>

      <div>
        <h3>12 Millions IPLCs</h3>
        <img src="../assets/sav.jpeg" alt="" />
      </div>

      <div>
        <h3>300 Villages</h3>
        <img src="../assets/more-ladies.jpeg" alt="" />
      </div>
    </main>
    <div class="stats__descriptions">
      <p class="container">
        The above figures includes pastoralists (Maasai & Barbaig (Datooga)),
        hunters garthereres, (Hadzabe & Akie, Ndorobo), and agro-pastoralists
        communities (Sukuma and Sonjo/Batemi).
      </p>
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
}

body {
  background: #ddd;

  h3 {
    text-align: left !important;
    padding: 0 1rem;
  }

  h1 {
    text-align: center;
    padding-bottom: 1rem;
  }

  .stats__descriptions {
    p {
      text-align: left;
      font-size: 16px;
      color: rgb(110, 108, 108);
      padding: 1rem 0.5rem;
    }
  }

  main {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    object-fit: contain;

    img {
      width: 90%;
      padding: 2%;
      border-radius: 3px;

      &:hover {
        transform: scale(1.01);
        cursor: pointer;
        transition: all 0.5s ease-in-out;
      }
    }

    div {
      margin: auto;
      width: 100%;
      .profile__description {
        width: 90%;
        text-align: center;
      }
    }
  }
}
</style>
