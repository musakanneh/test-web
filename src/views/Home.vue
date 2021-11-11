<template>
  <div>
    <HeaderCard />
    <Objective />
    <Partnership />
  </div>
</template>

<script>
import Partnership from "@/components/Partnership.vue";
import HeaderCard from "@/components/HeaderCard.vue";
import Objective from "@/components/Objective.vue";

export default {
  components: {
    HeaderCard,
    Objective,
    Partnership,
  },
};
</script>

<style lang="scss" scoped>
h1 {
  text-align: center;
}

.sec {
  background: #fbfbfb;
  width: 100%;
}
</style>
