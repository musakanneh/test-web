import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home";
import Work from "../views/Work";
import WorkProcedures from '../views/WorkProcedures.vue'
import Contact from '../views/Contact.vue'
import About from '../views/About.vue'
import Yannick from '../views/Yannick.vue'
import Evelyn from '../views/Evelyn.vue'
import Marco from '../views/Marco.vue'


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
        path: '/how',
        name: 'WorkProcedures',
        component: WorkProcedures
    },
    {
        path: '/contact',
        name: 'Contact',
        component: Contact
    }, {
        path: '/yannick',
        name: 'Yannick',
        component: Yannick
    }, {
        path: '/evelyn',
        name: 'Evelyn',
        component: Evelyn
    }, {
        path: '/marco',
        name: 'Marco',
        component: Marco
    }
];

const router = new VueRouter({
    mode: "history",
    base: process.env.BASE_URL,
    routes,
});

export default router;