<template>
  <main>
    <div class="container">
      <h2 :style="style">
        {{ name }}
      </h2>
    </div>
  </main>
</template>

<script>
export default {
  props: {
    name: {
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
  background: #ddd;
  padding: 7rem 0 1rem 0;
  background-image: url("../assets/vector1.png");
  background-repeat: no-repeat;
  width: 100%;
  height: 100%;
  position: center;
  background-size: cover;

  h2 {
    color: #505050;
    font-size: 2.5rem;
  }
}
</style>
