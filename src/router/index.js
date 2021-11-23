import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home";
import Work from "../views/Work";
import Approach from '../views/Approach.vue'
import Volunteer from '../views/Volunteer.vue'
import About from '../views/About.vue'
import Yannick from '../views/Yannick.vue'
import Evelyn from '../views/Evelyn.vue'
import Marco from '../views/Marco.vue'
import Isaac from '../views/Isaac.vue'
import Elias from '../views/Elias.vue'
import News from '../views/News.vue'
import Lilian from '../views/Lilian.vue'
import Lekumok from '../views/Lekumok.vue'
import Jopha from '../views/Jopha.vue'
import Emanuel from '../views/Emanuel.vue'
import Reports from '../views/Media/Reports.vue'
import Gallery from '../views/Media/Gallery.vue'
import Videos from '../views/Media/Videos.vue'
import Blog from '../views/Media/Blog.vue'


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
    path: '/volunteer',
    name: 'Volunteer',
    component: Volunteer
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
{
    path: '/news',
    name: 'News',
    component: News
},
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
{
    path: '/reports',
    name: 'Reports',
    component: Reports
},
{
    path: '/gallery',
    name: 'Gallery',
    component: Gallery
},
{
    path: '/videos',
    name: 'Videos',
    component: Videos
},
{
    path: '/blog',
    name: 'Blog',
    component: Blog
},

];

const router = new VueRouter({
    mode: "history",
    base: process.env.BASE_URL,
    routes,
});

export default router;