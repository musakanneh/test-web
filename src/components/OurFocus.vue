<template>
  <body class="height_and_weight__global">
    <h1 class="container">Our Focus</h1>
    <main class="container">
      <div>
        <p>11 Regions</p>
        <img src="../assets/banner.jpg" alt="" />
        <div class="profile__description">
          <a href="/elaine">
            <Button label="View Profile" width="50%" />
          </a>
        </div>
      </div>

      <div>
        <p>12 Millions IPLCs</p>
        <img src="../assets/sav.jpeg" alt="" />
        <div class="profile__description">
          <Team name="Musa Selekie Kanneh" role="Software Developer" />
          <a href="/musa">
            <Button label="View Profile" width="50%" />
          </a>
        </div>
      </div>

      <div>
        <p>300 Villages</p>
        <img src="../assets/more-ladies.jpeg" alt="" />
        <div class="profile__description">
          <a href="/dorine">
            <Button label="View Profile" width="50%" />
          </a>
        </div>
      </div>
    </main>
  </body>
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
@media only screen and (max-width: 900px) {
}

body {

  h1 {
    text-align: center;
    padding-bottom: 1rem;
  }

  main {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    object-fit: contain;

    img {
      width: 90%;
      margin-top: 2rem;
      padding: 0.5rem;
      border: 1px solid #ddd;
    }

    div {
      margin: auto;
      width: 100%;
      .profile__description {
        width: 90%;
        text-align: center;
      }
    }
  }
}
</style>
