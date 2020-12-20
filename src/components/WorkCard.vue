<template>
  <body>
  <h3>Basic Example</h3>
  <tabs
    v-model="selectedTab"
  >
    <tab
      v-for="(tab, i) in tabs"
      :key="`t${i}`"
      :val="tab"
      :label="tab"
      :indicator="true"
    />
  </tabs>
  <tab-panels
    v-model="selectedTab"
    :animate="true"
    :swipeable="true"
  >
    <tab-panel
      v-for="(tab, i) in tabs"
      :key="`tp${i}`"
      :val="tab"
    >
      {{ tab }}
    </tab-panel>
  </tab-panels>
    <main>
      <article>
        <section class="about">
          <div class="sec-one-cover">
            <div class="image">
              <img src="../assets/people4.jpeg" alt="" />
            </div>
            <div class="sec-one-inner">
              <h1>Community Development</h1>
              <p>
                <span>Why:</span> Indigenous peoples and local communities in
                Tanzania still experience acute poverty. They do not have access
                to reliable water systems, quality education, health services or
                livelihoods options. However, the design of public services for
                indigenous peoples and local communities is such that
                sustainability is not an element.
              </p>
              <p>
                <span>Objective:</span> To solve poverty issues through
                enterprise-based models for ensuring sustainability and growth.
              </p>
              <p>
                <span>Plan:</span> TEST will, in collaboration with its
                partners, assist indigenous communities develop enterprise-based
                solutions in designing social and basic services to address
                poverty and increase access to fundamental social services such
                as education, health and water. (SDG 1, 2, 3, 4, 5, 6, 7, 8)
              </p>
            </div>
          </div>
        </section>
      </article>

      <section class="about">
        <div class="sec-one-cover">
          <div class="image">
            <img src="../assets/people4.jpeg" alt="" />
          </div>
          <div class="sec-one-inner">
            <h1>TRaditional Rangelands Management</h1>
            <p>
              <span>Why:</span> Traditionally indigenous peoples have their own
              ways of land governance and use for all seasons and for all uses.
              This cultural practice allowed the lands to recover between
              seasons and pasture to be available throughout the year. But the
              pastoralists in Tanzania can hardly do this. Population growth,
              coupled with land defragmentation and climate change have reduced
              the extent of their pasturelands and led also to a deterioration
              in quality. As a result, their cattle often die in the dry season
              or in droughts from lack of grass and lack of water. This is
              devastating.
            </p>
            <p>
              <span>Objective:</span> to introduce a governance plan that will
              re-design grazing patterns and organization for the livestock in
              the area to improve the livelihoods of the local communities as
              well as enhance the conservation of biodiversity.
            </p>
            <p>
              <span>Plan:</span> Change is needed. TEST is working with the
              pastoralists in Tanzania to restore indigenous land use practices
              and coping mechanisms to ensure availability of pasture and to
              address the effects of climate and cultural change. TEST helps
              pastoral communities restore and adapt traditional land use
              practices and coping mechanisms to address the effects of current
              pressures including climate change. SDG 1, 2, 15, 13, 17)
            </p>
          </div>
        </div>
      </section>
    </main>
  </body>
</template>

<script>
// import NavTab from "@/components/NavTab.vue";
export default {
  components: {
    // NavTab,
  },
};
</script>

<style lang="scss" scoped>
body {
  main {
    width: 85%;
    margin: auto;
    margin-top: 3%;
    margin-bottom: 5%;
  }

  h1 {
    text-align: left;
    font-size: 25px;
    margin: 0;
  }

  hr {
    margin-left: 0;
    border: 1px solid #303030;
  }

  .about {
    font-size: 14px;
    margin: auto;

    .sec-one-cover {
      display: flex;
      flex: auto;
      justify-content: space-between;

      .sec-one-inner {
        width: 55%;
        // border: 1px solid red;
      }
      .image {
        width: 40%;
        img {
          width: 100%;
        }
      }
    }
  }

  .before-enter {
    opacity: 0;
    transform: translateY(100px);
    transition: all 2s ease-out;
  }

  .enter {
    opacity: 1;
    transform: translateY(100px);
  }
}
</style>
