<template>
  <body>
    <br /><br /><br />
    <Caption captions="Yannick Ndoinyo"></Caption>

    <main>
      <aside>
        <img class="logo" src="../assets/yannick.png" alt="" />
        <div class="social-medias">
          <a href=""> <i class="fab fa-facebook"></i></a>
          <i class="fab fa-instagram"></i>
          <a href=""> <i class="fab fa-linkedin"></i></a>
          <a href=""> <i class="fab fa-twitter"></i></a>
        </div>
      </aside>

      <article>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
          gravida tempus porttitor. Aenean eu sapien neque. Curabitur facilisis
          suscipit tortor, vel commodo augue iaculis nec. Nunc porttitor in nisi
          venenatis tempor. Phasellus imperdiet aliquet purus, quis maximus quam
          rutrum eu. Quisque lorem mi, gravida egestas elementum volutpat,
          posuere in leo. Praesent porttitor nulla lacus, sed feugiat tellus
          accumsan et. Morbi non pretium diam. Proin vel felis maximus, interdum
          neque ac, ornare odio. Morbi et enim vitae est accumsan ornare eu
          ornare sapien.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
          gravida tempus porttitor. Aenean eu sapien neque. Curabitur facilisis
          suscipit tortor, vel commodo augue iaculis nec. Nunc porttitor in nisi
          venenatis tempor. Phasellus imperdiet aliquet purus, quis maximus quam
          rutrum eu. Quisque lorem mi, gravida egestas elementum volutpat,
          posuere in leo. Praesent porttitor nulla lacus, sed feugiat tellus
          accumsan et. Morbi non pretium diam. Proin vel felis maximus, interdum
          neque ac, ornare odio. Morbi et enim vitae est accumsan ornare eu
          ornare sapien.
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
      width: 87%;
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
    margin-left: 3rem;
    line-height: 18px;
    color: #ffffff;
  }
  button:hover {
    background: #c98811;
    transition: 0.5s ease;
  }
}
</style>
