<template>
  <body>
    <main>
      <h1>The Team</h1>
      <hr />
      <section>
        <div>
          <img src="../assets/name.png" alt="" />
          <h3>
            Yannick Ndoinyo
          </h3>
          <p>
            Executive Director
          </p>
        </div>

        <div>
          <img src="../assets/name.png" alt="" />
          <h3>
            Mark Mathayo
          </h3>
          <p>
            Programs Manager
          </p>
        </div>
        <div>
          <img src="../assets/name.png" alt="" />
          <h3>
            Isaac Ouma
          </h3>
          <p>
            Conservation Officer
          </p>
        </div>
      </section>
    </main>
  </body>
</template>

<script>
export default {
  components: {},
};
</script>

<style lang="scss" scoped>
body {
  background-repeat: no-repeat;
  background-attachment: fixed;
  margin: auto;
  position: center;
  background-size: cover;
  z-index: 1;
  text-align: center;

  hr {
    width: 10%;
    border: 1px solid #303030;
  }

  main {
    position: relative;
    top: 10vh;
    width: 90%;
    border-radius: 10px 10px 0 0;
    margin: auto;
    background-repeat: no-repeat;
    background-size: cover;
    object-fit: cover;
    margin-bottom: 10%;

    img {
      width: 100%;
    }
    section {
      justify-content: space-between;
      width: 90%;
      padding-top: 40px;
      display: flex;
      margin: auto;
      h2 {
        font-size: 14px;
        padding: 10px;
      }
      div {
        text-align: center;
        p {
          font-size: 12px;
          width: 80%;
          line-height: 20px;
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
