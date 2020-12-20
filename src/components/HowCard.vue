<template>
  <body>
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
            <div class="">
              <h2>COLLABORATIVE RESEARCH</h2>
              <p>
                TEST shall host a collaborative research program with renowned
                academic and research institutions to develop the database of
                the indigenous ecological knowledge practices that enhance
                environmental and cultural sustainability. Furthermore, explore
                best options to merge scientific conservation approaches with
                indigenous traditional knowledge towards sustainable
                conservation actions that address resource tenure and
                governance, environmental hazards, illegal wildlife trade, and
                the climate emergency.
              </p>
            </div>
            <div>
              <img src="../assets/lio2.jpeg" alt="" />
            </div>
          </div>
          <div v-if="currentTab === 'tab2'" class="current-tab-sec">
            <div>
              <h2>EDUCATION AND CAPACITY BUILDING</h2>
              <p>
                TEST shall facilitate a comprehensive awareness creation program
                to disseminate and exhibit the findings of the action research.
                The action will employ such media as film, radio, and other
                storytelling tools. The purpose is to enable the scientific
                forum to recognize and adopt indigenous communities’ best land
                management practices for sustainable ecosystems management and
                integrate such suitable indigenous cultures into official school
                curricula.
              </p>
            </div>
            <div>
              <img src="../assets/lio2.jpeg" alt="" />
            </div>
          </div>
          <div v-if="currentTab === 'tab3'" class="current-tab-sec">
            <div>
              <h2>CULTURAL EXCHANGE</h2>
              <p>
                Tanzania has a diversity if indigenous cultures contributing to
                community and ecological resilience. TEST will facilitate
                targeted cultural exchange visits with and among diverse
                cultural groups to enhance learning, sharing culturally valued
                lessons across diverse communities in Tanzania and beyond.
              </p>
            </div>
            <div>
              <img src="../assets/lio2.jpeg" alt="" />
            </div>
          </div>
          <div v-if="currentTab === 'tab4'" class="current-tab-sec">
            <div>
              <h2>CULTURAL EXCHANGE</h2>
              <p>
                TEST shall spearhead the development of a
                participatory-landscape approach to land-use-plans including
                guidelines for governing and controlling the use of the land
                resources at the community level and ecosystem-wide levels.
              </p>
            </div>
            <div>
              <img src="../assets/lio2.jpeg" alt="" />
            </div>
          </div>
        </div>
      </article>
      <aside></aside>
    </section>
  </body>
</template>

<script>
import Tabs from "vue-tabs-with-active-line";
const TABS = [
  {
    title: "RESEARCH",
    value: "tab1",
  },
  {
    title: "EDUCATION",
    value: "tab2",
  },
  {
    title: "EXCHANGE",
    value: "tab3",
  },
  {
    title: "GOVERNANCE",
    value: "tab4",
  },
];
export default {
  components: {
    Tabs,
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

<style lang="scss">
body {
  .current-tab-sec {
    // border: 1px solid red;
    display: flex;
  }
  .activities-sec-cover {
    display: flex;

    article {
      flex: 1;
    }

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
      font-size: 16px;
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
  .content {
    margin-top: 30px;
    font-size: 20px;
    width: 85%;
    margin: auto;
  }
}
</style>
