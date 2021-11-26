<template>
  <div class="height_and_weight__global">
    <ProfileCaption name="Board Mamber" />
    <section class="container">
      <div class="profile-content__cover">
        <img
          src="../assets/leb.png"
          class="img-responsive img-circle image__style"
          alt="Responsive image"
        />
        <div class="profile_content__and__media-cover">
          <h2 class="profile_content">Dr. Lekumok Kironyi - Chairman</h2>
          <p class="profile_content">
            Lekumok Kironyi (PhD) is an Assistant Lecturer at the Department of
            Agricultural Economics and Finance, School of Business and
            Entrepreneurship Studies, Mwalimu Julius K. Nyerere University of
            Agriculture and Technology (MJNUAT). He has a PhD in Agricultural
            Economics and Agribusiness/Rural-Urban Transformation at Sokoine
            University of Agriculture (SUA), Tanzania, and the University of
            Copenhagen, Denmark. He has a master’s degree in Public Policy and
            Administration at the University of Botswana, Botswana and a
            Bachelor of Arts in Rural Development from Sokoine University of
            Agriculture (SUA), Tanzania.
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
