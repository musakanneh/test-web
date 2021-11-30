<template>
  <body>
    <main class="container">
      <section class="partnership-cover">
        <h1>WHY ECOSYSTEMS?</h1>
        <div class="partnership-sec">
          <div class="img-cover animate_left">
             <img
                src="../assets/cros1.png"
                class="img-responsive"
                alt="Responsive image"
              />
          </div>
          <div class="offers-cover-sec-1 animate_right">
            <p>
              <span>Natural Ecosystems & Landscapes</span> are important for
              livelihood support and cultural identity of Indigenous People and
              Local Communities (IPLCs) and biodiversity sustainability.
              Indigenous communities own and manage vast ecosystems and
              landscapes through traditional ecological knowledge actions for
              the benefit of livestock, wildlife, and continued cultural
              practices.
            </p>
            <p>
              Most critical and crucial ecosystems that are owned by IPLCs are
              evidence of diversity, interdependency, and cultural connectivity
              of life on land: people and wildlife, and a clear practice of
              co-existence. Unfortunately, they fall outside of any recognized
              conservation status, even though they are necessary in regulating
              climate change, providing wildlife habitats, and accumulate
              immense biological diversity.
            </p>
            <p>
              Mainstream conservation actions have by-passed these ecosystems
              and indigenous peoples and their conservation methods. This action
              is threatening peaceful co-existence between people and wildlife,
              breeding antagonism between indigenous communities and
              conservation authorities. This is contributing to extensive
              habitat deterioration and human rights violations to the extent
              that co-existence is gradually collapsing and immediate actions
              are necessary to reverse this negative trend.
            </p>
          </div>
        </div>
      </section>
    </main>
  </body>
</template>

<script>
export default {
  components: {},
};
</script>

<style lang="scss" scoped>
@media only screen and (max-width: 900px) {
  body {
    .partnership-sec {
      display: block !important;
    }
  }
}

body {
  height: 100%;
  width: 100%;
  padding: 4rem 0 2rem 0;

  span {
    color: #689d1a;
  }

  img:hover {
    transform: scale(1.01);
    cursor: pointer;
    transition: all 0.5s ease-in-out;
  }

  main {
    position: relative;
    top: -12vh;
    background: #fff;
    border-radius: 7px 7px 0 0;
    padding: 3px 50px;
    height: 100%;
    margin: auto;
    background-repeat: no-repeat;
    background-size: cover;
    object-fit: cover;

    .partnership-cover {
      margin-top: 4rem;

      h1 {
        text-align: center;
        padding-top: 1rem;
      }
    }

    .img-cover {
      width: 40%;
    }

    img {
      width: 100%;
    }

    .partnership-sec {
      justify-content: space-between;
      width: 100%;
      margin-top: 4rem;
      display: flex;
      flex: auto;
      height: auto;

      .offers-cover-sec-1 {
        width: 55%;
        object-fit: contain;

        p {
          color: #6a6a6a;
          padding: 0.5rem 0;
          font-size: 1.54rem;
        }
      }
    }
  }
}
</style>
