<template>
  <body>
    <CaptionDescription
      title="Welcome to TEST"
      describe_caption="Traditional Ecosystems Survival Tanzania (TEST) is a 
      non-profit organization that builds and nurtures connections between traditional 
      indigenous knowledge systems, proven scientific approaches and enterprise-based 
      solutions to protect, restore and manage natural ecosystems and landscapes in Tanzania."
    />
    <section class="container">
      <div class="container_content">
        <div>
          <p>
            Vision: A world in which people, livestock, wildlife and nature
            co-exist in peace, health and harmony.
          </p>
        </div>
        <div>
          <p>
            Purpose: To facilitate effective collaborations that integrate
            technical expertise and assistance with indigenous knowledge and
            skills to reduce conflict, improve natural resource management, and
            enhance the sustainable well-being of local people, livestock and
            wildlife in the natural ecosystems in Tanzania.
          </p>
        </div>
        <div>
          <p>Mission:</p>
          <ul>
            <li>
              To facilitate conflict resolution, collaboration and information
              sharing
            </li>
            <li>To improve community development through capacity building</li>
            <li>
              To improve wildlife conservation within Indigenous Community
              Conversed Areas (ICCAs)
            </li>
            <li>To improve traditional rangelands management</li>
          </ul>
        </div>

        <div>
          <p>Values:</p>
          <ul>
            <li>We value and respect our indigenous community</li>
            <li>We value and respect our natural ecosystems</li>
            <li>
              We value accountability and aim to be honest and transparent in
              all we do
            </li>
            <li>
              We value creativity and aim for constant improvement in our work
            </li>
          </ul>
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
body {
  background: #fbfbfb;
  margin-top: 4%;

  .container_content {
    position: relative;
    top: -6vh;
    background: #fff;
    border-radius: 7px 7px 0 0;
    padding: 3rem 50px;
    height: 100%;
    margin: auto;
    background-repeat: no-repeat;
    background-size: cover;
    object-fit: cover;
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
