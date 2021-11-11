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
  padding: 5rem 0 0 0;

  h2 {
    color: #303030;
    font-size: 2.5rem;
  }
}
</style>