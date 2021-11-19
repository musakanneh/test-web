<template>
  <body>
    <Caption title="" />
    <main class="container">
      <div>
        <p>
          <span>
            Twiga Wetu: Masai Giraffe Conservation Outside Protected Areas – the
            Role of Indigenous Knowledge and Traditional Systems.
          </span>
          This project is a 1-year project (Oct. 2020 – Sept. 2021) funded by
          <a href="www.giraffeconservation.org"
            >Giraffe Conservation Foundation</a
          >. The aim of this project is to revitalize indigenous conservation of
          Masai giraffe in the eastern Serengeti Ecosystem. This will serve the
          interests of the local communities to be involved in the conservation
          and monitoring of giraffe linked with livestock grazing strategies
          outside protected areas.
        </p>
      </div>
      <div>
        <p>
          Co-developing Data Technology for Inclusive Conservation in the
          Eastern Serengeti. This is a 1-year project with the aim of
          co-developing together with the local communities, a mobile app and
          data collection and management protocols. This will serve the
          interests of the communities for more research to inform both the
          local indigenous people on their wildlife monitoring and livestock
          grazing strategies, and protected areas management. This project is
          funded by the Centre for Indigenous Conservation and Development
          Alternatives (CICADA at the University of McGill, Canada.
        </p>
      </div>
    </main>
  </body>
</template>

<script>
import Caption from "@/components/Caption.vue";
export default {
  components: {
    Caption,
  },
};
</script>

<style lang="scss" scoped>
main {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 80px auto 80px;
  column-gap: 50px;
  row-gap: 15px;
}
</style>
