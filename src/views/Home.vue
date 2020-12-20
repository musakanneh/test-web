<template>
  <div>
    <HeaderCard />
    <Profile />
    <Objective />
    <!-- <Location /> -->
    <Partnership />
    <!-- <Results /> -->

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
// import Results from "@/components/Results.vue";
import HeaderCard from "@/components/HeaderCard.vue";
// import Location from "@/components/Location.vue";
import Profile from "@/components/Profile.vue";
export default {
  components: {
    HeaderCard,
    Profile,
    // Location,
    // Results,
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

/*.partners-cover {
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  width: 60%;
  margin: auto;

  img {
    width: 20%;
    -moz-box-shadow: 0px 2px 15px -12px rgba(0, 0, 0, 0.57);
  }
}*/
</style>
