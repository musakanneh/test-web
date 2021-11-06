<template>
  <body>
    <main>
      <article>
        <h1 v-if="!isMobile">
          Conserving Nature and Improving Lives in Tanzania
        </h1>
        <hr />
        <p>
          Traditional Ecosystems Survival Tanzania (TEST) is a non-profit
          organization that facilitates effective collaborations that integrate
          technical expertise and assistance with local knowledge and skills to
          reduce conflict, improve natural resource management, and enhance the
          sustainable well-being of indigenous peoples, livestock and wildlife
          in the natural ecosystems in Tanzania.
        </p>
      </article>
      <router-link to="/about"><Button>Explore More</Button></router-link>
    </main>
  </body>
</template>

<script>
export default {
  components: {},

  methods: {
    isMobileTitle: false,
  },
};
</script>

<style lang="scss" scoped>
@media only screen and (max-width: 900px) {
}
body {
  background-image: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.712)),
    url("../assets/banner6.jpeg");
  background-repeat: no-repeat;
  background-attachment: fixed;
  margin: auto;
  width: 100%;
  position: center;
  background-size: cover;
  z-index: 1;

  h1{
    // border: 1px solid red !important;
  }

  hr {
    width: 6%;
  }

  main {
    justify-content: space-between;
    flex: auto;
    text-align: center;
    padding: 15%;
    margin: auto;

    button {
      background: transparent;
      border-radius: 5px;
      font-size: 14px;
      height: 45px;
      letter-spacing: 1px;
      border: 1px solid #689d1a;
      width: 15%;
      margin-top: 2rem;
      color: #fff;
      box-shadow: inset 0 -0.6em 1em -0.35em rgba(0, 0, 0, 0.17),
        inset 0 0.6em 2em -0.3em rgba(255, 255, 255, 0.15),
        inset 0 0 0em 0.05em rgba(255, 255, 255, 0.12);
      text-align: center;
      cursor: pointer;

      &:hover {
        background: #fff;
        border: 1px solid #fff;
        transition: 1s ease;
        color: #689d1a;
      }
    }

    article {
      h1 {
        font-size: 2em !important;
      }
    }
    aside {
      flex: 1;
    }

    p {
      margin: auto;
      color: #fbfbfbce;
      width: 70%;
      padding: 20px 0;
      font-size: 14px;
      letter-spacing: 0.5px;
      font-style: normal;
      font-weight: normal;
      line-height: 20px;
    }
  }
}
</style>
