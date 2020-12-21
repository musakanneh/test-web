<template>
  <body>
    <br /><br />
    <h2>Traditional Rangeland Management</h2>
    <section class="activities-sec-cover">
      <article>
        <tabs
          :tabs="tabs"
          :currentTab="currentTab"
          :wrapper-class="'default-tabs'"
          :tab-class="'default-tabs__item'"
          :tab-active-class="'default-tabs__item_active'"
          :line-class="'default-tabs__active-line'"
          @onClick="handleClick"
        />
        <div class="content">
          <div v-if="currentTab === 'tab1'" class="current-tab-sec">
            <div class="tm-content-work">
              <p>
                Traditionally indigenous peoples have their own ways of land
                governance and use for all seasons and for all uses. This
                cultural practice allowed the lands to recover between seasons
                and pasture to be available throughout the year. But the
                pastoralists in Tanzania can hardly do this. Population growth,
                coupled with land defragmentation and climate change have
                reduced the extent of their pasturelands and led also to a
                deterioration in quality. As a result, their cattle often die in
                the dry season or in droughts from lack of grass and lack of
                water. This is devastating.
              </p>
            </div>

            <div class="tm-img">
              <img src="../assets/rangeland.png" alt="" />
            </div>
          </div>
          <div v-if="currentTab === 'tab2'" class="current-tab-sec">
            <div class="tm-content-work">
              <p>
                to introduce a governance plan that will re-design grazing
                patterns and organization for the livestock in the area to
                improve the livelihoods of the local communities as well as
                enhance the conservation of biodiversity.
              </p>
            </div>
            <div class="tm-img">
              <img src="../assets/indg.png" alt="" />
            </div>
          </div>
          <div v-if="currentTab === 'tab3'" class="current-tab-sec">
            <div class="tm-content-work">
              <p>
                Change is needed. TEST is working with the pastoralists in
                Tanzania to restore indigenous land use practices and coping
                mechanisms to ensure availability of pasture and to address the
                effects of climate and cultural change. TEST helps pastoral
                communities restore and adapt traditional land use practices and
                coping mechanisms to address the effects of current pressures
                including climate change. SDG 1, 2, 15, 13, 17)
              </p>
            </div>
            <div class="tm-img">
              <img src="../assets/edu.png" alt="" />
            </div>
          </div>
        </div>
      </article>
    </section>
    <WorkCard />
    <br /><br /><br />
  </body>
</template>

<script>
import WorkCard from "@/components/WorkCard.vue";
import Tabs from "vue-tabs-with-active-line";
const TABS = [
  {
    title: "Why",
    value: "tab1",
  },
  {
    title: "Objective",
    value: "tab2",
  },
  {
    title: "Plan",
    value: "tab3",
  },
];
export default {
  components: {
    Tabs,
    WorkCard,
  },
  data: () => ({
    tabs: TABS,
    currentTab: "tab1",
  }),
  methods: {
    handleClick(newTab) {
      this.currentTab = newTab;
    },
  },
};
</script>

<style lang="scss" scoped>
body {
  width: 100%;

  h2 {
    text-align: left;
    width: 85%;
    color: #c98811;
    margin: auto;
  }

  p {
    width: 90%;
  }

  .content {
    box-shadow: 0px 6px 20px rgba(0, 0, 0, 0.06);
    padding: 10px 20px;
    width: 82%;
  }

  .tm-content-work {
    width: 60%;
  }

  .tm-img {
    width: 40%;
    float: right;
  }

  .activities-sec-cover {
    img {
      width: 100%;
    }
  }

  .default-tabs {
    width: 85%;
    position: relative;
    margin: 0 auto;

    &__item {
      display: inline-block;
      margin: 0 5px;
      padding: 10px;
      padding-bottom: 8px;
      font-size: 14px;
      letter-spacing: 0.8px;
      color: #303030;
      text-decoration: none;
      border: none;
      background-color: transparent;
      border-bottom: 2px solid transparent;
      cursor: pointer;
      transition: all 0.25s;

      &_active {
        color: black;
      }
      &:hover {
        border-bottom: 2px solid #c98811;
        color: #c98811;
      }
      &:focus {
        outline: none;
        border-bottom: 2px solid #c98811;
        color: #c98811;
      }
      &:first-child {
        margin-left: 0;
      }
      &:last-child {
        margin-right: 0;
      }
    }
    &__active-line {
      position: absolute;
      bottom: 0;
      left: 0;
      height: 2px;
      background-color: black;
      transition: transform 0.4s ease, width 0.4s ease;
    }
  }
}
</style>
