<template>
  <div id="app">
    <Tabs>
      <Tab name="Why?" selected="true">
        <div class="content">
          <div><img src="../../assets/natural-ecosystem.jpg" alt="" /></div>
          <div>
            <p>
              Natural ecosystems are shrinking, deteriorating with no clear
              governance mechanisms and rampant land use conflicts.
              Traditionally, indigenous peoples have used ecological knowledge
              to govern land use for all seasons and for various uses. These
              cultural practices allowed the lands to recover between seasons
              and pasture to be available throughout the year. The land
              governance system is confined to small villages. In Tanzania there
              are at least 20 cases related with land use and governance
              conflicts. However, the pastoralists in Tanzania can hardly do
              this. Population growth, coupled with land defragmentation and
              climate change have reduced the extent of their pasturelands and
              resulted into deterioration in quality and regular land use
              conflicts. As a result, livestock and wildlife often die in the
              dry season or in droughts due to lack of grass and lack of water.
              This is devastating.
            </p>
          </div>
        </div>
      </Tab>
      <Tab name="Objective">
        <div class="content">
          <div><img src="../../assets/ecosystem-governance.jpg" alt="" /></div>
          <div>
            <p>
              TEST is committed to introduce an innovative ecosystem governance
              approach that will transcend boundaries of village systems in
              Tanzania to encompass connected cultural and geographical
              ecosystems and landscapes.
            </p>
            <p>
              The Sustainable Ecosystems Approach will re-design land use and
              governing models to allow integrated landscape approach to improve
              the livelihoods of the local communities as well as enhance the
              conservation of biodiversity.
            </p>
          </div>
        </div>
      </Tab>
      <Tab name="Plan">
        <div class="content">
          <div><img src="../../assets/cattles.jpeg" alt="" /></div>
          <div>
            <p>
              TEST, in collaboration with indigenous peoples and partners in
              Tanzania will introduce an innovative approach to govern and
              manage ecosystems and landscapes to ensure sustainability of
              ecosystems availability of pasture and to address the effects of
              climate and cultural change.
            </p>
            <p>
              Together with partners, TEST will facilitate for the design of
              livestock to markets programme as incentives for regulating the
              number of livestock on the land. The programme will control and
              maintain the carrying capacity of the land and loss of
              biodiversity. This will ensure that livestock are kept at certain
              numbers at different seasons (dry and wet) and according to land
              use zones. The livestock will be sold at certain intervals during
              the year.
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
@media only screen and (max-width: 900px) {
  * {
    padding: 0 !important;
    margin: auto !important;
    width: 98% !important;
  }

  .content {
    display: block !important;
  }

  img {
    padding: 1rem 0 !important;
  }

  p {
    margin-left: 0 !important;
    width: 100% !important;
    padding: 1rem 0 !important;
  }
}
#app {
  background: rgba(221, 221, 221, 0.555);
  box-shadow: 2px 5px #d8c690;
  padding: 2.5rem;

  .content {
    display: grid;
    grid-template-columns: 1fr 2fr;

    p {
      width: 90%;
      margin: auto;
      text-align: left;
      padding: 0.6rem 0;
      line-height: 1.5;
      font-size: 1.8rem;
    }
  }

  img {
    width: 100%;
    padding: 0.7rem 0;
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
}
</style>
