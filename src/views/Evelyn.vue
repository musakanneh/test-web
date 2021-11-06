<template>
  <body>
    <Caption captions="Evelyn Kaney"></Caption>

    <main>
      <aside>
        <img class="logo" src="../assets/evelyn.png" alt="" />
        <div class="social-medias">
          <a href=""> <i class="fab fa-facebook"></i></a>
          <i class="fab fa-instagram"></i>
          <a href=""> <i class="fab fa-linkedin"></i></a>
          <a href=""> <i class="fab fa-twitter"></i></a>
        </div>
      </aside>

      <article>
        <p>
          Evelyn hails from the Ilparakuyo Maasai community. The Ilparakuyo, a
          Maasai community live in the Southern Highlands Regions of Mbeya and
          Iringa, Coastal, Central and Eastern Regions of Tanzania. She has a
          both BA (Accounting) from Concordia College in Moorhead, Minnesota
          U.S.A and MBA from the University of Mary in Fargo, North Dakota
          U.S.A. Although she studied finance in throughout her career, she has
          been involved in community development initiatives since 2010. As a
          supporter for community development, she addressed the challenges that
          hinder sustainable livestock production.
        </p>
        <p>
          In her community key livestock production challenges include lack of
          knowledge due to inadequate extension services focusing on sustainable
          livestock production through integration and intensification systems,
          in consistency of availability of natural pastures all year-round,
          water shortages for animals and human-being, low production potential
          of livestock, tick-borne disease due to lack of dip tank/spray race
          and limited livestock extension services, informal and distant
          livestock market and formal market for milk produce.
        </p>

        <br />

        <button>Download Full CV <i class="fa fa-download"> </i></button>
      </article>
    </main>
  </body>
</template>

<script>
import Caption from "../components/Caption";
export default {
  components: {
    Caption,
  },
};
</script>

<style lang="scss" scoped>
@media only screen and (max-width: 600px) {
  * {
    display: flex;
    margin: auto !important;
    flex-direction: column !important;
  }
}
img {
  width: 100%;
  border-radius: 5px;
}
body {
  width: 100%;
  padding-bottom: 5%;
  background-color: #fbfbfb;
  a {
    text-decoration: none;
    color: #c98811;
    &:hover {
      text-decoration: underline;
    }
  }
  main {
    width: 90%;
    margin: auto;
    display: flex;
    flex-direction: row;
    flex: auto;
  }
  aside {
    flex: 1;
  }
  article {
    flex: 2;
    p {
      color: #303030;
      width: 80%;
      margin: auto;
      font-size: 14px;
      line-height: 24px;
    }
  }
  .social-medias {
    display: flex;
    justify-content: space-between;
    width: 40%;
    margin: auto;
    i {
      cursor: pointer;
      font-size: 24px;
      color: #c98811;
    }
    i:hover {
      color: #c98811;
    }
  }
  button {
    cursor: pointer;
    height: 40px;
    background: #c98811;
    border-radius: 3px;
    border: none;
    padding: 0 25px;
    font-size: 15px;
    margin-left: 4.6rem;
    line-height: 18px;
    color: #ffffff;
  }
  button:hover {
    background: #5c9607;
    transition: 0.5s ease;
  }
}
</style>
