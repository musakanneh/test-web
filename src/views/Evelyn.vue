<template>
  <div class="height_and_weight__global">
    <ProfileCaption name="Team Mamber" />
    <section class="container team__background">
      <div class="profile-content__cover">
        <img
          src="../assets/evel.png"
          class="img-responsive img-circle image__style"
          alt="Responsive image"
        />
        <div class="profile_content__and__media-cover">
          <h2 class="profile_content">Evelyn Kaney - Financial Manager</h2>
          <p class="profile_content">
            Evelyn Kaney has a Bachelor of Arts in Accounting from Concordia
            College in Moorhead, Minnesota and MBA from the University of Mary
            in Fargo, North Dakota USA. She has been involved in community
            development initiatives since 2010. As a supporter for community
            development, she addressed the challenges that hinder sustainable
            livestock production. She is involved quite extensively in community
            work through improving and addressing key livestock production
            challenges and options.
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
