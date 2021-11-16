<template>
  <main>
    <div class="container">
      <h2 :style="style">
        {{ title }}
      </h2>
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
  },
};
</script>

<style lang="scss" scoped>
main {
  width: 100%;
  background: #ddd;
  padding: 5rem 0 0 0;
  text-align: center;

  h2 {
    color: #303030;
    font-size: 2.5rem;
  }
}
</style>
