import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home";
import Work from "../views/Work";
import Approach from "../views/Approach.vue";
import Volunteer from "../views/Volunteer.vue";
import About from "../views/About.vue";
import Yannick from "../views/Yannick.vue";
import Evelyn from "../views/Evelyn.vue";
import Marco from "../views/Marco.vue";
import Babu from "../views/Babu.vue";
import Elias from "../views/Elias.vue";
import Lilian from "../views/Lilian.vue";
import Lekumok from "../views/Lekumok.vue";
import Jopha from "../views/Jopha.vue";
import Emanuel from "../views/Emanuel.vue";
import Documents from "../views/Media/Documents.vue";
import Gallery from "../views/Media/Gallery.vue";
import Videos from "../views/Media/Videos.vue";
import Projects from "../views/Projects.vue";
import Events from "../views/Events.vue";
import PrivacyPolicy from "../views/PrivacyPolicy.vue";

Vue.use(VueRouter);

const routes = [{
        path: "/",
        name: "Home",
        component: Home,
    },
    {
        path: "/about",
        name: "About",
        component: About,
    },
    {
        path: "/work",
        name: "Work",
        component: Work,
    },
    {
        path: "/approach",
        name: "Approach",
        component: Approach,
    },
    {
        path: "/privacy-policy",
        name: "PrivacyPolicy",
        component: PrivacyPolicy,
    },
    {
        path: "/volunteer",
        name: "Volunteer",
        component: Volunteer,
    },
    {
        path: "/yannick",
        name: "Yannick",
        component: Yannick,
    },
    {
        path: "/evelyn",
        name: "Evelyn",
        component: Evelyn,
    },
    {
        path: "/marco",
        name: "Marco",
        component: Marco,
    },
    {
        path: "/babu",
        name: "Babu",
        component: Babu,
    },
    {
        path: "/elias",
        name: "Elias",
        component: Elias,
    },

    {
        path: "/lilian",
        name: "Lilian",
        component: Lilian,
    },
    {
        path: "/emanuel",
        name: "Emanuel",
        component: Emanuel,
    },
    {
        path: "/lekumok",
        name: "Lekumok",
        component: Lekumok,
    },
    {
        path: "/jopha",
        name: "Jopha",
        component: Jopha,
    },
    {
        path: "/documents",
        name: "Documents",
        component: Documents,
    },
    {
        path: "/gallery",
        name: "Gallery",
        component: Gallery,
    },
    {
        path: "/videos",
        name: "Videos",
        component: Videos,
    },
    {
        path: "/projects",
        name: "Projects",
        component: Projects,
    },
    {
        path: "/events",
        name: "Events",
        component: Events,
    },
];

const router = new VueRouter({
    mode: "history",
    base: process.env.BASE_URL,
    routes,
});

export default router;