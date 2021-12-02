<template>
  <body>
    <main>
      <br />
      <h1>Sign Up to Volunteer With Us</h1>
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
          <input type="text" placeholder="Subject" label="Subject" />
        </div>
        <br /><br />
        <textarea type="text" placeholder="" label="Message" />
        <br />
        <br />
        <a href="/">
          <Button
            :isFullWidth="false"
            label="Submut Message"
            width="150px"
          ></Button
        ></a>
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
@media only screen and (max-width: 900px) {
  body {
    padding: 13rem 1.5rem 2rem 1.5rem !important;
    background: #b1b0b0 !important;

    input,
    textarea {
      width: 90% !important;
      margin-left: 5% !important;
    }

    h1 {
      font-size: 2.4rem;
    }

    main {
      margin-top: -8rem !important;
      background-color: #fff !important;
    }
  }
}
body {
  background: #fbfbfb;
  width: 100%;
  padding: 18rem 0 5rem 0;

  h1 {
    text-align: center;
    padding: 1rem 0 3rem 0;
  }
}
.input-cover {
  width: 100%;
  margin: auto;
}

input {
  width: 100%;
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
  width: 100%;
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
