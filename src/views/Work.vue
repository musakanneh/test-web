<template>
  <body>
    <br /><br /><br /><br /><br />
    <h2>COMMUNITY WILDLIFE CONSERVATION</h2>
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
                The wildlife in natural ecosystems share their habitats with
                indigenous peoples and their livelihoods (grazing, farms).
                Wildlife movements within these ecosystems have been and
                continue to experience challenges and are a source of
                human-wildlife conflicts. Just having wildlife on these
                ecosystems, people and wildlife face challenges of co-habiting.
                The future of wildlife in Tanzania depends on positive
                understanding of indigenous communities and the acceptance of
                their role.
              </p>
            </div>

            <div class="tm-img">
              <img src="../assets/leo.png" alt="" />
            </div>
          </div>
          <div v-if="currentTab === 'tab2'" class="current-tab-sec">
            <div class="tm-content-work">
              <p>
                To re-activate the support of indigenous communities whose
                indigenous traditional knowledge systems and their territories
                are vital in wildlife conservation and enhance meaningful
                collaboration of indigenous communities and government agencies.
                Through this achievement, we will be able to enhance the quality
                of wildlife habitats.
              </p>
            </div>
            <div class="tm-img">
              <img src="../assets/indg.png" alt="" />
            </div>
          </div>
          <div v-if="currentTab === 'tab3'" class="current-tab-sec">
            <div class="tm-content-work">
              <p>
                TEST is committed to facilitating conservation education and
                campaigns for indigenous communities and assist in obtaining
                formal recognition of their indigenous community conserved areas
                (ICCAs) for wildlife in the natural ecosystems in Tanzania. (SDG
                15, 13, 17, etc)
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

<style lang="scss">
body {
  width: 100%;
  .current-tab-sec {
    display: flex;
  }

  .content {
    box-shadow: 0px 6px 20px rgba(0, 0, 0, 0.06);
    padding: 10px 20px;
    width: 82%;
  }

  h2 {
    text-align: left;
    width: 85%;
    color: #c98811;
    margin: auto;
  }

  p {
    width: 90%;
  }

  .tm-content-work {
    width: 60%;
  }

  .tm-img {
    width: 40%;
    float: right;
  }
  .tm-how-content {
    width: 70%;
  }

  .tm-image {
    width: 30%;
  }
  .activities-sec-cover {
    display: flex;

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
