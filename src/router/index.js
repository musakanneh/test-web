import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home";
import Work from "../views/Work";
import Approach from '../views/Approach.vue'
import Contact from '../views/Contact.vue'
import About from '../views/About.vue'
import Yannick from '../views/Yannick.vue'
import Evelyn from '../views/Evelyn.vue'
import Marco from '../views/Marco.vue'
import Isaac from '../views/Isaac.vue'
import Elias from '../views/Elias.vue'

/** Board members starts */
import Lilian from '../views/Lilian.vue'
import Lekumok from '../views/Lekumok.vue'
import Jopha from '../views/Jopha.vue'
import Emanuel from '../views/Emanuel.vue'

/** Board members end */

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
    path: '/approach',
    name: 'Approach',
    component: Approach
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
},
{
    path: '/isaac',
    name: 'Isaac',
    component: Isaac
},
{
    path: '/elias',
    name: 'Elias',
    component: Elias
},

/** Board members starts */
{
    path: '/lilian',
    name: 'Lilian',
    component: Lilian
},
{
    path: '/emanuel',
    name: 'Emanuel',
    component: Emanuel
},
{
    path: '/lekumok',
    name: 'Lekumok',
    component: Lekumok
},
{
    path: '/jopha',
    name: 'Jopha',
    component: Jopha
},
    /** Board members end */

];

const router = new VueRouter({
    mode: "history",
    base: process.env.BASE_URL,
    routes,
});

export default router;