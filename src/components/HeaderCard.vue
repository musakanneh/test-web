<template>
  <body>
    <main>
      <article class="container">
        <h1 v-if="!isMobile">
          Conserving Natural Ecosystems, and Improving Lives in Tanzania
        </h1>
        <p>
          Traditional Ecosystems Survival Tanzania (TEST) is a non-profit
          organization that facilitates effective collaborations that integrate
          technical expertise and assistance with local knowledge and skills to
          reduce conflict, improve natural resource management, and enhance the
          sustainable well-being of indigenous peoples and wildlife in the
          natural ecosystems in Tanzania.
        </p>
        <router-link to="/about"><Button>Explore More</Button></router-link>
      </article>
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
  background-attachment: fixed !important;
  margin: auto;
  width: 100%;
  height: 100%;
  position: center;
  background-size: cover;
  z-index: 1;

  h1 {
    width: 80%;
    padding-bottom: 1rem;
    text-align: center;
    color: #fff;
    margin: auto;
  }

  hr {
    width: 6%;
  }

  main {
    padding: 15% 0;
    height: 100%;
    text-align: center;

    button {
      background: #689d1a;
      border-radius: 3px;
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
        transition: 0.5s ease;
        color: #689d1a;
      }
    }

    aside {
      flex: 1;
    }

    p {
      color: #fbfbfbce;
      width: 75%;
      margin: auto;
      padding: 20px 0;
      line-height: 1.5rem !important;
    }
  }
}
</style>
