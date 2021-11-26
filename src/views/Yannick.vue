<template>
  <div class="height_and_weight__global">
    <ProfileCaption name="Team Mamber" />
    <section class="container">
      <div class="profile-content__cover">
        <img
          src="../assets/yannick.png"
          class="img-responsive img-circle image__style"
          alt="Responsive image"
        />
        <div class="profile_content__and__media-cover">
          <h2 class="profile_content">Yannick Ndoinyo - Executive Director</h2>
          <p class="profile_content">
            Yannick is the co-founder and Executive Director of TEST. He has
            over 20 years’ experience in natural resources management, land
            management and defending human rights. He is passionate about nature
            and livelihoods of local peoples. Yannick is trained in natural
            resources management and has for over 20 years been facilitating
            community-based conservation initiatives in and around Serengeti
            ecosystem. He has a bachelor degree from the University of
            Dar-es-Salaam in land use planning and natural resources management,
            and currently studying MSc in Biodiversity, Conservation and
            Management at the University of Oxford, UK.
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

<style lang="scss" scoped>

</style>
