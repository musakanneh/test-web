<template>
  <main>
    <div class="container">
      <h2 :style="style">
        {{ title }}
      </h2>
      <p :style="style">
        {{ describe_caption }}
      </p>
    </div>
  </main>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true,
    },
    describe_caption: {
      type: String,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
@media only screen and (max-width: 900px) {
  main {
    display: none;
  }
}

main {
  width: 100%;
  background: #ddd;
  padding: 6rem 0 6rem 0;
  text-align: center;

  background-image: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.712)),
    url("../assets/banner.jpg");
  background-repeat: no-repeat;
  background-attachment: fixed;
  position: center;
  background-size: cover;
  z-index: 1;
  text-align: center;
  padding: 5rem 0;

  h2 {
    color: #303030;
    font-size: 2.5rem;
    margin: 0;
  }

  p {
    font-size: 2rem !important;
    color: var(--primary-color);
    text-align: center;
    margin: auto;
    line-height: 1.5;
    width: 75%;
    font-weight: bold;
    transition: 20ms;
  }
}
</style>
