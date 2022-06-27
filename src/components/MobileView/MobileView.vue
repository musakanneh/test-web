<template>
  <div>
    <nav>
      <div class="logo__cover">
        <a href="/">
          <img
            src="../../assets/new_logo.png"
            class="img-responsive"
            alt="Responsive image"
        /></a>
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
        <li class="nav-styling__contact">
          <a href="/projects">PROJECTS</a>
        </li>
        <li>
          <a href="/events">NEWS & EVENTS</a>
        </li>
        <li>
          <label for="drop-2" id="label__title" class="toggle">MEDIA +</label>
          <a href="#"></a>
          <input type="checkbox" id="drop-2" />
          <ul>
            <li><a href="/documents">DOCUMENTS</a></li>
            <li><a href="/gallery">GALLERY</a></li>
            <li><a href="/videos">VIDEOS</a></li>
          </ul>
        </li>
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
.drop_down__content {
  .toggle {
    width: 30% !important;
    margin: auto !important;
    float: right;

    i {
      color: var(--primary-color);
      font-size: 2.5rem;
      margin: 1.2rem 0 !important;
    }
  }
}

nav {
  z-index: 1;
  background-color: #1817172d;
  -webkit-box-shadow: 0px 2px 15px -12px rgba(0, 0, 0, 0.618);
  -moz-box-shadow: 0px 2px 15px -12px rgba(0, 0, 0, 0.57);
  box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.57);
  width: 100%;
  position: -webkit-sticky !important;
  position: sticky !important;
  top: 0 !important;
  padding: 0.4rem 0;

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
    display: flex;
    justify-content: space-between;

    img {
      width: 25% !important;
      padding: 0 !important;
      margin-left: 2.3rem !important;
    }

    p {
      a {
        color: #a77e03;
        font-size: 20px;
      }
    }
  }

  #label__title {
    width: 87%;
    margin: auto;
    color: #fff;
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
  border: 1px solid rgba(221, 221, 221, 0.062);
  background-color: #303030;
  padding-left: 2.3rem;
}

nav a {
  display: block;
  color: #fff;
  font-size: 13px;
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
