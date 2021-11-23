<template>
  <div>
    <aside>
      <div class="container">
        <div class="container__">
          <div class="contact__info">
            <p title="Phone">Tel: (255) 786 744 663</p>
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

    <nav class="mobile_nav__container">
      <div class="logo__cover">
        <div class="logo__content">
          <a href="/">
            <img
              src="../../assets/logo.jpeg"
              class="img-responsive"
              alt="Responsive image"
          /></a>
        </div>
        <div class="drop_down__content">
          <label for="drop" class="toggle">
            <i class="fas fa-bars"></i>
          </label>
        </div>
      </div>
      <input type="checkbox" id="drop" />
      <ul class="menu">
        <li class="nav-styling__contact"><a href="/about">About TEST</a></li>
        <li class="nav-styling__contact"><a href="/work">OUR WORK</a></li>
        <li class="nav-styling__contact">
          <a href="/approach">OUR APPROACH</a>
        </li>
        <li class="nav-styling__contact"><a href="/media">OMEDIA</a></li>
        <li class="nav-styling__contact"><a href="/media">NEWS</a></li>
      </ul>
    </nav>
  </div>
</template>

<script>
export default {
  components: {},
};
</script>

<style lang="scss" scoped>
aside {
  background: #bf8f00;
  padding: 1rem 0;

  .container__ {
    display: flex;
  }

  .contact__info {
    p,
    a {
      color: #fff;
      padding-right: 17px;
      font-weight: 500;
      font-size: 13px;
      color: #fff;
      display: flex;
      font-weight: bold;
    }
  }
  .social-medias {
    margin: 1rem 0;
    display: flex;

    i {
      padding: 0 1rem;
      color: #fff;
    }
  }
}

.drop_down__content {
  width: 25% !important;

  .toggle i {
    font-size: 4rem;
    margin: auto;
  }
}

nav {
  -webkit-box-shadow: 0px 2px 15px -12px rgb(102, 102, 102);
  -moz-box-shadow: 0px 2px 15px -12px rgb(85, 85, 85);
  box-shadow: 1px 1px 5px rgb(32, 32, 32);
  width: 100%;

  // border: 1px solid red;
  padding: 0.5rem 0;

  .img-responsive {
    width: 40% !important;
    padding: 1rem 0 0 3rem;
  }

  .nav-styling__contact {
    * {
      padding: 1rem 0;
      width: 87%;
      margin: auto;
    }
  }

  .logo__cover {
    // border: 1px solid red;
    // background: #ddd;
    display: flex;
    justify-content: space-between;

    p {
      a {
        color: #a77e03;
        font-size: 20px;
      }
    }
  }

  i {
    color: #6ca714;
  }

  #label__title {
    width: 87%;
    margin: auto;
  }
}

.toggle,
[id^="drop"] {
  display: none;
}

nav:after {
  content: "";
  display: table;
  clear: both;
}

nav ul {
  float: right;
  padding: 0;
  margin: 0;
  list-style: none;
  position: relative;
}

nav ul li {
  display: inline-block;
  float: left;
  border: 1px solid rgba(221, 221, 221, 0.158);
  background-color: #303030;
}

nav a {
  display: block;
  color: #fff;
  font-size: 17px;
  text-decoration: none;
}

nav ul ul {
  display: none;
  position: absolute;
  top: 60px;
}

nav ul li:hover > ul {
  display: inherit;
}

nav ul ul li {
  width: 170px;
  float: none;
  display: list-item;
  position: relative;
}

.toggle + a,
.menu {
  display: none;
}

.toggle {
  display: block;
  color: #a77e03;
  font-size: 1.24rem;
  padding: 0.8rem 0;
}

[id^="drop"]:checked + ul {
  display: block;
}

nav ul li {
  display: block;
  width: 100%;
}

nav ul ul .toggle,
nav ul ul a {
  padding: 0 40px;
}

nav ul ul a,
nav ul ul ul a {
  padding: 14px 20px;
  color: #fff;
  font-size: 17px;
}

nav ul li ul li .toggle,
nav ul ul a {
  background-color: #212121;
}

nav ul ul {
  float: none;
  position: static;
  color: #ffffff;
}

nav ul ul li:hover > ul,
nav ul li:hover > ul {
  display: none;
}

nav ul ul li {
  display: block;
  width: 100%;
}
nav ul ul ul li {
  position: static;
}
</style>
