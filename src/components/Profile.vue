<template>
  <body>
    <main>
      <section class="partnership-cover">
        <h1>General Objectives</h1>
        <div class="partnership-sec">
          <div class="offers-cover-sec-1">
            <h2>
              Background
            </h2>
            <div>
              <p>
                <span>Natural Ecosystems & Landscapes</span> are important for
                livelihood management and cultural identify of local communities
                and indigenous people, including biodiversity sustainability.
                Indigenous communities own and manage vast ecosystems and
                landscapes using traditional ecological knowledge actions for
                the benefit of livestock, wildlife, and continued cultural
                practices.
              </p>
              <p>
                In recent years, the indigenous and traditional knowledge
                systems and management practices have, seriously, been
                undermined by the use of polarised conservation approaches.
              </p>
              <p>
                These actions have have excluded the indigenous peoples in the
                conservation processes, and also threatens peaceful co-existence
                between people and wildlife, breeding antagonism between
                indigenous communities and conservation authorities. This is
                resulting into tremendous habitat deterioration and human rights
                violations to the extent that co-existence is gradually
                collapsing and immediate actions are necessary to reverse this
                negative trend.
              </p>
            </div>
          </div>
          <div>
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

    img {
      width: 90%;
      float: right;
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
        width: 50%;
        object-fit: contain;

        ul,
        li {
          font-style: normal;
          margin-top: 5px;
          font-weight: normal;
          font-size: 14px;
          line-height: 20px;
          color: #6a6a6a;
          text-align: justify;
        }

        p {
          font-style: normal;
          font-weight: normal;
          font-size: 14px;
          color: #6a6a6a;
        }
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
