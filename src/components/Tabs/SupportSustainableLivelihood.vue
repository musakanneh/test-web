<template>
  <div id="app">
    <Tabs>
      <Tab name="Why?" selected="true">
        <div class="content">
          <div>
            <img src="../../assets/ind-people.png" alt="" />
          </div>
          <div>
            <p>
              Indigenous peoples and local communities in Tanzania are
              communities in transition. They desire improved and reliable
              livelihoods options. But they continue to experience abject
              poverty and deteriorating livelihoods. They do not have access to
              reliable safe and clean water services, quality education, health
              services or sustainable livelihoods options. The provision and the
              design of public services for indigenous peoples and local
              communities need to be sustainable and in line with biodiversity
              conservation approaches and interests.
            </p>
          </div>
        </div>
      </Tab>
      <Tab name="Objective">
        <div class="content">
          <div>
            <img src="../../assets/design.png" alt="" />
          </div>
          <div>
            <p>
              To design social services (education, energy, health and water)
              and livelihood options through innovative financial models for
              ensuring sustainability, growth and compatibility with
              biodiversity approaches.
            </p>
          </div>
        </div>
      </Tab>
      <Tab name="Plan">
        <div class="content">
          <div>
            <img src="../../assets/learning.png" alt="" />
          </div>
          <div>
            <p>
              TEST will, in collaboration with its partners, embark in
              innovation in designing and delivering livelihoods options to
              address poverty and increase access to fundamental social services
              such as education, health and water.
            </p>
          </div>
        </div>
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
#app {
  .content {
    display: grid;
    grid-template-columns: 1fr 2fr;

    p {
      width: 90%;
      margin: auto;
      text-align: left;
      line-height: 1.5;
    }
  }

  img {
    width: 100%;
  }
}
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
