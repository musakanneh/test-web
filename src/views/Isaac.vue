<template>
  <div class="height_and_weight__global">
    <ProfileCaption name="Team Mamber" />
    <section class="container">
      <div class="profile-content__cover">
        <img
          src="../assets/bnr.png"
          class="img-responsive img-circle"
          alt="Responsive image"
        />
        <div class="profile_content__and__media-cover">
          <h2 class="profile_content">
            Isaac Ouma - Conservation Enterprise Manager
          </h2>
          <p class="profile_content">
            Isaac studied Systems Ecology at Lund University Sweden, with vast
            experiences on Wildlife Conservation, Ecotourism and Sustainable
            Development. He has facilitated for the establishment of community
            conservancies in Kenya, Ethiopia, Namibia and Uganda. His particular
            example is the Lake Naivasha Conservation Project and the setting up
            of community conservation groups in Uganda in collaboration with
            Uganda Wildlife Authority. Isaac is also an experienced tour guide.
            His experience in wildlife conservation and community-based
            conservation goes as far back as 1996 to the present times. An Isaac
            is an outdoor enthusiast with a zeal for life.
          </p>
          <div class="profile_content profile-social-medias__tags">
            <a href=""> <i class="fab fa-facebook"></i></a>
            <a href=""> <i class="fab fa-instagram"></i></a>
            <a href=""> <i class="fab fa-linkedin"></i></a>
            <a href=""> <i class="fab fa-twitter"></i></a>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import ProfileCaption from "@/components/ProfileCaption.vue";
export default {
  components: {
    ProfileCaption,
  },
};
</script>

<style lang="scss" scoped></style>
