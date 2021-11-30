<template>
    <div class="height_and_weight__global mobile_top_margin_profile_content">
    <ProfileCaption name="Team Mamber" />
    <section class="container">
      <div class="profile-content__cover">
        <img
          src="../assets/nagol.png"
          class="img-responsive img-circle image__style"
          alt="Responsive image"
        />
        <div class="profile_content__and__media-cover">
          <h2 class="profile_content">Elias Nagol - Technical Advisor</h2>
          <p class="profile_content">
            Elias Nagol is a professional in environmental management, land use
            plans and community engagement, GIS & Remote Sensing. He has worked
            extensively to promote sustainable solutions for the planet where
            system-based rangelands management ensures equitable development for
            peoples and biodiversity. Having being trained in four different
            countries (Tanzania, France, Australia and the Netherlands) and
            worked with multidisciplinary institutions (Wageningen University,
            Ardhi University, IUCN, MWEDO, CORDS, IFRA and TFCG), Elias is
            exposed to a diverse professional environment biasing geospatial
            sciences on agroecology, natural resources management and land use
            planning targeting improved rural livelihoods. He joins TEST as a
            senior Technical Advisor bringing with him passion and commitment
            for ecosystem governance and inclusive conservation. Nagol is
            currently studying Precision Agriculture in Tanzania: towards a
            better understanding of spatial variability of input response to
            reduce farmer's risk for his PhD degree.
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
