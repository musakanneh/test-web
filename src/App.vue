<template>
  <div id="app">
    <link
      rel="stylesheet"
      href="https://use.fontawesome.com/releases/v5.2.0/css/all.css"
      integrity="sha384-hWVjflwFxL6sNzntih27bfxkr27PmbbK/iSvJ+a4+0owXq79v+lsFkW54bOGbiDQ"
      crossorigin="anonymous"
    />
    <div id="nav">
      <Navbar />
    </div>
    <router-view />
    <Footer />
  </div>
</template>

<script>
import Navbar from "@/components/Navbar.vue";
import Footer from "@/components/Footer.vue";
export default {
  name: "App",
  components: {
    Navbar,
    Footer,
  },
};
</script>

<style>
#app {
  display: flex;
  flex: auto;
  width: 100%;
  font-family: "Poppins", sans-serif;
  flex-direction: column;
  object-fit: contain;
  padding: 0;
  margin: 0;
  font-weight: normal;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

main {
  height: 100%;
  width: 100%;
  flex: auto;
  top: 0;
  left: 0;
}

h2 {
  color: #689d1a;
  font-size: 1.3em;
  text-transform: capitalize;
  margin-block-start: 0.83em;
  margin-block-end: 0.83em;
  margin-inline-start: 0px;
  line-height: 1.4;
  margin-inline-end: 0px;
  font-weight: bold;
}

h3 {
  color: #689d1a;
  opacity: 1;
  transition: 200ms;
  font-weight: 600;
}

span {
  color: #c98811;
}

h1 {
  color: #689d1a;
  font-size: 3rem;
  text-align: left;
  text-transform: capitalize;
}

.container {
  width: 1200px;
  margin: auto;
  box-sizing: border-box;
  min-height: 100%;
}

p{
  /* line-height: 2rem; */
}

/* p {
  line-height: 1.5;
  opacity: 1;
  font-size: 14px;
  font-weight: 400;
  transition: 200ms;
  color: #303030;
} */

img {
  object-fit: contain;
}
</style>
