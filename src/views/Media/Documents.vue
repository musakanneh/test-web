<template>
  <body>
    <ProfileCaption name="Annual Reoports" />
    <div class="global__height"></div>
    <main class="container">
      <dl class="dl-horizontal">
        <dt><h1>Annual Report 2019</h1></dt>
        <dd>
          <div class="col-xs-6 col-md-4">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Error id
              quo placeat, aut molestiae animi minima blanditiis laboriosam
            </p>
          </div>
          <div class="col-xs-6 col-md-4">
            <img
              src="../../assets/cult.png"
              class="img-responsive"
              alt="Responsive image"
            />
          </div>
          <div class="col-xs-6 col-md-4">
            <h3><i class="fas fa-download"></i> Download Report</h3>
          </div>
        </dd>
      </dl>
    </main>
  </body>
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
body {
  padding: 8rem 0 !important;

  .dl-horizontal {
    border: 1px solid #ddd;
    box-shadow: 2px 5px #d8c690;
    padding: 4rem 0;
  }

  main {
    img {
      width: 100%;
      border: 1px solid #ddd;

      &:hover {
        box-shadow: 1px 1px 5px rgba(150, 147, 147, 0.57);
        transition: 0.5s ease;
      }
    }

    h3 {
      i {
        color: #ddd;
      }
    }

    h1 {
      font-size: 1.5rem;
      color: #303030;
      padding: 2rem 0;
      text-align: center;
    }
  }
}
</style>
