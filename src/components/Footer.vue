<template>
  <footer>
    <main class="container">
      <div class="row">
        <div class="col-xs-6 col-md-3">
          <div class="footer-nav-items">
            <h3>Quick Links</h3>
            <hr />
            <br />
            <a href="/about" class="tba">About Us</a><br />
            <a href="/work" class="tba">Our Work</a><br />
            <a href="/about" class="tba">Our Team</a><br />
          </div>
        </div>
        <div class="col-xs-6 col-md-3">
          <div class="footer-nav-items">
            <address>
              <h3>Contact Us</h3>
              <hr />
              <br />
              PO Box 2268, Arusha<br />
              Tanzania<br />
              <abbr title="Phone">Tel:</abbr> (255) 786 744 663<br />
              <a href="mailto:#">
                <abbr title="Phone">Email:</abbr>info@test.or.tz</a
              >
            </address>
          </div>
        </div>
        <div class="col-xs-6 col-md-3">
          <div class="footer-nav-items">
            <h3>Support our Projects</h3>
            <hr />
            <br />
            <a href="/" class="tba">Donate</a><br />
            <a href="/volunteer" class="tba">Volunteer With Us</a><br />
          </div>
        </div>
        <div class="col-xs-6 col-md-3">
          <div class="contact-sec">
            <h3>Follow Us</h3>
            <hr />
            <br />
            <div class="social-medias">
              <a href="www.facebook.com/ecosystemssurvival">
                <i class="fab fa-facebook"></i
              ></a>
              <a href="www.instagram.com/ecosystemssurvival">
                <i class="fab fa-instagram"></i
              ></a>
              <a href="https://www.linkedin.com/ecosystemssurvival ">
                <i class="fab fa-linkedin"></i
              ></a>
              <a href="www.twitter.com/testecosystems">
                <i class="fab fa-twitter"></i
              ></a>
            </div>
          </div>
        </div>
      </div>
    </main>
    <section class="trademark container">
      <p>TEST © 2021 | All Rights Reserved.</p>
    </section>
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
    width: 100% !important;
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
  padding: 4% 0;
  background-color: #1d1b1bf3;

  address {
    color: #fff;
  }

  main {
    h3 {
      color: #bf8f00;
      font-weight: 600;
    }
  }

  hr {
    width: 25%;
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
  }

  a {
    text-decoration: none;
    color: #fff;
    cursor: pointer;
  }

  .trademark {
    p {
      text-align: center;
      padding-top: 4rem;
    }
  }
}
</style>
