<template>
  <div id="app">
    <Tabs>
      <Tab name="Why?" selected="true">
        <div class="content">
          <div>
            <img src="../../assets/ecowild1.png" alt="" />
          </div>
          <div>
            <p>
              The wildlife in natural ecosystems share their habitats with
              indigenous peoples and their livelihoods mostly pastureland and
              farms. However, indigenous peoples and local communities have been
              side-lined in mainstream wildlife conservation initiatives
              completely jeopardizing the peaceful co-existence witnessed for
              many centuries. Wildlife within these ecosystems continue to
              experience challenges related to movement, habitat management and
              consequently are a source of numerous human-wildlife conflicts.
            </p>

            <p>
              The wildlife in natural ecosystems share their habitats with
              indigenous peoples and their livelihoods mostly pastureland and
              farms. However, indigenous peoples and local communities have been
              side-lined in mainstream wildlife conservation initiatives
              completely jeopardizing the peaceful co-existence witnessed for
              many centuries. Wildlife within these ecosystems continue to
              experience challenges related to movement, habitat management and
              consequently are a source of numerous human-wildlife conflicts.
            </p>
            <p class="appromixation">
              Approx. 1,000 human cases – 2,000 livestock – 20 land conflicts
            </p>
          </div>
        </div>
      </Tab>
      <Tab name="Objective">
        <div class="content">
          <div><img src="../../assets/water.jpg" alt="" /></div>
          <div>
            <p>
              To re-activate the role and support of indigenous communities for
              wildlife protection within community lands. The indigenous
              traditional knowledge systems and their territories are vital in
              continuing the peaceful and sustainable co-existence to ensure
              wildlife conservation in community lands. The restoration of
              community roles in wildlife conservation will strengthen and
              enhance meaningful collaboration of indigenous communities and
              government agencies. Through this achievement, TEST will increase
              the quality and quantity of wildlife habitats.
            </p>
          </div>
        </div>
      </Tab>
      <Tab name="Plan">
        <div class="content">
          <div><img src="../../assets/indPeople.jpg" alt="" /></div>
          <div>
            <p>
              TEST is committed to work with indigenous peoples and partners to
              provide wildlife conservation support, services and campaigns
              within their territories and ecosystems. Furthermore, TEST will
              assist in obtaining formal recognition of the indigenous community
              conserved areas for wildlife in the natural ecosystems in
              Tanzania.
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
  padding: 4rem 2.5rem;
  box-shadow: 2px 5px #d8c690;

  .appromixation {
    text-align: center;
    color: var(--primary-color);
    font-weight: bold;
    background-color: #d8c6903a;
  }

  .content {
    display: grid;
    grid-template-columns: 1fr 2fr;

    p {
      width: 90%;
      margin: auto;
      padding: 0.6rem 0;
      line-height: 1.5;
      font-size: 1.85rem !important;
    }
  }

  img {
    width: 100%;
    padding: 0.7rem 0;
  }
}

th,
td {
  padding: 5px;
  border: 1px solid #fefefe;
  text-align: center;
}
</style>
