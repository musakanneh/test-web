<template>
  <div class="height_and_weight__global">
    <ProfileCaption name="Board Mamber" />
    <section class="container">
      <div class="profile-content__cover">
        <img
          src="../assets/jop.png"
          class="img-responsive img-circle image__style"
          alt="Responsive image"
        />
        <div class="profile_content__and__media-cover">
          <h2 class="profile_content">Jopha Peter Kakanyi - Member</h2>
          <p class="profile_content">
            Jopha hails from Longido district in northern Tanzania. She has been
            a women’s elected representative for the Longido District Council
            for 2 terms of five years each. Jopha is an activist and strategist
            on women rights on land, decision-making at the family to the
            community level. She has built and continues to nurture community
            interest groups of savings and credit, women leadership forums and
            women land rights and resources.
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
