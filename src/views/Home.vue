<template>
  <div>
    <HeaderCard />
    <Ecosystems />
    <Partnership />
  </div>
</template>

<script>
import Partnership from "@/components/Partnership.vue";
import HeaderCard from "@/components/HeaderCard.vue";
import Ecosystems from "@/components/Ecosystems.vue";

export default {
  name: "Home",

  components: {
    HeaderCard,
    Ecosystems,
    Partnership,
  },
};

// metaInfo() {
//   return  {
//     title
//   }
// }
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
