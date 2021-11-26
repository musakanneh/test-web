<template>
  <body class="height_and_weight__global">
    <h1>OUR FOCUS</h1>
    <main class="container">
      <div class="row">
        <div class="col-xs-6 col-md-3">
          <div class="inner">
            <h2>11</h2>
            <p>regions</p>
            <br />
          </div>
          <img src="../assets/regions.jpg" alt="" />
        </div>
        <div class="col-xs-6 col-md-3">
          <div class="inner">
            <h2>300</h2>
            <p>villages</p>
            <br /><br />
          </div>
          <img src="../assets/village.jpg" alt="" />
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
          <img src="../assets/diversity.jpg" alt="" />
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
    padding: 1.5rem 0.8rem;
    box-sizing: border-box;
    background-color: rgb(255, 255, 255);
    box-shadow: rgba(0, 0, 0, 0.082) 0px 0px 50px -10px;
    border: 1px solid rgb(241, 240, 240);
    &:hover {
      box-shadow: rgba(0, 0, 0, 0.205) 0px 0px 50px -10px;

      transition-delay: 0.01s;
      transition: 0.5s ease;
    }

    span {
      color: #90909090;
      padding-right: 0.5rem;
    }
  }
  h2,
  h3 {
    font-weight: bolder;
    text-align: center;
    margin: 0;
    padding: 1rem 0;
  }

  p {
    text-align: center;
  }

  h1 {
    text-align: center;
    padding: 4rem 0;
  }

  main {
    padding: 0;

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
