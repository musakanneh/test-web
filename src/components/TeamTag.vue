<template>
  <div>
    <h4 :style="style">
      {{ name }}
    </h4>
    <p :style="style">
      {{ position }}
    </p>
  </div>
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      required: true,
    },
    position: {
      type: String,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
h4 {
  color: #303030;
  text-align: center;
  margin: 0;
  padding: 0.75rem 0;
}

p {
  margin: 0;
  color: #303030;
  text-align: center;
  padding-bottom: 0.4rem;
}
</style>
