<template>
  <header>
    <aside>
      <div class="container">
        <div class="container__">
          <div class="contact__info">
            <p><abbr title="Phone">Tel:</abbr> (255) 786 744 663<br /></p>
            <p>|</p>
            <p>
              <a href="mailto:#">
                <abbr title="Phone">Email:</abbr> info@test.or.tz</a
              >
            </p>
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
          <div class="dropdown">
            <button class="dropbtn">
              MEDIA ITEMS <i class="fas fa-caret-down"></i>
            </button>
            <div class="dropdown-content">
              <a href="/reports">REPORTS</a>
              <a href="/gallery">GALLERY</a>
              <a href="/videos">VIDEOS</a>
              <a href="/blog">BLOG</a>
            </div>
          </div>
        </ul>
      </nav>
      <div class="btn-cover">
        <a href="/news"
          ><Button :isFullWidth="false" label="NEWS" width="120px"> </Button
        ></a>
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

  // Navbar dropdown menus
  .dropbtn {
    color: #262626;
    padding: 16px;
    font-size: 16px;
    border: none;

    i {
      color: #bf8f00;
    }
  }

  .dropdown {
    position: relative;
    display: inline-block;
  }

  .dropdown-content {
    display: none;
    position: absolute;
    background-color: #f1f1f1;
    min-width: 140px;
    box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
    z-index: 1;
  }

  .dropdown-content a {
    color: black;
    padding: 12px 16px;
    text-decoration: none;
    display: block;
  }

  .dropdown-content a:hover {
    background-color: #ddd;
  }

  .dropdown:hover .dropdown-content {
    display: block;
  }

  .dropdown:hover .dropbtn {
    // background-color: #3e8e41;
  }

  // Navbar dropdown menus

  aside {
    background: #bf8f00;

    .container__ {
      display: flex;
      justify-content: space-between;
    }

    .contact__info {
      display: flex;

      p,
      a {
        color: #fff;
        padding-right: 17px;
        font-weight: 500;
        font-size: 13px;
        color: #fff;
        font-weight: bold;
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
    width: 70%;
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

      &:hover {
        color: #bf8f00;
        transition: all 0.25s;
      }
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
