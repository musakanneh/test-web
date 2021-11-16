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
main {
  width: 100%;
  background: #ddd;
  padding: 6rem 0 6rem 0;
  text-align: center;

  h2 {
    color: #303030;
    font-size: 2.5rem;
    margin: 0;
  }

  p {
    font-size: 35px;
    color: #bf8f00;
    // padding: 1rem 0;
    text-align: center;
    margin: auto;
    width: 70%;
    font-weight: bold;
    transition: 20ms;
  }
}
</style>
