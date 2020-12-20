<template>
  <div>
    <HeaderCard />
    <Profile />
    <Objective />
    <Partnership />

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
import Partnership from "@/components/Partnership.vue";
import HeaderCard from "@/components/HeaderCard.vue";
import Profile from "@/components/Profile.vue";
export default {
  components: {
    HeaderCard,
    Profile,
    Partnership,
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
