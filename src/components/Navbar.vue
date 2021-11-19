<template>
  <header>
    <main>
      <div class="logo">
        <a href="/"><img src="../assets/logo.jpeg" alt=""/></a>
      </div>
      <nav class="nav-cover">
        <ul>
          <li><a href="/">HOME</a></li>
          <li>
            <a href="/about">ABOUT TEST</a>
          </li>
          <li>
            <a href="/work">OUR WORK</a>
          </li>
          <li>
            <a href="/approach">OUR APPROACH</a>
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
  height: auto;
  z-index: 1;
  -webkit-box-shadow: 0px 2px 15px -12px rgba(0, 0, 0, 0.57);
  -moz-box-shadow: 0px 2px 15px -12px rgba(0, 0, 0, 0.57);
  box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.57);

  .logo {
    width: 13%;

    img {
      width: 95%;
      margin-top: 5px;
    }
  }

  .nav-cover,
  .btn-cover {
    padding-top: 18px;
  }
}

main {
  width: 90%;
  margin: auto;
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
    width: 50%;
    padding: 0;
    margin: auto;

    li,
    li a {
      font-size: 13px;
      font-weight: bold;
      z-index: 1;
      color: #303030;
      cursor: pointer;
      transition: 200ms;
      letter-spacing: 1px;
      text-decoration: none;
      transition: all 0.25s;

      &:hover {
        border-bottom: 1px solid #689d1a;
        color: #689d1a;
        transition: all 0.25s;
      }
      &:focus {
        outline: none;
        border-bottom: 1px solid #689d1a;
        color: #689d1a;
      }

      &:hover {
        opacity: 1;
        color: #689d1a;
      }

      &:first-child {
        margin-left: 0;
      }

      &:last-child {
        margin-right: 0;
      }
    }

    .link {
      &::before {
        padding-right: 0;
        display: none;
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
