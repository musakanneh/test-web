<template>
  <body>
    <br /><br /><br /><br /><br />
    <h1>TO Know Us More</h1>
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
              <p>
                To design appropriate and sustainable ecosystem governance
                mechanisms and tools by combining scientifically proven
                solutions with the indigenous ecological land management
                practices
              </p>
            </div>
            <div>
              <img src="../assets/lio2.jpeg" alt="" />
            </div>
          </div>
          <div v-if="currentTab === 'tab2'" class="current-tab-sec">
            <div>
              <p>
                To open space for learning, research and to provide an
                alternative route to addressing pressing ecosystems governance
                challenges such as climate and ecological breakdown, and the
                corresponding threats that indigenous people face.
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
    title: "Our Aim",
    value: "tab1",
  },
  {
    title: "Outcome",
    value: "tab2",
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
