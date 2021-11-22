<template>
  <footer>
    <main class="container">
      <div class="footer-nav-items">
        <h3>Quick Links</h3>
        <hr />
        <br />
        <a href="/about" class="tba">About Us</a><br />
        <a href="/work" class="tba">Our Work</a><br />
        <a href="/about" class="tba">Our Team</a><br />
      </div>

      <div class="footer-nav-items">
        <h3>Contact Us</h3>
        <hr />
        <br />
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
        <br />
        <a href="/" class="tba">Donete</a><br />
        <a href="/" class="tba">Volunteer With Us</a><br />
      </div>

      <div class="contact-sec">
        <h3>Follow Us</h3>
        <hr />
        <br />
        <div class="social-medias">
          <a href="#"> <i class="fab fa-facebook"></i></a>
          <a href=""> <i class="fab fa-instagram"></i></a>
          <a href="#"> <i class="fab fa-linkedin"></i></a>
          <a href="#"> <i class="fab fa-twitter"></i></a>
        </div>
      </div>
    </main>
    <p>TEST © 2021 | All Rights Reserved.</p>
  </footer>
</template>

<script>
export default {
  components: {},
};
</script>

<style lang="scss" scoped>
@media only screen and (max-width: 900px) {
  * {
    width: 100% !important;
  }

  h3 {
    padding: 1.5rem 0 0.8rem 0;
  }

  hr {
    width: 15% !important;
    align-items: center !important;
  }

  main {
    width: 85% !important;
    margin: auto !important;
    display: block !important;

    .social-medias {
      display: flex !important;
      padding: 1rem 0 2rem 0;
    }

    .footer-nav-items img {
      width: 12px !important;
    }

    .footer-nav-items br {
      display: block !important;
    }

    br {
      display: none !important;
    }

    .footer-nav-items .payment {
      width: 20% !important;
    }

    img {
      width: 10% !important;
    }
  }
}

footer {
  bottom: 0;
  // width: 100%;
  padding: 4% 0;
  background-color: #1d1b1bf3;

  main {
    display: flex;
    justify-content: space-between;

    h3 {
      color: #bf8f00;
      font-weight: 600;
    }
  }

  // .payment {
  //   width: 25%;
  //   border: 1px solid red !important;
  // }

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
    margin-top: 4rem;
  }

  a {
    text-decoration: none;
    color: #fff;
    cursor: pointer;
  }
}
</style>
