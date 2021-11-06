<template>
  <div>
    <HeaderCard />
    <GeneralObjective />
    <Objective />
    <KnowUsMore />

    <!-- <section class="sec">
      <h1>Our Partners</h1>
      <div class="partners-cover">
        <img src="../assets/loliondo.png" alt="" />
        <img src="../assets/idingo.png" alt="" />
        <img src="../assets/ecft.png" alt="" />
        <img src="../assets/olmaa.png" alt="" />
      </div>
    </section> -->
  </div>
</template>

<script>
import Objective from "@/components/Objective.vue";
import KnowUsMore from "@/components/KnowUsMore.vue";
import HeaderCard from "@/components/HeaderCard.vue";
import GeneralObjective from "@/components/GeneralObjective.vue";
export default {
  components: {
    HeaderCard,
    GeneralObjective,
    KnowUsMore,
    Objective,
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
