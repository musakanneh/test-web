<template>
  <div id="app">
    <Tabs>
      <Tab name="Our Aim" selected="true">
        <p>
          design innovative and sustainable ecosystem governance mechanisms and
          tools by combining scientifically proven solutions with the indigenous
          ecological and land management practices that address poverty
          reduction.
        </p>
      </Tab>
      <Tab name="Outcome">
        <p>
          open an alternative space for learning and research to addressing
          pressing ecosystems governance challenges while simulatneously
          delivering focused solutions for poverty reduction
        </p>
      </Tab>
    </Tabs>
  </div>
</template>

<script>
import Tab from "@/components/Tabs/Tab.vue";
import Tabs from "@/components/Tabs/Tabs.vue";
export default {
  components: {
    Tab,
    Tabs,
  },
};
</script>

<style lang="scss" scoped>
body {
  background-color: #45443f;
  color: #fefefe;
}
th,
td {
  padding: 5px;
  border: 1px solid #fefefe;
  text-align: center;
}
</style>
