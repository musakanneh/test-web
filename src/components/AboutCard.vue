<template>
  <body>
    <main>
      <caption captions="About TEST"></caption>
      <section class="about">
        <div class="sec-one-cover">
          <div class="image">
            <img src="../assets/lady.jpeg" alt="" />
          </div>
          <div class="sec-one-inner">
            <h1>About TEST</h1>
            <hr />
            <p v-scrollanimation>
              TEST is a non-profit organisation set up by indigenous people to
              find sustainable and practical solutions to manage land in the
              eastern Serengeti Ecosystem. For many years conflicts over land
              and land management have sparked violence and unrest in the area.
              This is not how local communities want to live, nor is it good for
              wildlife. Local people set up TEST to help resolve conflicts and
              initiate change for the better.
            </p>
            <br />
            <router-link to="/about"
              ><Button
                :isFullWidth="false"
                label="Explore more"
                width="150px"
              ></Button
            ></router-link>
          </div>
        </div>
      </section>
    </main>
    <div class="history">
      <h1>Our Motivation</h1>
      <hr />
      <p>
        The indigenous communities live in large and key natural ecosystems with
        critical challenges whilst sharing these landscapes with wildlife and
        nature. Traditionally the indigenous peoples used their traditional
        knowledge systems to manage and protect the land for livestock, wildlife
        and their culture. However, in recent years the indigenous traditional
        knowledge systems and management practices have been seriously
        challenged by the introduction and continuous imposition of new
        conservation policies, laws and land management approaches.
      </p>
      <p>
        The efforts to conserve these large landscapes consist of generic and
        exclusive of innovative approaches or inclusive to irreplaceable
        indigenous knowledge practices and systems. The loss of biodiversity and
        livelihoods continues to be witnessed. TEST is passionate to restore the
        practices of the indigenous peoples in Tanzania to provide room for
        sustainability thus creating a friendly balance of land uses in this
        critical ecosystem.
      </p>
      <Button :isFullWidth="false" label="Explore more" width="150px"></Button>
    </div>
    <Location />
  </body>
</template>

<script>
import Location from "@/components/Location.vue";
import Button from "@/components/Button.vue";
export default {
  components: {
    Button,
    Location,
  },
};
</script>

<style lang="scss" scoped>
body {
  background: #fbfbfb;

  .history {
    background-image: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.712)),
      url("../assets/back-img.jpeg");
    background-repeat: no-repeat;
    background-attachment: fixed;
    position: center;
    background-size: cover;
    z-index: 1;
    text-align: center;
    padding: 6% 20%;
    margin: auto;

    hr {
      width: 10%;
    }

    p {
      width: 100%;
      color: #fff;
    }
  }

  .about {
    font-size: 14px;
    line-height: 20px;
    margin: auto;
    text-align: left;
    hr {
      width: 20%;
      margin-left: 0;
    }
    .sec-one-cover {
      display: flex;
      flex: auto;

      .sec-one-inner {
        width: 45%;
        padding: 5%;
      }
      .image {
        width: 50%;
        img {
          width: 100%;
        }
      }
    }
  }

  .before-enter {
    opacity: 0;
    transform: translateY(100px);
    transition: all 2s ease-out;
  }

  .enter {
    opacity: 1;
    transform: translateY(100px);
  }
}
</style>
