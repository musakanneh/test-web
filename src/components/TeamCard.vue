<template>
  <body>
    <div class="team-and-boardmembers__cover">
      <main class="container">
        <h1>BOARD</h1>
        <div class="row">
          <div class="col-xs-6 col-md-3">
            <div class="thumbnail">
              <img
                src="../assets/leb.png"
                class="img-responsive"
                alt="Responsive image"
              />
              <div class="team__details">
                <TeamTag name="Dr. Lekumok Kironyi" position="Chairman" />
                <a href="/lekumok"><p>View Profile</p></a>
              </div>
            </div>
          </div>
          <div class="col-xs-6 col-md-3">
            <div class="thumbnail">
              <img
                src="../assets/lilian.png"
                class="img-responsive"
                alt="Responsive image"
              />
              <div class="team__details">
                <TeamTag name="Lilian Looloitai" position="Treasurer" />
                <a href="/lilian"><p>View Profile</p></a>
              </div>
            </div>
          </div>
          <div class="col-xs-6 col-md-3">
            <div class="thumbnail">
              <img
                src="../assets/jop.png"
                class="img-responsive"
                alt="Responsive image"
              />
              <div class="team__details">
                <TeamTag name="Jopha Peter Kakanyi" position="Member" />
                <a href="/jopha"><p>View Profile</p></a>
              </div>
            </div>
          </div>

          <div class="col-xs-6 col-md-3">
            <div class="thumbnail">
              <img
                src="../assets/melubo.png"
                class="img-responsive"
                alt="Responsive image"
              />
              <div class="team__details">
                <TeamTag name="Emanuel Melubo" position="Member" />
                <a href="/emanuel"><p>View Profile</p></a>
              </div>
            </div>
          </div>
        </div>
      </main>

      <h1>OUR TEAM</h1>
      <section class="team-member_section container">
        <div class="row">
          <div class="col-xs-6 col-md-3">
            <div>
              <img
                src="../assets/bnr.png"
                class="img-responsive img-circle"
                alt="Responsive image"
              />
              <div class="team__details">
                <TeamTag name="Elias Nagol" position="Technical Advisor" />
                <a href="/elias"><p>View Profile</p></a>
              </div>
            </div>
          </div>
          <div class="col-xs-6 col-md-3">
            <div>
              <img
                src="../assets/evel.png"
                class="img-responsive img-circle"
                alt="Responsive image"
              />
              <div class="team__details">
                <TeamTag name="Evelyn Kaney" position="Financial Manager" />
                <a href="/evelyn"><p>View Profile</p></a>
              </div>
            </div>
          </div>
          <div class="col-xs-6 col-md-3">
            <div>
              <img
                src="../assets/bnr.png"
                class="img-responsive img-circle"
                alt="Responsive image"
              />
              <div class="team__details">
                <TeamTag
                  name="Isaac Ouma"
                  position="Conservation Enterprise Manager"
                />
                <a href="/isaac"><p>View Profile</p></a>
              </div>
            </div>
          </div>
          <div class="col-xs-6 col-md-3">
            <div>
              <img
                src="../assets/marco.jpeg"
                class="img-responsive img-circle"
                alt="Responsive image"
              />
              <div class="team__details">
                <TeamTag name="Marco Mathayo" position="Programs Manager" />
                <a href="/marco"><p>View Profile</p></a>
              </div>
            </div>
          </div>
          <div class="col-xs-6 col-md-3">
            <img
              src="../assets/yannick.png"
              class="img-responsive img-circle"
              alt="Responsive image"
            />
            <div class="team__details">
              <TeamTag name="Yannick Ndoinyo" position="Executive Director" />
              <a href="/yannick"><p>View Profile</p></a>
            </div>
          </div>
        </div>
      </section>
    </div>
    <PartnerCard />
  </body>
</template>

<script>
import PartnerCard from "@/components/PartnerCard.vue";
import TeamTag from "@/components/TeamTag.vue";
export default {
  components: {
    TeamTag,
    PartnerCard,
  },
};
</script>

<style lang="scss" scoped>
body {
  .team-and-boardmembers__cover {
    background: #ddd;
    width: 100%;
    height: 100%;
    padding: 2rem 0 4rem 0;
  }

  .team__details {
    text-align: center;
    padding-top: 1rem;
  }

  img {
    width: 100%;
  }

  h1 {
    font-size: 3rem !important;
    padding: 6rem 0 4rem 0;
    width: 100%;
    margin: 0;
    text-align: center;
  }
}
</style>
