<template>
  <body>
    <div class="team-and-boardmembers__cover">
      <main class="container">
        <h1>BOARD</h1>
        <div class="row">
          <div class="col-xs-6 col-md-3">
            <div>
              <img src="../assets/leb.png" alt="" />
              <TeamTag name="Dr. Lekumok Kironyi" position="Chairman" />
              <router-link to="/lekumok"> <p>Profile</p></router-link>
            </div>
          </div>
          <div class="col-xs-6 col-md-3">
            <div>
              <img src="../assets/lilian.png" alt="" />
              <TeamTag name="Lilian Looloitai" position="Treasurer" />
              <router-link to="/lilian"> <p>Profile</p></router-link>
            </div>
          </div>
          <div class="col-xs-6 col-md-3">
            <div>
              <img src="../assets/jop.png" alt="" />
              <TeamTag name="Jopha Peter Kakanyi" position="Member" />
              <router-link to="/jopha"> <p>Profile</p></router-link>
            </div>
          </div>
          <div class="col-xs-6 col-md-3">
            <div>
              <img src="../assets/melubo.png" alt="" />
              <TeamTag name="Emanuel Melubo" position="Member" />
              <router-link to="/emanuel"> <p>Profile</p></router-link>
            </div>
          </div>
        </div>
      </main>

      <h1>OUR TEAM</h1>
      <section class="team-member_section container">
        <div class="row">
          <div class="col-xs-6 col-md-3">
            <div>
              <img src="../assets/marco.jpeg" alt="" />
              <TeamTag name="Elias Nagol" position="Technical Advisor" />
              <router-link to="/elias"> <p>Profile</p></router-link>
            </div>
          </div>
          <div class="col-xs-6 col-md-3">
            <div>
              <img src="../assets/evel.png" alt="" />
              <TeamTag name="Evelyn Kaney" position="Financial Manager" />
              <router-link to="/evelyn"> <p>Profile</p></router-link>
            </div>
          </div>
          <div class="col-xs-6 col-md-3">
            <div>
              <img src="../assets/marco.jpeg" alt="" />
              <TeamTag
                name="Isaac Ouma"
                position="Conservation Enterprise Manager"
              />
              <router-link to="/isaac"> <p>Profile</p></router-link>
            </div>
          </div>
          <div class="col-xs-6 col-md-3">
            <div>
              <img src="../assets/marco.jpeg" alt="" />
              <TeamTag name="Marco Mathayo" position="Programs Manager" />
              <router-link to="/marco"> <p>Profile</p></router-link>
            </div>
          </div>
          <div class="col-xs-6 col-md-3">
            <img src="../assets/yannick.png" alt="" />
            <div>
              <TeamTag name="Yannick Ndoinyo" position="Executive Director" />
              <router-link to="/yannick"> <p>Profile</p></router-link>
            </div>
          </div>
        </div>
      </section>
    </div>
    <PartnerCard />
  </body>
</template>

<script>
import PartnerCard from "@/components/PartnerCard.vue";
import TeamTag from "@/components/TeamTag.vue";
export default {
  components: {
    TeamTag,
    PartnerCard,
  },
};
</script>

<style lang="scss" scoped>
body {
  .team-and-boardmembers__cover {
    background: #ddd;
    width: 100%;
    height: 100%;
    padding: 2rem 0 4rem 0;
  }

  h1 {
    font-size: 3rem !important;
    padding: 6rem 0 4rem 0;
    width: 100%;
    margin: 0;
    text-align: center;
  }

  .team-member_section {
    img {
      width: 70%;
      margin-left: 15%;
      border-radius: 50rem;
    }
  }

  main {
    img {
      width: 70%;
      border-radius: 50rem;
      margin-left: 15%;
    }
  }
}
</style>
