<template>
  <body>
    <CaptionDescription
      describe_caption="Traditional Ecosystems Survival Tanzania (TEST) is a 
      non-profit organization that builds and nurtures connections between traditional 
      indigenous knowledge systems, proven scientific approaches and enterprise-based 
      solutions to protect, restore and manage natural ecosystems and landscapes in Tanzania."
    />
    <section class="container">
      <div class="row">
        <div class="col-xs-4 col-md-3">
          <div class="cover">
            <div>
              <img
                src="../assets/vision.png"
                class="img-responsive img-circle"
                alt="Responsive image"
              />
            </div>
            <div><h3>Vision</h3></div>
            <div>
              <p>
                A world in which people, livestock, wildlife and nature co-exist
                in peace, health and harmony.
              </p>
              <p><br /><br /><br /><br /><br /><br /><br /></p>
            </div>
          </div>
        </div>
        <div class="col-xs-4 col-md-3">
          <div class="cover">
            <div>
               <img
                src="../assets/outcome.png"
                class="img-responsive img-circle"
                alt="Responsive image"
              />
            </div>
            <div><h3>Purpose</h3></div>
            <p>
              To facilitate effective collaborations that integrate technical
              expertise and assistance with indigenous knowledge and skills to
              reduce conflict, improve natural resource management, and enhance
              the sustainable well-being of local people, livestock and wildlife
              in the natural ecosystems in Tanzania.
            </p>
            <p><br /></p>
          </div>
        </div>
        <div class="col-xs-4 col-md-3">
          <div class="cover">
            <div>
               <img
                src="../assets/outcome.png"
                class="img-responsive img-circle"
                alt="Responsive image"
              />
            </div>
            <div><h3>Mission</h3></div>
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
        </div>
        <div class="col-xs-4 col-md-3">
          <div class="cover">
            <div>
              <img
                src="../assets/mission.png"
                class="img-responsive img-circle"
                alt="Responsive image"
              />
            </div>
            <div><h3>Values</h3></div>
            <div>
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
}

body {
  background: #fbfbfb;

  .cover {
    border: 1px solid #ddd;
    padding: 2rem 1rem;
    text-align: center;

    p {
      text-align: left;
    }
  }

  img {
    width: 50px;
    margin: auto;
  }

  .row {
    padding: 10rem 0;
  }
}
</style>
