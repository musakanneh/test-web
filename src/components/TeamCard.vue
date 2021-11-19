<template>
  <body>
    <div class="team-and-boardmembers__cover">
      <main class="container">
        <div>
          <h1>BOARD</h1>
          <section>
            <div>
              <img src="../assets/leb.png" alt="" />
              <TeamTag name="Dr. Lekumok Kironyi" position="Chairman" />
              <router-link to="/lekumok"> <p>Profile</p></router-link>
            </div>
            <div>
              <img src="../assets/lilian.png" alt="" />
              <TeamTag name="Lilian Looloitai" position="Treasurer" />
              <router-link to="/lilian"> <p>Profile</p></router-link>
            </div>
            <div>
              <img src="../assets/jop.png" alt="" />
              <TeamTag name="Jopha Peter Kakanyi" position="Member" />
              <router-link to="/jopha"> <p>Profile</p></router-link>
            </div>
            <div>
              <img src="../assets/melubo.png" alt="" />
              <TeamTag name="Emanuel Melubo" position="Member" />
              <router-link to="/emanuel"> <p>Profile</p></router-link>
            </div>
          </section>
        </div>
      </main>

      <h1>OUR TEAM</h1>
      <section class="team-member_section container">
        <div>
          <img src="../assets/marco.jpeg" alt="" />
          <TeamTag name="Elias Nagol" position="Technical Advisor" />
          <router-link to="/elias"> <p>Profile</p></router-link>
        </div>
        <div>
          <img src="../assets/evel.png" alt="" />
          <TeamTag name="Evelyn Kaney" position="Financial Manager" />
          <router-link to="/evelyn"> <p>Profile</p></router-link>
        </div>

        <div>
          <img src="../assets/marco.jpeg" alt="" />
          <TeamTag
            name="Isaac Ouma"
            position="Conservation Enterprise Manager"
          />
          <router-link to="/isaac"> <p>Profile</p></router-link>
        </div>
        <div>
          <img src="../assets/marco.jpeg" alt="" />
          <TeamTag name="Marco Mathayo" position="Programs Manager" />
          <router-link to="/marco"> <p>Profile</p></router-link>
        </div>
        <div>
          <img src="../assets/yannick.png" alt="" />
          <TeamTag name="Yannick Ndoinyo" position="Executive Director" />
          <router-link to="/yannick"> <p>Profile</p></router-link>
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
  padding: 1rem 0 0 0;

  .team-and-boardmembers__cover {
    background: #ddd;
    width: 100%;
    height: 100%;
    padding: 2rem 0 4rem 0;

    h1 {
      font-size: 1.5rem;
      color: #303030 !important;
      padding: 2rem 0;
      text-align: center;
    }
  }

  .team-member_section {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;

    div {
      p {
        text-align: center;
      }
    }

    img {
      width: 80%;
      margin: 0 1.25rem;
      border-radius: 50rem;
      border: 1px solid #707070;
    }
  }

  main {
    position: relative;
    padding: 3px 50px;
    height: 100%;

    img {
      width: 70%;
      border-radius: 50rem;
      border: 1px solid #707070;
    }

    h1 {
      font-size: 1.5rem;
      padding: 2rem 0;
      text-align: center;
    }

    section {
      justify-content: space-between;
      width: 100%;
      display: grid;
      grid-template-columns: 1fr 1fr 1fr 1fr;

      h3 {
        margin: 0;
      }

      div {
        text-align: center;

        p {
          font-size: 14px;
          width: 80%;
          padding: 0.5rem 0;
          margin: auto;
        }

        a {
          text-decoration: none;
          font-size: 12px;
        }
      }
    }
  }
}
</style>
