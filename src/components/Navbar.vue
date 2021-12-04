<template>
  <header>
    <aside>
      <div class="container">
        <div class="container__">
          <div class="contact__info">
            <p>
              <span title="Phone">Tel:</span> +255 752 773 890, +255 786 744 663
              <br />
            </p>
            <p>|</p>
            <p>
              <a href="mailto:info@nyanda.org">
                <span title="Phone">Email:</span> info@nyanda.org</a
              >
            </p>
          </div>
          <div class="social-medias">
            <a href="https://facebook.com/ecosystemssurvival" target='"_blank"'>
              <i class="fab fa-facebook"></i
            ></a>
            <a
              href="http://www.instagram.com/ecosystemssurvival"
              target='"_blank"'
            >
              <i class="fab fa-instagram"></i
            ></a>
            <a
              href="https://www.linkedin.com/company/ecosystemssurvival/"
              target='"_blank"'
            >
              <i class="fab fa-linkedin"></i
            ></a>
            <a href="http://www.twitter.com/testecosystems" target='"_blank"'>
              <i class="fab fa-twitter"></i
            ></a>
          </div>
        </div>
      </div>
    </aside>

    <main class="container">
      <div class="logo">
        <a href="/"><img src="../assets/new_logo.png" alt="" /></a>
      </div>
      <nav class="nav-cover">
        <ul>
          <li>
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
            <a href="/projects">PROJECTS</a>
          </li>
          <div class="dropdown">
            <li class="dropbtn">
              MEDIA CENTER <i class="fas fa-caret-down"></i>
            </li>
            <div class="dropdown-content">
              <a href="/documents">DOCUMENTS</a>
              <a href="/gallery">GALLERY</a>
              <a href="/videos">VIDEOS</a>
            </div>
          </div>
        </ul>
      </nav>
    </main>
  </header>
</template>

<script>
export default {
  components: {},
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
  z-index: 1;
  -webkit-box-shadow: 0px 2px 15px -12px rgba(0, 0, 0, 0.57);
  -moz-box-shadow: 0px 2px 15px -12px rgba(0, 0, 0, 0.57);
  box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.57);

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

    li {
      font-size: 13px;
      font-weight: bold;
      z-index: 1;
      color: #262626;
      cursor: pointer;
      transition: 200ms;
      letter-spacing: 1px;
      text-decoration: none;
      transition: all 0.25s;
    }
  }

  .dropdown-content {
    display: none;
    position: absolute;
    background-color: #bf8f00;
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

  aside {
    background: #1e2022;
    padding: 0.3rem 0;

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
        margin-right: 1rem !important;
        letter-spacing: 1px;
        font-size: 13px !important;
        color: #fff;
        margin: 1rem 0;
      }
    }

    .social-medias {
      margin: 1rem 0;
      i {
        padding: 0 1rem;
        color: var(--primary-color);
      }
    }
  }

  .logo {
    width: 9%;
    object-fit: contain;
    box-sizing: border-box;
    padding: 0 !important;
    margin: 0rem 0 0.3rem 0;

    img {
      width: 80%;
    }
  }

  .btn-cover {
    padding-top: 1.6rem;
  }
}

main {
  display: flex;
  flex: auto;
  padding: 0;
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
    width: 90%;
    margin: 1.5rem 0;
    float: right;

    li,
    li a {
      font-size: 13px;
      font-weight: bold;
      z-index: 1;
      color: var(--black);
      cursor: pointer;
      transition: 200ms;
      letter-spacing: 1px;
      text-decoration: none;
      transition: all 0.25s;

      &:hover {
        color: var(--primary-color);
        transition: all 0.25s;
      }
    }
  }
}

nav {
  opacity: 0.8;

  > ul {
    display: flex;
    justify-content: space-between;
    align-items: center;

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
