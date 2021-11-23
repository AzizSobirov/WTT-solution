import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
// Solutions
import Martech from '../views/solutions/Martech.vue'
import Edtech from '../views/solutions/Edtech.vue'
import Hrtech from '../views/solutions/Hrtech.vue'
// Expertise
import PlatformDev from '../views/expertise/Platform-dev.vue'
import MobileDev from '../views/expertise/Mobile-dev.vue'
// services
import BackendDev from '../views/services/Backend-dev.vue'
import EnterpriseDev from '../views/services/Enterprise-dev.vue'
import FrontendDev from '../views/services/Frontend-dev.vue'
import Startups from '../views/services/Startups.vue'
// 
import About from '../views/About-us.vue'
import Blog from '../views/Blog.vue'
import GetTouch from '../views/Get-touch.vue'
import OurWork from '../views/Our-work.vue'



const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },{
    path: '/martech',
    name: 'Martech',
    component: Martech
  },{
    path: '/edtech',
    name: 'Edtech',
    component: Edtech
  },{
    path: '/hrtech',
    name: 'Hrtech',
    component: Hrtech
  },{
    path: '/platform-dev',
    name: 'Platform Development',
    component: PlatformDev
  },{
    path: '/mobile-dev',
    name: 'Mobile Development',
    component: MobileDev
  },{
    path: '/backend-dev',
    name: 'Backend Development',
    component: BackendDev
  },{
    path: '/frontend-dev',
    name: 'FrontEnd Development',
    component: FrontendDev
  },{
    path: '/enterprise-dev',
    name: 'Enterprise Development',
    component: EnterpriseDev
  },{
    path: '/startups',
    name: 'Startups',
    component: Startups
  },{
    path: '/about',
    name: 'About US',
    component: About
  },{
    path: '/blog',
    name: 'Blog',
    component: Blog
  },{
    path: '/get-touch',
    name: 'Get in Touch',
    component: GetTouch
  },{
    path: '/our-work',
    name: 'Our Work',
    component: OurWork
  },
  // {
  //   path: '/about',
  //   name: 'About',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
