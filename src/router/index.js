import Vue from 'vue'
import VueRouter from 'vue-router'

import HomePage from '../views/HomePage.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomePage,
    meta: {
      title: 'Home Page - Example App',
      metaTags: [
        {
          name: 'description',
          content: 'The home page of our example app.'
        },
        {
          property: 'og:description',
          content: 'The home page of our example app.'
        }
      ]
    }
  },
  {
    path: '/about',
    name: 'About Me',
    // Lazy importing
    component: () => import('../views/AboutPage.vue')
  },
  {
    path: '/projects',
    name: 'Overview',
    component: () => import('../views/ProjectsPage.vue')
  },
  {
    path: '/chump',
    name: 'CHUMP',
    component: () => import('../views/ChumpPage.vue')
  },
  {
    path: '/bnn',
    name: 'BNN Processor',
    component: () => import('../views/AndroPage.vue')
  },

  {
    path: '/careers',
    name: 'Career Mapping',
    component: () => import('../views/CareerPage.vue')
  },
  {
    path: '/blimpadventuresyaaay',
    name: 'Blimp Adventures',
    component: () => import('../views/BlimpPage.vue')
  },
  {
    path: '*',
    redirect: '/'
  }
]

const router = new VueRouter({
  // mode: "history",
  routes
})
export default router
