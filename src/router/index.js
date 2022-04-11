import { createRouter, createWebHistory } from 'vue-router'
import Home from '/src/pages/Home.vue'
import About from '/src/pages/About.vue'
import Work from '/src/pages/Work.vue'
import Contact from '/src/pages/Contact.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/about',
    name: 'About',
    component: About,
  },
  {
    path: '/work',
    name: 'Work',
    component: Work,
  },
  {
    path: '/contact',
    name: 'Contact',
    component: Contact,
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
