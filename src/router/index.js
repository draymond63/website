import Vue from 'vue'
import VueRouter from 'vue-router'

import HomePage from '../views/HomePage.vue'
import AboutPage from '../views/AboutPage.vue'
import ProjectsPage from '../views/ProjectsPage.vue'
import ChumpPage from '../views/ChumpPage.vue'
import AndroPage from '../views/AndroPage.vue'

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
    component: AboutPage
  },
  {
    path: '/projects',
    name: 'Overview',
    component: ProjectsPage
  },
  {
    path: '/chump',
    name: 'CHUMP',
    component: ChumpPage
  },
  {
    path: '/bnn',
    name: 'BNN Processor',
    component: AndroPage
  }
]

const router = new VueRouter({
  routes
})
export default router
