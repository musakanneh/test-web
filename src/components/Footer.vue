<template>
  <footer>
    <main>
      <div class="footer-nav-items">
        <h3>Quick Links</h3>
        <hr />
        <a href="/" class="tba">Back to Top</a><br />
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
        ><br />
        <br /><br /><br />
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
        <Contact />
        <br />

        <div class="social-medias">
          <h3>Follow Us:</h3>
          <a href="#"> <i class="fab fa-facebook"></i></a>
          <a href=""> <i class="fab fa-instagram"></i></a>
          <a href="#"> <i class="fab fa-linkedin"></i></a>
          <a href="#"> <i class="fab fa-twitter"></i></a>
        </div>
      </div>
    </main>
    <p>TEST © 2020 | All Rights Reserved.</p>
    <br /><br />
  </footer>
</template>

<script>
import Contact from "@/components/Contact.vue";
export default {
  components: {
    Contact,
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
  padding-top: 4%;
  background-color: #000000;
  width: 100%;

  .contact-sec {
    width: 35%;
  }

  main {
    display: flex;
    justify-content: space-between;
    flex: auto;
    flex-direction: row;
    margin: auto;
    width: 90%;

    h3 {
      color: #c98811;
      font-size: 16px;
      transition: 200ms;
      text-decoration: none;
      white-space: nowrap;
      font-weight: 600;
    }
  }
  .social-medias {
    width: 70%;
    float: left;

    i {
      cursor: pointer;
      font-size: 25px;
      margin-right: 25px;
      color: #fff;
    }

    i:hover {
      color: #c98811;
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
    text-align: center;
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
