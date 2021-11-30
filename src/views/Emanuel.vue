<template>
    <div class="height_and_weight__global mobile_top_margin_profile_content">
    <ProfileCaption name="Board Mamber" />
    <section class="container">
      <div class="profile-content__cover">
        <img
          src="../assets/melubo.png"
          class="img-responsive img-circle image__style"
          alt="Responsive image"
        />
        <div class="profile_content__and__media-cover">
          <h2 class="profile_content">Emanuel Melubo - Member</h2>
          <p class="profile_content">
            Emanuel has education credentials from Mweka Wildlife College - one
            of the most prestigious wildlife management schools in Africa - and
            has completed advanced-level courses in wildlife and guiding. Since
            then he has worked with some of the best tour companies in
            Tanzania and he is currently the owner and director of Sidai Africa
            Safaris. He is a certified wilderness first aid responder, and a
            member of the Interpretive Guides Society, a voluntary society for
            conservation-minded safari guides who are interested in furthering
            their knowledge, experience and insights in Tanzania’s natural
            habitats. Emanuel has a vast knowledge and understanding of the
            African bush and wildlife, and is a true naturalist.
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
