<template>
  <div class="height_and_weight__global mobile_top_margin_profile_content">
    <ProfileCaption name="Board Mamber" />
    <section class="container">
      <div class="profile-content__cover">
        <img
          src="../assets/lilian.png"
          class="img-responsive img-circle image__style"
          alt="Responsive image"
        />
        <div class="profile_content__and__media-cover">
          <h2 class="profile_content">Lilian Looloitai</h2>
          <p class="profile_content">
            Since 2008, Lilian has been working on livelihood and land rights
            issues for rural communities in Tanzania and providing indigenous
            representation at international conferences and committees globally.
            She has accumulated experience and passion of being a member of the
            Maasai community in northern Tanzania and from her experiences
            working for, and leading, Community Research and Development
            Services (CORDS), a not-for-profit organization established to
            promote the rights of Maasai pastoralists in Tanzania. A substantial
            proportion of Lilian’s work is focused on projects to help Maasai
            women secure their land and their rights.
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
