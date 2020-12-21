<template>
  <body>
    <br /><br />
    <h2>Community Development</h2>
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
                Indigenous peoples and local communities in Tanzania still
                experience acute poverty. They do not have access to reliable
                water systems, quality education, health services or livelihoods
                options. However, the design of public services for indigenous
                peoples and local communities is such that sustainability is not
                an element.
              </p>
            </div>

            <div class="tm-img">
              <img src="../assets/view.png" alt="" />
            </div>
          </div>
          <div v-if="currentTab === 'tab2'" class="current-tab-sec">
            <div class="tm-content-work">
              <p>
                To solve poverty issues through enterprise-based models for
                ensuring sustainability and growth.
              </p>
            </div>
            <div class="tm-img">
              <img src="../assets/indg.png" alt="" />
            </div>
          </div>
          <div v-if="currentTab === 'tab3'" class="current-tab-sec">
            <div class="tm-content-work">
              <p>
                TEST will, in collaboration with its partners, assist indigenous
                communities develop enterprise-based solutions in designing
                social and basic services to address poverty and increase access
                to fundamental social services such as education, health and
                water. (SDG 1, 2, 3, 4, 5, 6, 7, 8)
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
    <WorkCard2 />
  </body>
</template>

<script>
// import Button from "@/components/Button.vue";
import WorkCard from "@/components/WorkCard.vue";
import WorkCard2 from "@/components/WorkCard2.vue";
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
    WorkCard2,
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
