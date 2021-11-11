<template>
  <body>
    <main class="container">
      <div>
        <h1>BOARD</h1>
        <section>
          <div>
            <img src="../assets/marco.jpeg" alt="" />
            <TeamTag name="Dr. Lekumok Kironyi" position="Chairman" />
            <router-link to="/evelyn"> <p>Profile</p></router-link>
          </div>
          <div>
            <img src="../assets/marco.jpeg" alt="" />
            <TeamTag name="Lilian Looloitai" position="Treasurer" />
            <router-link to="/evelyn"> <p>Profile</p></router-link>
          </div>

          <div>
            <img src="../assets/marco.jpeg" alt="" />
            <TeamTag name="Jopha Peter Kakanyio" position="Member" />
            <router-link to="/evelyn"> <p>Profile</p></router-link>
          </div>
          <div>
            <img src="../assets/marco.jpeg" alt="" />
            <TeamTag name="Emanuel Melubo" position="Member" />
            <router-link to="/evelyn"> <p>Profile</p></router-link>
          </div>
        </section>
      </div>
      <br />

      <h1>OUR TEAM</h1>
      <section>
        <div>
          <img src="../assets/marco.jpeg" alt="" />
          <TeamTag name="Yannick Ndoinyo" position="Executive Director" />
          <router-link to="/evelyn"> <p>Profile</p></router-link>
        </div>
        <div>
          <img src="../assets/marco.jpeg" alt="" />
          <TeamTag name="Elias Nagol" position="Technical Advisor" />
          <router-link to="/evelyn"> <p>Profile</p></router-link>
        </div>
        <div>
          <img src="../assets/marco.jpeg" alt="" />
          <TeamTag name="Evelyn Kaney" position="Financial Manager" />
          <router-link to="/evelyn"> <p>Profile</p></router-link>
        </div>

        <div>
          <img src="../assets/marco.jpeg" alt="" />
          <TeamTag
            name="Isaac Ouma"
            position="Conservation Enterprise Manager"
          />
          <router-link to="/evelyn"> <p>Profile</p></router-link>
        </div>
        <div>
          <img src="../assets/marco.jpeg" alt="" />
          <TeamTag name="Marco Mathayo" position="Programs Manager" />
          <router-link to="/evelyn"> <p>Profile</p></router-link>
        </div>
      </section>

      <h1>PARTNERS</h1>
      <section>
        <div>
          <img src="../assets/marco.jpeg" alt="" />
        </div>
        <div>
          <img src="../assets/marco.jpeg" alt="" />
        </div>
        <div>
          <img src="../assets/marco.jpeg" alt="" />
        </div>
        <div>
          <img src="../assets/marco.jpeg" alt="" />
        </div>
      </section>
    </main>
  </body>
</template>

<script>
import TeamTag from "@/components/TeamTag.vue";
export default {
  components: {
    TeamTag,
  },
};
</script>

<style lang="scss" scoped>
body {
  padding: 1rem 0 5rem 0;

  main {
    position: relative;
    padding: 3px 50px;
    height: 100%;

    img {
      width: 70%;
      border-radius: 50rem;
    }

    h1 {
      font-size: 1.5rem;
      color: #303030;
      padding: 2rem 0;
      text-align: center;
    }

    section {
      justify-content: space-between;
      width: 100%;
      display: grid;
      // border: 1px solid rgba(221, 221, 221, 0.226);
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
