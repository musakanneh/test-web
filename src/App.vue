<template>
  <div id="app">
    <link
      rel="stylesheet"
      href="https://use.fontawesome.com/releases/v5.2.0/css/all.css"
      integrity="sha384-hWVjflwFxL6sNzntih27bfxkr27PmbbK/iSvJ+a4+0owXq79v+lsFkW54bOGbiDQ"
      crossorigin="anonymous"
    />
    <!-- <div id="nav"> -->
    <Navbar />
    <!-- </div> -->
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
  -webkit-text-size-adjust: 100% !important;
}

.selector-for-some-widget {
  box-sizing: content-box;
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
}

h3 {
  color: #c98811;
}

span {
  color: #c98811;
}

h1 {
  color: #c98811;
}

.height_and_weight__global {
  height: 100%;
  width: 100%;
  float: auto;
  padding: 6rem 0 8rem 0;
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
  justify-content: space-around;
  display: flex;
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
@media only screen and (max-width: 900px) {
  * {
    width: 100% !important;
    margin: 0 !important;
  }

  p {
    width: 90% !important;
    margin: auto !important;
  }
}
</style>
