<template>
  <body>
    <main>
      <br />
      <h1>Contact Us</h1>
      <div class="contact-cover">
        <div class="input-cover">
          <input
            type="text"
            placeholder="Enter your  first name"
            label="First name"
          />
          <br /><br />
          <input
            type="text"
            placeholder="Enter your last name"
            label="Last name"
          /><br /><br />
        </div>
        <div class="input-cover">
          <input
            type="text"
            placeholder="Enter your email addres  / other preferred contact"
            label="Phone number"
          /><br /><br />
          <input
            type="text"
            placeholder="Enter your email address"
            label="Email address"
          />
        </div>
        <br /><br />

        <textarea type="text" placeholder="" label="Message" />
        <br />
        <br />
        <router-link to="/"
          ><Button
            :isFullWidth="false"
            label="Explore more"
            width="150px"
          ></Button
        ></router-link>
      </div>
      <br />
      <br />
    </main>
    <br /><br />
  </body>
</template>

<script>
import Button from "@/components/Button.vue";
export default {
  components: { Button },
};
</script>

<style lang="scss" scoped>
body {
  background: #fbfbfb;
  width: 100%;
  padding: 10% 0;

  h1 {
    text-align: center;
  }
}
.input-cover {
  width: 100%;
  margin: auto;
}

input {
  width: 93%;
  height: 40px;
  border: 1px solid #c98811;
  border-radius: 5px;
  padding: 5px 20px;
  color: rgb(106, 106, 106);
  font-size: 13px;
}
input:focus {
  outline: none;
}
textarea {
  font-family: "Raleway", sans-serif;
  width: 98%;
  height: 100px;
  border: 1px solid #c98811;
  border-radius: 5px;
  color: rgb(106, 106, 106);
  font-size: 13px;
}
textarea:focus {
  outline: none;
}
.main-button:hover {
  background: #c98811;
  transition: 1s ease;
  color: #ffffff;
}
button:focus {
  outline: none;
}
main {
  width: 60%;
  background-color: #fff;
  margin: auto;
  box-shadow: 0px 6px 20px rgba(0, 0, 0, 0.06);
  position: relative;
  border-radius: 10px 10px;
  .inner {
    img {
      width: 100%;
    }
    width: 50%;
  }
}
.contact-cover {
  width: 90%;
  margin: auto;
}
</style>
