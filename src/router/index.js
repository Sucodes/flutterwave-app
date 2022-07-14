import { createRouter, createWebHistory } from 'vue-router'
import Bloglisting from '../views/Bloglisting.vue'
import Postdetails from "../views/Postdetails.vue" 

const routes = [
  {
    path: '/',
    name: 'Blog listing',
    component: Bloglisting
  },
  {
    path: '/Postdetails',
    name: 'Post Details',
    component: Postdetails
  }
]
const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router