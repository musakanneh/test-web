<template>
  <body>
    <main>
      <article class="container">
        <h1 v-if="!isMobile">
          Conserving Natural Ecosystems and Improving Lives in Tanzania
        </h1>
        <p>
          Traditional Ecosystems Survival Tanzania (TEST) facilitates effective
          collaborations that integrate technical expertise and assistance with
          local knowledge and skills to reduce conflict, improve natural
          resource management, and enhance the sustainable well-being of
          indigenous peoples and wildlife in the natural ecosystems in Tanzania.
        </p>
        <a href="/about"><Button>Explore More</Button></a>
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
  h1 {
    width: 90% !important;
    margin: auto !important;
    font-size: 1.6rem !important;
  }

  button {
    width: 50% !important;
  }
}

body {
  background-image: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.712)),
    url("../assets/rangeland.png");
  background-repeat: no-repeat;
  background-attachment: fixed;
  width: 100%;
  height: 100%;
  position: center;
  background-size: cover;

  h1 {
    width: 70%;
    padding-bottom: 1rem;
    text-align: center;
    color: #fff;
    line-height: 1.5;
    margin: auto;
  }

  hr {
    width: 6%;
  }

  article {
    animation: fadeIn 1s;
  }

  main {
    padding: 18rem 0;
    height: 100%;
    width: 100%;
    text-align: center;

    button {
      background: var(--primary-color);
      border-radius: 3px;
      font-size: 14px;
      height: 45px;
      letter-spacing: 1px;
      border: none;
      width: 15%;
      margin-top: 2rem;
      color: #fff;
      box-shadow: inset 0 -0.6em 1em -0.35em rgba(0, 0, 0, 0.17),
        inset 0 0.6em 2em -0.3em rgba(255, 255, 255, 0.15),
        inset 0 0 0em 0.05em rgba(255, 255, 255, 0.12);
      text-align: center;
      cursor: pointer;

      &:hover {
        background: #a77e03;
        transition: 0.5s ease;
        color: #ffffff;
      }
    }

    aside {
      flex: 1;
    }

    p {
      color: var(--primary-color);
      width: 70%;
      font-weight: 500;
      margin: auto;
      padding: 20px 0;
      font-size: 2rem;
    }
  }
}
</style>
