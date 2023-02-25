<template>
  <body>
    <div class="global__height"></div>
    <div class="container animate_1">
      <div class="global__height"></div>
      <h4>Current Projects</h4>
      <div class="row">
        <div
          v-for="(project, index) in projects"
          :key="index"
          class="col-xs-6 col-md-12 border__"
        >
          <div>
            <img :src="project.imageUrl" heigh="400" width="100%" />
          </div>
          <h3 v-html="project.title"></h3>
          <div class="content__text">
            <p v-html="project.description"></p>
          </div>
        </div>
      </div>
    </div>
  </body>
</template>

<script>
export default {
  data: () => {
    return {
      projects: [
        {
          title:
            "Participatory Development of Climate Resilience and Vulnerability Protocols in Ngorongoro District Tanzania",
          imageUrl: "Project/hendrik-cornelissen-qs4E9t0hJc0-unsplash.jpg",
          description:
            "Discover how we&#39;re helping vulnerable communities in Tanzania adapt to climate change and protect their livelihoods with our innovative Climate Change Adaptation Toolkit (CCA Toolkit). <br/><br/> At present, climate change and its devastating effects are wreaking havoc on the indigenous communities of Tanzania. Without a regular assessment tool to measure vulnerability and awareness solutions to counteract its effects, these communities are left at a disadvantage.<br/></br> That&#39;s where we come in. TEST is spearheading a groundbreaking project aimed at creating a baseline for climate change vulnerability assessments and adaptation in Ngorongoro district. The project will build capacity in the local Maasai communities and stakeholders to apply the toolkit to their division and to eventually comply with the worldwide TESSA Toolkit for Ecosystem Service Site-based Assessment. <br/> <br/> With traditional economies heavily reliant on natural resources, recurrent climate patterns, such as droughts, erratic rainfall, and floods, have caused significant negative impacts on community assets and livelihoods. We understand the central role of pastoral communities in the face of climate change and are implementing Participatory Development of Climate Resilience and Vulnerability Protocols in Loliondo and Sale to counteract this trend. <br/> <br>Thanks to funding from the Australian Volunteers International (AVI) through Impact Funds, we&#39;remaking a significant impact in helping communities adapt to climate change and build resilience for the future. Join us in making a difference today! <br/> Are you passionate about preserving indigenous knowledge and cultural values? Join us in our mission to promote sustainable natural resources management and safeguard the unique knowledge of the Maasai people.",
        },
        {
          title: "Preservation of Indigenous Knowledge",
          imageUrl: "Project/sofia-zubiria-WemSSnsDFYw-unsplash.jpg",
          description:
            "Indigenous knowledge is intrinsic to a particular culture or society and is often passed down orally from generation to generation. However, this knowledge is at risk of being lost in today&#39;s modern world, which is why we&#39;re committed to documenting and preserving these practices.<br/><br/> Through our innovative project, we&#39;ll document and produce in print and video the best practices of the Maasai people that contribute significantly to ecological and cultural resilience. We&#39;ll conduct interviews with elders, women, and youth on the rituals and practices of the indigenous Maasai people, and compile the responses in the form of a captivating video documentary. <br/><br/> Our final documentary will be disseminated to the public through Loliondo FM Community radio, raising awareness of the importance of indigenous knowledge and its contribution to the preservation of the environment and ecology, livelihoods, and conservation.<br/><br/> TEST is dedicated to safeguarding the unique knowledge of the Maasai people, and we&#39;re excited to embark on this journey of preserving indigenous knowledge. Join us today in our mission to preserve and promote cultural values that enhance sustainable natural resources management. This project is proudly funded by the Global Greengrants Fund (GGF).",
        },
        {
          title: "OLMAA Art Centre",
          imageUrl: "Project/OLMAA.png",
          description:
            "Introducing OLMAA Art Centre, the social enterprise that&#39;s revolutionizing community development! With TEST&#39;s support, this innovative project empowers youth and women while revitalizing the local economy through a unique combination of income-generating activities and capacity building.<br/><br/> At TEST, we believe that OLMAA will bring the social interaction and engagement which are essential for a vibrant community. That&#39;s why we provide a platform for youth and women to learn valuable skills and diversify their economic opportunities, creating a sustainable future for all.<br/><br/> As experts in community development, TEST is committed to working alongside OLMAA in its initial stages of growth to ensure its success. By supporting this exciting initiative, you can be a part of the movement to empower youth and women in your community and create a brighter future for everyone.",
        },
        {
          title: "A community radio known as Loliondo FM (107.7 MHz)",
          imageUrl: "Project/LoliondoFM.jpeg",
          description:
            "Welcome to Loliondo Community Radio, the only radio station in the entire district of Ngorongoro, serving a population of 200,000 people across four districts - Ngorongoro, Tarime, Serengeti, and Narok, Kenya. Our radio station is situated in Wasso, the Ngorongoro district headquarters, and is an amplifier of community voices and a catalyst for change.<br/><br/> Welcome to Loliondo Community Radio, the only radio station in the entire district of Ngorongoro, serving a population of 200,000 people across four districts - Ngorongoro, Tarime, Serengeti, and Narok, Kenya. Our radio station is situated in Wasso, the Ngorongoro district headquarters, and is an amplifier of community voices and a catalyst for change.<br/><br/>In addition to our commitment to reflecting the community&#39;s voice, we also strive to encourage open dialogue and democratic processes by providing an independent platform for interactive discussions about matters of importance to the community. Through our radio shows, we aim to promote social change and development and inspire good governance and civil society by playing a watchdog role that holds local authorities and politicians accountable for their public responsibilities.",
        },
        {
          title:
            "Co-developing Data Technology for Inclusive Conservation in the Eastern Serengeti.",
          imageUrl: "Project/loliondo.png",
          description:
            "Looking to make a meaningful impact in the Eastern Serengeti? TEST is proud to present our latest project: Co-developing Data Technology for Inclusive Conservation. <br/><br/> Over the course of one year, we&#39;ll be working alongside local communities to develop a mobile app and data collection and management protocols. By collaborating with indigenous people, we aim to provide better tools for wildlife monitoring and livestock grazing strategies, as well as protected areas management.<br/><br/>Thanks to funding from the Centre for Indigenous Conservation and Development Alternatives(CICADA) at the University of McGill, Canada, we&#39;re able to take on this exciting project. <br/><br/>Join us in supporting inclusive conservation efforts in the Eastern Serengeti. Together, we can work towards a sustainable future for both wildlife and local communities.<br/><br/>Join us in our mission to promote community development and empower voices that are often unheard. Tune in to Loliondo Community Radio and be a part of the conversation.",
        },
        {
          title:
            "Twiga Wetu: Masai Giraffe Conservation Outside Protected Areas – the Role of Indigenous Knowledge and Traditional Systems.",
          imageUrl: "Project/dawn-w-7HRIezBz8NI-unsplash.jpg",
          description:
            "Are you looking for a conservation project that values indigenous knowledge and traditional systems?<br/> Welcome to Twiga Wetu, a project supported by TEST and funded by the Giraffe Conservation Foundation. Our goal i to revitalize the conservation of the Masai giraffe in the eastern Serengeti Ecosystem.<br/><br/>By involving local communities in monitoring and conservation efforts of giraffes, linked with livestock grazin strategies outside protected areas, we aim to promote sustainable and inclusive conservation practices. At Twig Wetu, we believe that indigenous knowledge and traditional systems are crucial to the success of conservatio efforts. By harnessing these resources, we ensure that conservation is both effective and culturally sensitive.<br/><br/>As a project of TEST, we're dedicated to collaborating with local communities to promote conservation practice that benefit everyone. Empowering communities to take an active role in conservation efforts creates a brighte future for the Masai giraffe and the people who share their environment.<br/><br/>Join us in supporting this exciting initiative and be a part of the movement to promote sustainable conservatio practices in the Eastern Serengeti Ecosystem.",
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
@media only screen and (max-width: 900px) {
  .global__height {
    display: none;
  }

  .container {
    h4 {
      padding-top: 3rem;
      margin-bottom: -2rem !important;
    }
  }

  .border__ {
    display: block !important;

    h3 {
      padding: 2rem 0 1rem 0;
    }

    p {
      margin: 0 !important;
      padding: 0.5rem 0;
    }
  }
}

body {
  background: #ddd;
  padding: 2rem 0 6rem 0;

  .row {
    margin: auto;
  }

  .image {
    border: 1px solid #30303011;
  }

  .border__ {
    display: grid;
    grid-template-columns: 2fr;
    padding: 1rem 0;

    p {
      font-size: 1.6rem;
      color: #303030 !important;
    }

    img {
      width: 100%;
      padding: 2rem;
    }
  }

  h3 {
    margin: 0;
    font-size: 1.6em;
    line-height: 1.5;
    padding-bottom: 1rem;
  }

  h4 {
    color: #505050;
    margin: 0;
    padding: 0;
  }
}
</style>
