<template>
  <div id="app">
    <Tabs>
      <Tab name="Why?" selected="true">
        <div class="content">
          <div>
            <img src="../../assets/la.jpeg" alt="" />
          </div>
          <div>
            <p>
              The wildlife in natural ecosystems share their habitats with
              indigenous peoples and their livelihoods mostly pastureland and
              farms. However, indigenous peoples and local communities have been
              side-lined in mainstream wildlife conservation initiatives
              completely jeopardizing the peaceful co-existence witnessed for
              many centuries.
            </p>
            <p>
              Wildlife within these ecosystems have been and continue to
              experience challenges of movement, habitat management and are a
              source of rampant human-wildlife conflicts.
            </p>
            <p>
              Human-wildlife conflicts have intensified in the last decade
              through predation of livestock, marauding farms and loss of life
              for humans. Tensions continue to grow between wildlife and people
              in our ecosystems/landscapes. The future of wildlife in Tanzania
              depends on positive conservation contribution of indigenous
              communities.
            </p>
          </div>
        </div>
      </Tab>
      <Tab name="Objective">
        <div class="content">
          <div><img src="../../assets/wilddogs.jpeg" alt="" /></div>
          <div>
            <p>
              To re-activate the role and support of indigenous communities for
              wildlife protection within community lands. The indigenous
              traditional knowledge systems and their territories are vital in
              continuing the peaceful co-existence to ensure wildlife
              conservation in community lands.
            </p>
            <p>
              The restoration of community roles in wildlife conservation will
              strengthen and enhance meaningful collaboration of indigenous
              communities and government agencies. Through this achievement,
              TEST will increase the quality and quantity of wildlife habitats.
            </p>
          </div>
        </div>
      </Tab>
      <Tab name="Plan">
        <div class="content">
          <div><img src="../../assets/wild.jpeg" alt="" /></div>
          <div>
            <p>
              TEST is committed to work with indigenous peoples and local
              communities to provide wildlife conservation support, services and
              campaigns within their territories and ecosystems.
            </p>
            <p>
              Further to this, TEST will assist in obtaining formal recognition
              of the indigenous community conserved areas (ICCAs) for wildlife
              in the natural ecosystems in Tanzania.
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
  background: rgba(221, 221, 221, 0.555);
  padding: 2.5rem;

  .content {
    display: grid;
    grid-template-columns: 1fr 2fr;

    p {
      width: 90%;
      margin: auto;
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
  text-align: center;
}
</style>
