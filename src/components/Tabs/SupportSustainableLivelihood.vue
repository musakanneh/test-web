<template>
  <div id="app">
    <Tabs>
      <Tab name="Why?" selected="true">
        <div class="content">
          <div>
            <img src="../../assets/tz-people.png" alt="" />
          </div>
          <div>
            <p>
              As of 2021, over <strong>29 million</strong> people in Tanzania
              live in extreme poverty, with the poverty threshold at
              <strong>1.90 U.S.</strong> dollars a day. By 2025,
              <strong>26.4 million</strong> Tanzanians are projected to live on
              a maximum of 1.90 U.S. dollars per day.
              <strong>12 million</strong> indigenous peoples are at the end of
              the line living in acute poverty. Indigenous peoples desire income
              to meet their basic social and economic needs: food, shelter,
              health, education, water and energy.
            </p>

            <p class="appromixation">
              <strong>29 million</strong>
              poor people – 12 million indigenous communities –
              <strong>1.9 usd per day</strong>
            </p>
            <p>
              Indigenous peoples and local communities in Tanzania are
              communities in transition. As such, they desire improved and
              reliable livelihoods options. However, in most places, they do not
              have access to reliable safe and clean water services, quality
              education, energy, health services or sustainable livelihoods
              options.
            </p>
          </div>
        </div>
      </Tab>
      <Tab name="Objective">
        <div class="content">
          <div>
            <img src="../../assets/innovate.jpg" alt="" />
          </div>
          <div>
            <p>
              Based on national and global challenges, TEST must design new
              models that are effective in poverty reduction for indigenous
              peoples in line with Sustainable Development Goals targets.
            </p>
          </div>
        </div>
      </Tab>
      <Tab name="Plan">
        <div class="content">
          <div>
            <img src="../../assets/learning.png" alt="" />
          </div>
          <div>
            <p>
              TEST will design and host an annual Livelihoods Accelerator
              Fellowship (LAF) Programme bringing together academic and research
              institutions, think tanks and private organizations to work with
              the local communities to find the solution to an identified social
              problem in water supply, health services, waste management, income
              generation or village settlement designs.
            </p>
            <p>
              We invite interested groups or individuals that wish to practice
              their internship, retreat and pilot their models to poverty
              reduction to <strong><a href="/volunteer">apply</a></strong> to
              participate.
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
    width: 100% !important;
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

.volunteer__links {
  a {
    button {
      border: none;
      background: var(--primary-color);
      border-radius: 3px;
      height: 40px;
      letter-spacing: 1px;
      color: #fff;
      box-shadow: inset 0 -0.6em 1em -0.35em rgba(0, 0, 0, 0.17),
        inset 0 0.6em 2em -0.3em rgba(255, 255, 255, 0.15),
        inset 0 0 0em 0.05em rgba(255, 255, 255, 0.12);
      text-align: center;
      cursor: pointer;
      margin-right: 2rem;

      &:hover {
        background: #b18c26;
        transition: 0.5s ease;
      }
    }
  }
}

.appromixation {
  color: var(--primary-color);
  font-weight: bold;
  background-color: #fbfbfb;
  font-size: 2rem !important;
  padding: 1rem 4rem !important;

  strong {
    font-size: 2rem !important;
    font-size: 2rem !important;
  }
}

#app {
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
      font-size: 1.8rem !important;
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
}
</style>
