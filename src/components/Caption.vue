<template>
  <div>
    <h1 :style="style">
      {{ captions }}
    </h1>
  </div>
</template>

<script>
export default {
  props: {
    captions: {
      type: String,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
h1 {
  font-size: 35px;
  color: #c98811;
  text-align: center;
  font-weight: 600;
  transition: 200ms;
  //white-space: nowrap;
}
</style>
