<template>
  <body>
    <ProfileCaption name="" />
    <div class="global__height"></div>
    <main class="container animate_1">
      <dl class="dl-horizontal">
        <dt><h4>2022 - 2027</h4></dt>
        <dd>
          <div class="col-xs-6 col-md-4">
            <h4>STRATEGIC PLAN</h4>
          </div>
          <div class="col-xs-6 col-md-4">
            <img
              src="../../assets/cult.png"
              class="img-responsive"
              alt="Responsive image"
            />
          </div>

          <div class="col-xs-6 col-md-4">
            <div class="download__report">
              <h3>
                <a href="TEST-STRATEGIC-PLAN_2022-2026.pdf" download>
                  <h4><i class="fas fa-download"></i> Download Report</h4>

                  <link
                    rel="icon"
                    href="<%= BASE_URL %>TEST-STRATEGIC-PLAN_2022-2026.pdf"
                  />
                </a>
              </h3>
            </div>
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
@media only screen and (max-width: 900px) {
  body {
    main {
      margin-top: -8rem !important;
    }
  }
}
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

    a {
      text-decoration: none;
    }
    .download__report {
      border: 1px solid #3030301e;
      &:hover {
        background-color: #30303031;
        transition: 0.5s ease;

        i {
          color: #d8c690;
          transition: 0.5s ease;
        }
      }
      h3 {
        text-align: center;
        i {
          color: #ddd;
        }
      }
    }

    h1 {
      font-size: 1.65rem;
      border: 1px solid red;
      color: #303030;
      text-align: center;
    }
  }
}
</style>
