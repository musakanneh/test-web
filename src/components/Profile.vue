<template>
  <body>
    <main>
      <section class="partnership-cover">
        <h1>General Objectives</h1>
        <div class="partnership-sec">
          <div class="offers-cover-sec-1">
            <div>
              <h3>Why Ecosystems?</h3>
              <p>
                <span>Natural Ecosystems & Landscapes</span> are important for
                livelihood support and cultural identify of local communities
                and indigenous people and biodiversity sustainability.
                Indigenous communities own and manage vast ecosystems and
                landscapes using traditional ecological knowledge actions for
                the benefit of livestock, wildlife, and continued cultural
                practices.
              </p>
              <p>
                Most critical and crucial ecosystems that are owned by IPLCs are
                evidence of diversity, interdependency and cultural connectivity
                of life on land: people, wildlife, livestock and a clear
                practice of co-existence. Unfortunately, they fall outside of
                any recognized conservation status, even though they are
                necessary in regulating climate change, wildlife habitats,
                rangelands and accumulate immerse biological diversity.
                diversity.
              </p>
              <p>
                Mainstream conservation actions have by-passed these ecosystems
                and indigenous peoples and their conservation methods. The
                action is threatening peaceful co-existence between people and
                wildlife, breeding antagonism between indigenous communities and
                conservation authorities. This is contributing to extensive
                habitat deterioration and human rights violations to the extent
                that co-existence is gradually collapsing and immediate actions
                are necessary to reverse this negative trend.
              </p>
            </div>
          </div>
          <div class="img-cover">
            <img src="../assets/cros.png" alt="" />
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
body {
  span {
    color: #c98811;
  }

  img:hover {
    transform: scale(1.01);
    cursor: pointer;
    transition: all 0.5s ease-in-out;
  }

  main {
    position: relative;
    top: -6vh;
    background: #fff;
    border-radius: 10px 10px 0 0;
    padding: 3px 50px;
    width: 85%;
    margin: auto;
    background-repeat: no-repeat;
    background-size: cover;
    object-fit: cover;

    .partnership-cover {
      margin-top: 4%;
    }

    .img-cover {
      width: 40%;
    }
    img {
      width: 100%;
      margin-top: 12px;
    }

    .partnership-sec {
      justify-content: space-between;
      width: 100%;
      margin-top: 4%;
      display: flex;
      flex: auto;
      height: auto;

      .offers-cover-sec-2 {
        width: 20%;
        object-fit: contain;
      }
      .offers-cover-sec-1 {
        width: 60%;
        object-fit: contain;

        p {
          font-style: normal;
          font-weight: normal;
          font-size: 14px;
          color: #6a6a6a;
        }
      }

      h3 {
        margin: 0;
      }

      .offers-cover {
        width: 30%;
        object-fit: contain;

        p {
          font-style: normal;
          margin-top: 20px;
          font-weight: normal;
          font-size: 14px;
          line-height: 20px;
          color: #6a6a6a;
          text-align: justify;
          border: 1px solid red;
        }
      }

      .offers {
        text-align: center;
        padding: 6px 0;
        display: flex;
        justify-content: space-evenly;
        width: 100%;
        background: #ffffff;
        box-shadow: 0px 6px 20px rgba(0, 0, 0, 0.06);
        border-radius: 10px;
        cursor: pointer;

        img {
          width: 65px;
        }

        a {
          text-decoration: none;
          font-size: 14px;
          padding: 5px 10px;
          cursor: pointer;
          background-color: #404040;
          box-shadow: 0px 6px 20px rgba(0, 0, 0, 0.06);
          border-radius: 3px;
          font-style: normal;
          font-weight: 500;
          font-size: 12px;
          line-height: 18px;
          color: #fff;

          &:hover {
            background-color: #303030;
            transition: 0.5s ease;
          }
        }
        &:hover {
          box-shadow: 0px 6px 20px rgba(107, 117, 201, 0.342);
          transition: 1s ease;

          h2 {
            color: #303030;
            transition: 0.5s ease;
          }
        }
      }
    }
  }
}
</style>
