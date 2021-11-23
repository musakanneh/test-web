<template>
  <div class="">
    <ProfileCaption name="Team Mamber" />
    <section class="container">
      <div class="profile-content__cover">
        <img
          src="../assets/marco.jpeg"
          class="img-responsive img-circle"
          alt="Responsive image"
        />
        <div class="profile_content__and__media-cover">
          <h2 class="profile_content">Marco Mathayo - Programs Manager</h2>
          <p class="profile_content">
            Marco is a LLB graduate from Tumaini University Makumira and has
            developed his career while working for several civil society and
            non-governmental organizations particularly the Pastoral Women's
            Council (PWC) and Community Research and Development Services
            (CORDS). He devoted his passion and experience on Children’s Rights,
            Women Rights and Land rights for indigenous communities in Tanzania.
            He has extensive skills and expertise in project management,
            Monitoring, Evaluation and Learning (MEL) and communication skills.
            He brings to TEST a wealth of expertise in legal profession
            especially Wildlife Management Laws, Land Laws and many other
            Conservation Laws in a diverse professional spectrum. He is proven
            to be a proactive, self-motivated, multi-skilled, flexible and
            results-oriented person.
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
