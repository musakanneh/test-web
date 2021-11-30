<template>
  <div>
    <HeaderCard />
    <Ecosystems />
    <Partnership />
    <ProjectCard />
  </div>
</template>

<script>
import Partnership from "@/components/Partnership.vue";
import HeaderCard from "@/components/HeaderCard.vue";
import Ecosystems from "@/components/Ecosystems.vue";
import ProjectCard from "@/components/ProjectCard.vue";

export default {
  components: {
    HeaderCard,
    Ecosystems,
    Partnership,
    ProjectCard,
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
