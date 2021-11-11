<template>
  <footer>
    <main class="container">
      <div class="footer-nav-items">
        <h3>Quick Links</h3>
        <hr />
        <a href="/" class="tba">Our Services</a><br />
        <a href="/" class="tba">Our Work</a><br />
      </div>

      <div class="footer-nav-items">
        <h3>Contact Us</h3>
        <hr />
        <a href="/">
          <img class="img-icon" src="../assets/msg.png" alt="" />
          IGTS@demosite.com</a
        ><br />
        <a href="/"
          ><img src="../assets/location.png" alt="" /> Arusha, Nothern
          Tanzania</a
        >
      </div>

      <div class="footer-nav-items">
        <h3>Support our Projects</h3>
        <hr />
        <img src="../assets/momo.png" alt="" />
        <img src="../assets/tigo.png" alt="" />
        <img src="../assets/visa.png" alt="" /><br />
        <img src="../assets/master-card.png" alt="" />
      </div>

      <div class="contact-sec">
        <h3>Follow Us:</h3>
        <div class="social-medias">
          <a href="#"> <i class="fab fa-facebook"></i></a>
          <a href=""> <i class="fab fa-instagram"></i></a>
          <a href="#"> <i class="fab fa-linkedin"></i></a>
          <a href="#"> <i class="fab fa-twitter"></i></a>
        </div>
      </div>
    </main>
    <p>TEST © 2020 | All Rights Reserved.</p>
  </footer>
</template>

<script>
// import Contact from "@/components/Contact.vue";
export default {
  components: {
    // Contact,
  },
};
</script>

<style lang="scss" scoped>
@media only screen and (max-width: 900px) {
  main {
    border: 1px solid #c98811;
    display: flex;
    flex-direction: column !important;
  }
}
footer {
  bottom: 0;
  width: 100%;
  padding: 4% 0;
  background-color: #303030;

  main {
    display: flex;
    justify-content: space-between;

    h3 {
      color: #689d1a;
      font-size: 16px;
      transition: 200ms;
      text-decoration: none;
      white-space: nowrap;
      font-weight: 600;
    }
  }

  hr {
    width: 40%;
    margin: 0;
  }

  .social-medias {
    i {
      cursor: pointer;
      font-size: 25px;
      margin-right: 25px;
      color: #ddd;
    }

    i:hover {
      color: #689d1a;
      transition: 0.5s ease;
    }
  }

  p {
    color: #fff;
    text-align: center;
    margin-top: 2%;
    font-size: 12px;
  }

  a {
    line-height: 2;
    text-decoration: none;
    font-size: 13px;
    z-index: 1;
    color: #fff;
    cursor: pointer;
    transition: 200ms;
    text-decoration: none;
  }
}
</style>
