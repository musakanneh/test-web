<template>
  <body>
    <h1>
      To know us more
    </h1>
    <main>
      <section class="about">
        <div class="sec-one-cover">
          <div class="sec-one-inner">
            <div class="image">
              <img src="../assets/dogs1.jpeg" alt="" />
            </div>
            <h3>OUR AIM</h3>
            <p>
              To design appropriate and sustainable ecosystem governance
              mechanisms and tools by combining scientifically proven solutions
              with the indigenous ecological land management practices
            </p>
          </div>
        </div>
      </section>
      <section class="about">
        <div class="sec-one-cover">
          <div class="sec-one-inner">
            <div class="image">
              <img src="../assets/people10.png" alt="" />
            </div>
            <h3>OUTCOME</h3>
            <p>
              To open space for learning, research and to provide an alternative
              route to addressing pressing ecosystems governance challenges such
              as climate and ecological breakdown, and the corresponding threats
              that indigenous people face.
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
body {
  width: 100%;
  padding: 4% 0;
  main {
    display: grid;
    grid-template-columns: 1fr 1fr;
    width: 80%;
    margin: auto;
    padding: 2% 0;
    flex: auto;
    flex-direction: row;
  }

  .about {
    justify-content: space-between;
    background: #ffffff;
    box-shadow: 0px 6px 20px rgba(0, 0, 0, 0.06);
    width: 90%;
    margin: auto;

    h3 {
      color: #c98811;
    }

    .sec-one-inner {
      width: 100%;
      h3,
      p {
        margin: 1.5rem;
      }

      img {
        width: 100%;
      }
    }
  }
}
</style>
