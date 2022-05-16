<template>
  <body class="height_and_weight__global">
    <h1>OUR FOCUS</h1>
    <main class="container">
      <div class="flex-container flex-row flex-stretch outer">
        <div 
        v-for="(item, index) in items"
        :key="index"
        class="col-xs-6 col-md-3 inner">
          <div class="image-container">
            <img :src="item.image" alt="" />
          </div>
          <div>
            <h3>{{ item.title }}</h3>
            <p>{{ item.subtitle }}</p>
          </div>
        </div>
      </div>
    </main>
  </body>
</template>

<script>
export default {
  components: {},
  data: () => {
    return {
      items: [
        {
          title: "11",
          subtitle: "regions",
          image: require('../assets/map-region.jpeg')
        },
        {
          title: "390",
          subtitle: "villages",
          image: require("../assets/village.jpg")
        },
        {
          title: "12 Million IPLCs",
          subtitle: "that live and share their lands with wildlife in critical and globally important ecosystem hotspots",
          image: require("../assets/iplc.png")
        },
        {
          title: "Culturally diverse communities",
          subtitle: "including pastoralists, hunters-gatherers and agro-pastoralist communities in Tanzania.",
          image: require("../assets/diversity.jpg")
        }
      ]
    }
  }
};
</script>

<style lang="scss" scoped>
@media only screen and (max-width: 900px) {
}

body {
  .image-container {
      height: 145px;
      overflow: hidden;
  }
  .image-container img {
    width: 100%;
  }
  .inner {
    padding: 0rem 0.2rem;
    margin: 0 1.1rem;
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
