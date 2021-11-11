<template>
  <body class="height_and_weight__global">
    <main class="container">
      <h1>To Know Us More</h1>
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
              <div class="tm-content">
                <p>
                  To design appropriate and sustainable ecosystem governance
                  mechanisms and tools by combining scientifically proven
                  solutions with the indigenous ecological land management
                  practices
                </p>
              </div>
              <div class="tm-img">
                <img src="../assets/dogs1.jpeg" alt="" />
              </div>
            </div>
            <div v-if="currentTab === 'tab2'" class="current-tab-sec">
              <div class="tm-content">
                <p>
                  To open space for learning, research and to provide an
                  alternative route to addressing pressing ecosystems governance
                  challenges such as climate and ecological breakdown, and the
                  corresponding threats that indigenous people face.
                </p>
              </div>
              <div class="tm-img">
                <img src="../assets/dogs1.jpeg" alt="" />
              </div>
            </div>
          </div>
        </article>
      </section>
    </main>
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

<style lang="scss" scoped>
body {
  // border: 1px solid red;
  background: #ddd;

  .current-tab-sec {
    display: flex;
    width: 100%;
    justify-content: space-between;
  }

  .activities-sec-cover {
    .tm-content {
      width: 40%;
      padding: 3rem 0;

      p {
        color: #303030;
      }
    }

    .tm-img {
      width: 50%;
    }

    img {
      width: 100%;
    }
  }

  .default-tabs {
    position: relative;
    margin: 0 auto;
    &__item {
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
