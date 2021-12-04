<template>
  <body>
    <div class="global__height"></div>
    <br />
    <br />
    <CaptionDescription
      describe_caption="Traditional Ecosystems Survival Tanzania (TEST) builds and nurtures connections between traditional 
      indigenous knowledge systems, proven scientific approaches and enterprise-based 
      solutions to protect, restore and manage natural ecosystems and landscapes in Tanzania."
    />
    <section class="container mobile_top_margin animate_1">
      <div class="row">
        <div class="col-sm-6 col-md-3">
          <div class="thumbnail">
            <div class="caption">
              <div class="caption__title">
                <img
                  src="../assets/vision.png"
                  class="img-responsive img-circle"
                  alt="Responsive image"
                />
                <h2>Vision</h2>
              </div>
              <p>
                A world in which people, livestock, wildlife and nature co-exist
                in peace, health and harmony.
              </p>
              <p class="spacing"></p>
            </div>
          </div>
        </div>
        <div class="col-sm-6 col-md-3">
          <div class="thumbnail">
            <div class="caption">
              <div class="caption__title">
                <img
                  src="../assets/outcome.png"
                  class="img-responsive img-circle"
                  alt="Responsive image"
                />
                <h2>Purpose</h2>
              </div>
              <p>
                To facilitate effective collaborations that integrate technical
                expertise and assistance with indigenous knowledge and skills to
                reduce conflict, improve natural resource management, and
                enhance the sustainable well-being of local people, livestock
                and wildlife in the natural ecosystems in Tanzania.
              </p>
              <br />
            </div>
          </div>
        </div>
        <div class="col-sm-6 col-md-3">
          <div class="thumbnail">
            <div class="caption">
              <div class="caption__title">
                <img
                  src="../assets/outcome.png"
                  class="img-responsive img-circle"
                  alt="Responsive image"
                />
                <h2>Mission</h2>
              </div>
              <p>
                To facilitate conflict resolution, collaboration and information
                sharing
              </p>
              <p>To improve community development through capacity building</p>
              <p>
                To improve wildlife conservation within Indigenous Community
                Conversed Areas (ICCAs)
              </p>
              <p>To improve traditional rangelands management</p>
            </div>
          </div>
        </div>
        <div class="col-sm-6 col-md-3">
          <div class="thumbnail">
            <div class="caption">
              <div class="caption__title">
                <img
                  src="../assets/mission.png"
                  class="img-responsive img-circle"
                  alt="Responsive image"
                />
                <h2>Values</h2>
              </div>
              <p>We value and respect our indigenous community</p>
              <p>We value and respect our natural ecosystems</p>
              <p>
                We value accountability and aim to be honest and transparent in
                all we do
              </p>
              <p>
                We value creativity and aim for constant improvement in our work
              </p>
            </div>
          </div>
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
  .global__height,
  br {
    display: none;
  }

  .caption__title {
    img {
      width: 25% !important;
      margin: auto !important;
      padding: 0.5rem 0 1rem 0;
    }
  }

  h3 {
    padding: 0.8rem 0;
  }

  p {
    width: 100% !important;
    padding: 0 !important;
  }
}

body {
  background: #fbfbfb;

  .caption__title {
    width: 100%;
    align-items: center;
    margin: auto;
    text-align: center;
    justify-content: space-between;
  }

  .spacing {
    padding-top: 13rem;
  }

  .cover {
    border: 1px solid #ddd;
    padding: 2rem 1rem;
    text-align: center;

    p {
      text-align: left;
    }
  }

  img {
    width: 40px;
    margin: auto;
  }

  .row {
    padding: 10rem 0;
  }
}
</style>
