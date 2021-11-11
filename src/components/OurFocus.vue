<template>
  <body class="height_and_weight__global">
    <h1 class="container">Our Focus</h1>
    <main class="container">
      <div class="div__content">
        <div>
          <p><span>11 regions</span></p>
          <br /><br /><br />
          <img src="../assets/banner.jpg" alt="" />
        </div>
      </div>

      <div class="div__content">
        <div>
          <p><span>300 Villages</span></p>
          <br /><br /><br />
          <img src="../assets/more-ladies.jpeg" alt="" />
        </div>
      </div>

      <div class="div__content">
        <div>
          <p>
            <span>12 Million IPLCs</span>
            that live and share their lands with wildlife in critical and
            globally important ecosystem hotspots
          </p>
          <img src="../assets/sav.jpeg" alt="" />
        </div>
      </div>

      <div class="div__content">
        <div>
          <p>
            <span>Culturally diverse communities:</span>
            including pastoralists, hunters-gatherers and agro-pastoralist
            communities in Tanzania.
          </p>
          <img src="../assets/sav.jpeg" alt="" />
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
}

body {
  .div__content {
    width: 96%;
    background: #ddd;

    div {
      margin: 1rem;
    }

    span {
      font-weight: bolder;
    }

    p {
      text-align: left !important;
      color: #303030;
      font-size: 14px;
    }
  }

  h1 {
    text-align: center;
    padding-bottom: 1rem;
  }

  main {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    object-fit: contain;

    img {
      width: 100%;
      border-radius: 2px;

      &:hover {
        transform: scale(1.01);
        cursor: pointer;
        transition: all 0.5s ease-in-out;
      }
    }
  }
}
</style>
