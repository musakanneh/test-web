<template>
  <body class="height_and_weight__global">
    <h1>OUR FOCUS</h1>
    <main class="container">
      <div class="row">
        <div class="col-xs-6 col-md-3">
          <div class="inner">
            <h2>11</h2>
            <p>regions</p>
            <br /><br />
          </div>
          <img src="../assets/iplc.png" alt="" />
        </div>
        <div class="col-xs-6 col-md-3">
          <div class="inner">
            <h2>300</h2>
            <p>villages</p>
            <br /><br />
          </div>
          <img src="../assets/iplc.png" alt="" />
        </div>
        <div class="col-xs-6 col-md-3">
          <div class="inner">
            <h3>12 Million IPLCs</h3>
            <p>
              that live and share their lands with wildlife in critical and
              globally important ecosystem hotspots
            </p>
          </div>
          <img src="../assets/iplc.png" alt="" />
        </div>
        <div class="col-xs-6 col-md-3">
          <div class="inner">
            <h3>Culturally diverse communities</h3>
            <p>
              including pastoralists, hunters-gatherers and agro-pastoralist
              communities in Tanzania.
            </p>
          </div>
          <img src="../assets/test.png" alt="" />
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
  .inner {
    background: #ddd;
    padding: 1.5rem 0.8rem;
    text-align: left;

    span {
      color: #90909090;
      padding-right: 0.5rem;
    }
  }
  h2,
  h3 {
    font-weight: bolder;
    text-align: center;
  }

  p {
    text-align: center;
  }

  h1 {
    text-align: center;
    padding: 4rem 0;
  }

  main {
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
