import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import FilmDetail from '../views/FilmDetail.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/film/:id',
    name: 'FilmDetail',
    component: FilmDetail
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
