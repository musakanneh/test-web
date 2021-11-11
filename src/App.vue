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
  font-family: "Quattrocento Sans", sans-serif;
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
  color: #c98811;
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
  color: #c98811;
  opacity: 1;
  transition: 200ms;
  font-weight: 600;
}

span {
  color: #c98811;
}

h1 {
  color: #d4d1c6;
  font-size: 3rem;
  text-align: left;
}

.container {
  width: 1200px;
  margin: auto;
  box-sizing: border-box;
  min-height: 100%;
}

.height_and_weight__global {
  height: 100%;
  width: 100%;
  float: auto;
  padding: 6rem 0 8rem 0;
}

p {
  font-style: normal;
  font-weight: normal;
  line-height: 1.25rem;
  font-size: 16px !important;
}

img {
  object-fit: contain;
}

/*** Team members profile starts */
.profile-content__cover {
  display: grid;
  padding: 2rem 0;
  grid-template-columns: 1fr 2fr;
}

.profile_content {
  padding: 1rem 2rem;
  margin: 0;
  line-height: 1.5;
}

.profile-social-medias__tags {
  display: flex;
  justify-content: space-around;
  width: 18%;
}
.profile-social-medias__tags i {
  color: #c989117e;
  font-size: 1.2rem;
}
.profile-social-medias__tags i:hover {
  color: #c98811;
  transform: 0.5 ease;
}
/*** Team members profile ends */
</style>
