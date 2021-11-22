<template>
  <body>
    <CaptionDescription
      describe_caption="Traditional Ecosystems Survival Tanzania (TEST) is a 
      non-profit organization that builds and nurtures connections between traditional 
      indigenous knowledge systems, proven scientific approaches and enterprise-based 
      solutions to protect, restore and manage natural ecosystems and landscapes in Tanzania."
    />
    <section class="container">
      <div class="cover">
        <div class="about__content">
          <div class="img__class">
            <img src="../assets/vision.png" alt="" />
          </div>
          <div class="content__title"><span>Vision</span></div>
        </div>
        <p>
          A world in which people, livestock, wildlife and nature co-exist in
          peace, health and harmony.
        </p>
      </div>
      <div class="cover">
        <div class="about__content">
          <div class="img__class">
            <img src="../assets/pass.png" alt="" />
          </div>
          <div class="content__title"><span>Purpose</span></div>
        </div>
        <p>
          To facilitate effective collaborations that integrate technical
          expertise and assistance with indigenous knowledge and skills to
          reduce conflict, improve natural resource management, and enhance the
          sustainable well-being of local people, livestock and wildlife in the
          natural ecosystems in Tanzania.
        </p>
      </div>
      <div class="cover">
        <div class="about__content">
          <div class="img__class">
            <img src="../assets/outcome.png" alt="" />
          </div>
          <div class="content__title"><span>Mission</span></div>
        </div>
        <div>
          <p>
            To facilitate conflict resolution, collaboration and information
            sharing
          </p>

          <p>To improve community development through capacity building</p>
          <p>
            To improve wildlife conservation within Indigenous Community
            Conversed Areas (ICCAs)
          </p>
          <p>
            To improve traditional rangelands management
          </p>
        </div>
      </div>

      <div class="cover">
        <div class="about__content">
          <div class="img__class">
            <img src="../assets/mission.png" alt="" />
          </div>
          <div class="content__title"><span>Values</span></div>
        </div>
        <div>
          <p>We value and respect our indigenous community</p>
          <p>We value and respect our natural ecosystems</p>
          <p>
            We value accountability and aim to be honest and transparent in all
            we do
          </p>
          <p>
            We value creativity and aim for constant improvement in our work
          </p>
        </div>
      </div>
    </section>
    <TeamCard />
  </body>
</template>

<script>
import CaptionDescription from "@/components/CaptionDescription.vue";
import TeamCard from "@/components/TeamCard.vue";
export default {
  components: {
    TeamCard,
    CaptionDescription,
  },
};
</script>

<style lang="scss" scoped>
@media only screen and (max-width: 900px) {
}

body {
  background: #fbfbfb;

  .about__content {

    align-items: center;
    text-align: center;
    .content__title {
      width: 100%;
    }

    .img__class {
      width: 2.5rem;
      margin: auto;

      img {
        width: 100%;
      }
    }
  }

  .container {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    padding: 3rem 0;

    .cover {
      align-items: left;
      border: 1px solid #ddd;
      margin: 0 0.5rem;
      padding: 0.5rem 1rem;

      p {
        font-weight: 600;
        color: #262626;
        font-size: 14px !important;
      }

      span {
        font-weight: 900;
        font-size: 1.5rem;
      }
    }
  }

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

    .sec-one-cover {
      display: flex;
      flex: auto;

      .sec-one-inner {
        width: 45%;
        padding: 5%;

        h1 {
          text-align: left;
        }
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
