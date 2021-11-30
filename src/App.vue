<template>
  <div id="app">
    <link
      rel="stylesheet"
      href="https://use.fontawesome.com/releases/v5.2.0/css/all.css"
      integrity="sha384-hWVjflwFxL6sNzntih27bfxkr27PmbbK/iSvJ+a4+0owXq79v+lsFkW54bOGbiDQ"
      crossorigin="anonymous"
    />
    <div v-if="!isMobile()">
      <Navbar />
    </div>
    <div v-else>
      <MobileView />
    </div>
    <router-view />
    <Footer />
  </div>
</template>

<script>
import Navbar from "@/components/Navbar.vue";
import Footer from "@/components/Footer.vue";
import MobileView from "@/components/MobileView/MobileView.vue";
export default {
  name: "App",
  components: {
    Navbar,
    Footer,
    MobileView,
  },

  methods: {
    isMobile() {
      if (
        /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
          navigator.userAgent
        )
      ) {
        return true;
      } else {
        return false;
      }
    },
  },
};
</script>

<style lang="scss">
#app {
  display: flex;
  flex: auto;
  width: 100%;
  flex-direction: column;
  object-fit: contain;
  padding: 0;
  margin: 0;
  font-weight: normal;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  -webkit-text-size-adjust: 100% !important;
}

.team__background {
  padding: 5rem 2rem;
  box-sizing: border-box;
  background: #fff;
}

:root {
  --primary-color: #be9e44;
  --black: #1e2022;
  --border: 1px solid #ddd;
}

.selector-for-some-widget {
  box-sizing: content-box;
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

p {
  color: var(--black);
  font-size: 16px !important;
  line-height: 1.5;
  font-family: "Roboto", sans-serif;
}

h1,
h2,
h3,
span,
strong {
  color: var(--primary-color);
  font-family: "Roboto", sans-serif;
}

.mobile_top_margin {
  margin-top: -3rem !important;
}

/** Animation starts */
.animate_1 {
  animation: fadeIn 1.5s;
}
.animate_2 {
  animation: fadeInUp 1.5s;
}
.animate_3 {
  animation: fadeInUp 4s;
}
.animate_4 {
  animation: fadeInUp 4.5s;
}
.animate_left {
  animation: fadeInLeft 2.2s;
}
.animate_right {
  animation: fadeInRight 2.5s;
}
/** Animation ends  */

.height_and_weight__global {
  height: 100%;
  width: 100%;
  float: auto;
  padding: 6rem 0 8rem 0;
}

.global__height {
  padding: 4rem 0;
}

img {
  object-fit: contain;
}

/*** Team members profile starts */
@media only screen and (max-width: 900px) {
  .profile-content__cover {
    margin-top: 2rem !important;
    display: block !important;

    p {
      width: 100% !important;
    }
  }
  .mobile_top_margin_profile_content{
    padding: 0 0 2rem 0;
  }
}
.profile-content__cover {
  display: grid;
  /* padding: 4rem 0; */
  grid-template-columns: 1fr 2fr;
  column-gap: 50px;
  row-gap: 15px;
  margin-top: 5rem;
}

.image__style {
  width: 85%;
  margin: auto;
  border: 15px solid #ddd;
}

.profile_content {
  padding: 1rem 2rem;
  margin: 0;
  line-height: 1.5;
  font-size: 2rem;
}

.profile-social-medias__tags {
  justify-content: space-around;
  display: flex;
  justify-content: space-between;
  width: 30%;
}
.profile-social-medias__tags i {
  color: #c989117e;
  font-size: 2.5rem;
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
