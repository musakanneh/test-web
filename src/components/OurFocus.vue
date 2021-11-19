<template>
  <body class="height_and_weight__global">
    <h1>OUR FOCUS</h1>
    <main class="container">
      <div class="div__content">
        <div class="inner">
          <p><span>11</span></p>
          <p>regions</p>
          <br /><br />
        </div>
        <img src="../assets/iplc.png" alt="" />
      </div>

      <div class="div__content">
        <div class="inner">
          <p><span>300 </span></p>
          <p>villages</p>
          <br /><br />
        </div>
        <img src="../assets/iplc.png" alt="" />
      </div>

      <div class="div__content">
        <div class="inner">
          <p>
            <span>12 Million IPLCs</span>
          </p>
          <p>
            that live and share their lands with wildlife in critical and
            globally important ecosystem hotspots
          </p>
        </div>
        <img src="../assets/iplc.png" alt="" />
      </div>

      <div class="div__content">
        <div class="inner">
          <p>
            <span>Culturally diverse communities:</span>
          </p>
          <p>
            including pastoralists, hunters-gatherers and agro-pastoralist
            communities in Tanzania.
          </p>
        </div>
        <img src="../assets/test.png" alt="" />
      </div>
    </main>
  </body>
</template>

<script>
export default {
  components: {
  },
};
</script>

<style lang="scss" scoped>
@media only screen and (max-width: 900px) {
}

body {
  .div__content {
    width: 96%;

    .inner {
      padding: 0.5rem 1rem;
      background: #ddd;
    }

    span {
      font-weight: bolder;
      font-size: 1.2rem;
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

      &:hover {
        transform: scale(1.01);
        cursor: pointer;
        transition: all 0.5s ease-in-out;
      }
    }
  }
}
</style>
