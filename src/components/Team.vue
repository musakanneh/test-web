<template>
  <body>
    <main>
      <h1>Meet The Team</h1>
      <section>
        <div>
          <img src="../assets/yannick.png" alt="" />
          <h3>
            Yannick Ndoinyo
          </h3>
          <p>
            Executive Director
          </p>
          <router-link to="/yannick"
            ><Button
              :isFullWidth="false"
              label="Read more"
              width="150px"
            ></Button
          ></router-link>
        </div>
        <div>
          <img src="../assets/evelyn.png" alt="" />
          <h3>
            Evelyn Kaney
          </h3>
          <p>
            Financial Manager
          </p>
          <router-link to="/evelyn"
            ><Button
              :isFullWidth="false"
              label="Explore more"
              width="150px"
            ></Button
          ></router-link>
        </div>

        <div>
          <img src="../assets/marco.png" alt="" />
          <h3>
            Marco Mathayo
          </h3>
          <p>
            Programs Manager
          </p>
          <router-link to="/marco"
            ><Button
              :isFullWidth="false"
              label="Explore more"
              width="150px"
            ></Button
          ></router-link>
        </div>
      </section>
    </main>
  </body>
</template>

<script>
import Button from "@/components/Button.vue";
export default {
  components: {
    Button,
  },
};
</script>

<style lang="scss" scoped>
body {
  main {
    position: relative;
    width: 90%;
    margin: auto;
    background-repeat: no-repeat;
    background-size: cover;
    object-fit: cover;
    margin-bottom: 5%;

    img {
      width: 100%;
    }
    section {
      justify-content: space-between;
      width: 90%;
      display: flex;
      margin: auto;
      h2 {
        font-size: 14px;
      }
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
