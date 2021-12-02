<template>
  <body>
    <main>
      <br />
      <h1>Sign Up to Volunteer With Us</h1>
      <div class="contact-cover">
        <div class="input-cover">
          <input type="text" placeholder="First name" label="First name" />
          <br /><br />
          <input
            type="text"
            placeholder="Last name"
            label="Last name"
          /><br /><br />
        </div>
        <div class="input-cover">
          <input
            type="text"
            placeholder="Email addres"
            label="Phone number"
          /><br /><br />
          <input type="text" placeholder="Subject" label="Subject" />
        </div>
        <br /><br />
        <textarea type="text" placeholder="" label="Message" />
        <br />
        <br />
        <div class="btn__submit">
          <a href="/">
            <Button :isFullWidth="false" label="Submit" width="150px"></Button
          ></a>
        </div>
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

    .btn__submit {
      padding-left: 5.5rem !important;
      width: 100%;

      a {
        width: 100% !important;
      }
    }

    br {
      border: 1px solid red;
    }

    input {
      appearance: none;
      border: none;
      outline: none;
      background: none;
      display: block;
      margin: -1.2rem 0 !important;
      width: 90%;
      padding: 20px 15px 3rem 15px;
      border-radius: 5px;
      color: #333;
      font-size: 14px;
      box-shadow: 0px 0px 0px rgba(0, 0, 0, 0);
      background-color: #f3f3f3;
      transition: 0.4s;

      &::placeholder {
        color: #888;
        transition: 0.4s;
      }
    }

    &:focus-within {
      label {
        color: #ea526f;
      }

      textarea[type="text"] {
        background-color: #fff;
        box-shadow: 0 0 6px rgba(0, 0, 0, 0.2);

        &::placeholder {
          color: #666;
        }
      }
    }

    textarea {
      appearance: none;
      border: none;
      outline: none;
      background: none;
      display: block;
      width: 90%;
      padding: 20px 15px 10rem 15px;
      border-radius: 5px;
      margin-bottom: 20px;
      color: #333;
      font-size: 14px;
      box-shadow: 0px 0px 0px rgba(0, 0, 0, 0);
      background-color: #f3f3f3;
      transition: 0.4s;

      &::placeholder {
        color: #888;
        transition: 0.4s;
      }
    }

    &:focus-within {
      label {
        color: #ea526f;
      }
      textarea[type="text"] {
        background-color: #fff;
        box-shadow: 0 0 6px rgba(0, 0, 0, 0.2);
        &::placeholder {
          color: #666;
        }
      }
    }

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
