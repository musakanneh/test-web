<template>
  <body>
    <section class="partnership">
      <div>
        <h1>Parternship</h1>
        <hr />
        <br />
        <p>
          Partnerships are necessary to speed the achievement of our vision and
          to achieve SDGs and Aichi Targets for Convection on Biological
          Diversity (CBD). National and global partnerships have to be forged to
          fasten the inclusion of IPLCs in conservation initiatives to enhance
          livelihoods, ecosystem resilience, and positive human relations.
        </p>
        <br />
        <p>
          It is necessary to restore indigenous confidence and knowledge in
          ecological governance about rangelands’ management. We need all
          stakeholders on biodiversity conservation to commit positive action
          through their ecological management capabilities. Through
          partnerships, we will restore the use of indigenous science and build
          communities of practice to synergize a positive impact on ecosystems,
          people and wildlife in Tanzania.
        </p>
      </div>
    </section>

    <main>
      <article>
        <div>
          <img src="../assets/stats3.png" alt="" />
        </div>
      </article>
      <div class="partnership-sec">
        <div class="offers-cover-sec-1">
          <aside>
            <img src="../assets/icon3.png" alt="" />
            <h2>
              TEST strongly believes that being an indigenous organization,
              conservation and development have to attained simultaneously
            </h2>
          </aside>
        </div>
      </div>
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
  .partnership {
    width: 100%;
    background-image: linear-gradient(rgba(0, 0, 0, 0.96), rgba(0, 0, 0, 0.712)),
      url("../assets/ladies.jpeg");
    opacity: 1;
    background-repeat: no-repeat;
    background-attachment: fixed;
    background-size: cover;
    padding: 5% 0;

    hr {
      width: 5%;
    }

    p {
      color: #fbfbfbe5;
      width: 65%;
      font-size: 14px;
      margin: auto;
      font-weight: normal;
      font-style: normal;
      text-align: center;
    }

    h1 {
      text-align: center;
    }
  }

  span {
    color: #c98811;
  }

  article {
    width: 100%;
    text-align: center;

    img {
      width: 100%;
    }
  }

  main {
    .partnership-sec {
      justify-content: space-between;
      flex: auto;
      display: flex;
      margin-top: -7px;
      width: 100%;
      display: flex !important;
      background-image: linear-gradient(
          rgba(0, 0, 0, 0.7),
          rgba(0, 0, 0, 0.712)
        ),
        url("../assets/cow2.jpeg");
      opacity: 1;
      background-attachment: fixed;
      background-repeat: no-repeat;
      background-size: cover;

      aside {
        width: 100%;
        text-align: center;
        padding: 10% 0;

        h2 {
          color: #fff;
          padding: 5% 0;
          margin: auto;
          line-height: 2;
          text-align: center;
        }
      }

      .offers-cover-sec-1 {
        width: 50%;
        margin: auto;
      }
    }
  }
}
</style>
