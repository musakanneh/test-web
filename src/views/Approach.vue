<template>
  <body>
    <div class="global__height"></div>
    <div class="container mobile_top_margin">
      <div class="row height_and_weight__global">
        <div class="col-xs-6 col-md-12 border__ animate_1">
          <div class="image">
            <img
              src="../assets/colab-res1.png"
              class="img-responsive"
              alt="Responsive image"
            />
          </div>
          <div class="content__text">
            <h3>COLLABORATIVE RESEARCH</h3>
            <p>
              Combining indigenous cultural practices and proven scientific
              solutions on ecological sustainability are useful to enhance
              knowledge and an opportunity for learning. Through collaborative
              research that brings together indigenous groups and renowned
              global researchers, we hope to create common ground and forge
              partnerships between indigenous science and academic and policy
              institutions. One of TEST’s aims is to combine indigenous
              practices with scientific solutions in the management of cultural
              and natural ecosystems.
            </p>
            <p>
              <strong
                >TEST will host a collaborative research program with renowned
                academic and research institutions to:</strong
              >
            </p>
            <ul>
              <li>
                <strong
                  >develop a database of ecological knowledge and practices that
                  enhance biodiversity and cultural sustainability.</strong
                >
              </li>
              <li>
                <strong>
                  explore best options to merge scientific conservation
                  approaches with indigenous traditional knowledge
                </strong>
              </li>
              <li>
                <strong
                  >produce sustainable conservation solutions that address
                  resource tenure and governance.</strong
                >
              </li>
            </ul>
          </div>
        </div>
        <div class="col-xs-6 col-md-12 border__ animate_2">
          <div class="image">
            <img
              src="../assets/surface.jpeg"
              class="img-responsive"
              alt="Responsive image"
            />
          </div>
          <div class="content__text">
            <h3>EMPOWERMENT AND CAPACITY BUILDING</h3>
            <p>
              Indigenous Peoples and Local Communities (IPLCs) are natural
              conservators of nature. Their passion and skill in landscape
              conservation must be appreciated and recognized. TEST will
              facilitate a comprehensive awareness creation program to nurture
              active and joyful involvement of IPLCs in conservation and create
              appreciation from conservation and government authorities.
            </p>
            <strong
              >TEST will disseminate, exhibit, campaign and promote best
              practices through medium such as symposia, workshops, meetings and
              mainstream media (film, radio), and indigenous storytelling
              platforms.
            </strong>
            <ul>
              <li>
                <strong>
                  The purpose is to: enable the scientific community to
                  recognize and adopt best practices of indigenous peoples and
                  local communities in land management
                </strong>
              </li>
              <li>
                <strong
                  >for sustainable ecosystems conservation and integrate such
                  suitable indigenous cultures into official policy and school
                  curricula.</strong
                >
              </li>
            </ul>
          </div>
        </div>
        <div class="col-xs-6 col-md-12 border__">
          <div class="image">
            <img
              src="../assets/culture.png"
              class="img-responsive"
              alt="Responsive image"
            />
          </div>
          <div class="content__text">
            <h3>INDIGENOUS CULTURAL EXCHANGE</h3>
            <p>
              Tanzania has an ecosystem of indigenous cultures contributing to
              community as well as ecological resilience. These indigenous
              cultures have to connect and learn from each other to create
              mutually connected cultural and natural ecosystems for people and
              wildlife.
            </p>
            <strong
              >TEST will:
              <ul>
                <li>
                  <strong
                    >facilitate targeted cultural exchange programmes with and
                    among diverse cultural groups in Tanzania</strong
                  >
                </li>
                <li>
                  <strong
                    >enhance learning across diverse communities in Tanzania and
                    beyond.</strong
                  >
                </li>
              </ul>
            </strong>
          </div>
        </div>
        <div class="col-xs-6 col-md-12 border__">
          <div class="image">
            <img
              src="../assets/landscape1.jpeg"
              class="img-responsive"
              alt="Responsive image"
            />
          </div>
          <div class="content__text">
            <h3>ECOSYSTEM GOVERNANCE</h3>
            <p>
              Appropriate and acceptable ecosystems governance is key to
              ensuring ecological sustainability, building positive and lasting
              relationships between cultures and systems and improving
              livelihoods of indigenous peoples and local communities.
            </p>
            <strong
              >TEST will:
              <ul>
                <li>
                  <strong
                    >spearhead the development of a participatory landscape
                    approach to land-use-plans</strong
                  >
                </li>
                <li>
                  <strong>
                    design and develop guidelines for governing and controlling
                    the use of the land resources at the community and
                    ecosystem-wide levels.</strong
                  >
                </li>
              </ul>
            </strong>
          </div>
        </div>
      </div>
    </div>
  </body>
</template>

<script>
export default {
  components: {},
};
</script>

<style lang="scss" scoped>
@media only screen and (max-width: 900px) {
  .global__height {
    display: none;
  }
  .content__text {
    p {
      margin: 0 !important;
      padding: 0.5rem 0;
      width: 100% !important;
    }

    strong {
      font-weight: bold;
    }
  }
  .border__ {
    display: block !important;

    h3 {
      padding: 2rem 0 1rem 0;
      font-size: 2rem;
    }
  }
}

body {
  background: #ddd;
  padding: 2rem 0 4rem 0;

  .content__text {
    strong {
      font-size: 1.5rem;
      font-family: "Raleway", sans-serif;
      font-weight: bold;
    }

    li {
      margin-top: 0.5rem;
    }
  }

  h3 {
    margin: 0;
    padding-bottom: 1rem;
  }

  strong {
    font-weight: 400;
  }

  .border__ {
    display: grid;
    grid-template-columns: 1fr 2fr;
    column-gap: 50px;
    padding: 2rem;
    border: 1px solid #30303017;
    margin: 2rem 0;
    box-sizing: border-box;
    background-color: rgb(255, 255, 255);
    box-shadow: rgba(0, 0, 0, 0.082) 0px 0px 50px -10px;

    img {
      width: 100%;
    }
  }
}
</style>
