<template>
  <header>
    <aside>
      <div class="container">
        <div class="container__">
          <div class="contact__info">
            <p>Call Us: +255-786-744-668</p>
            <p>|</p>
            <p>Email Us: info@test.org</p>
          </div>
          <div class="social-medias">
            <a href="#"> <i class="fab fa-facebook"></i></a>
            <a href=""> <i class="fab fa-instagram"></i></a>
            <a href="#"> <i class="fab fa-linkedin"></i></a>
            <a href="#"> <i class="fab fa-twitter"></i></a>
          </div>
        </div>
      </div>
    </aside>

    <main class="container">
      <div class="logo">
        <a href="/"><img src="../assets/logo.jpeg" alt=""/></a>
      </div>
      <nav class="nav-cover">
        <ul>
          <li>
            <i class="fas fa-home"></i>
            <a href="/">HOME</a>
          </li>
          <li>
            <a href="/about">ABOUT TEST</a>
          </li>
          <li>
            <a href="/work">OUR WORK</a>
          </li>
          <li>
            <a href="/approach">OUR APPROACH</a>
          </li>
          <li>
            <a href="/approach">MEDIA ITEMS</a>
          </li>
          <li>
            <a href="/approach">CONTACT US</a>
          </li>
        </ul>
      </nav>
      <div class="btn-cover">
        <router-link class="nav-button" to="/news"
          ><Button :isFullWidth="false" label="NEWS" width="120px"> </Button
        ></router-link>
      </div>
    </main>
  </header>
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
@media only screen and (max-width: 600px) {
  header {
    display: none;
  }
}
header {
  background-color: #f9f9f9;
  position: fixed;
  width: 100%;
  height: 11.75rem;
  z-index: 1;
  -webkit-box-shadow: 0px 2px 15px -12px rgba(0, 0, 0, 0.57);
  -moz-box-shadow: 0px 2px 15px -12px rgba(0, 0, 0, 0.57);
  box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.57);

  aside {
    background: #bf8f00;

    .container__ {
      display: flex;
      justify-content: space-between;
    }

    .contact__info {
      display: flex;

      p {
        color: #fff;
        padding-right: 17px;
        font-weight: 500;
        font-size: 13px;
        color: #fff;
        margin: 1rem 0;
      }
    }
    .social-medias {
      margin: 1rem 0;
      i {
        padding: 0 1rem;
        color: #fff;
      }
    }
  }

  .logo {
    width: 13%;
    img {
      width: 80%;
      margin: 1.5rem 0;
    }
  }
  .nav-cover,
  .btn-cover {
    padding-top: 18px;
  }
}
main {
  display: flex;
  flex: auto;
}
.link {
  &::before {
    padding-right: 0;
    display: none;
  }
}
nav {
  width: 100%;

  ul {
    list-style: none;
    width: 80%;
    padding: 0;
    margin: auto;

    li,
    li a {
      font-size: 13px;
      font-weight: bold;
      z-index: 1;
      color: #262626;
      cursor: pointer;
      transition: 200ms;
      letter-spacing: 1px;
      text-decoration: none;
      transition: all 0.25s;

      // &:hover {
      //   border-bottom: 1px solid #689d1a;
      //   color: #689d1a;
      //   transition: all 0.25s;
      // }
    }
  }
}
nav {
  --menu-height: 40px;
  opacity: 0.8;
  > ul {
    display: flex;
    height: var(--menu-height);
    align-items: center;
    justify-content: space-between;
    li {
      position: relative;
      &:hover {
        > ul {
          opacity: 1;
          z-index: 1;
          visibility: visible;
          transition-delay: 0ms;
        }
      }
    }
  }
}
</style>
