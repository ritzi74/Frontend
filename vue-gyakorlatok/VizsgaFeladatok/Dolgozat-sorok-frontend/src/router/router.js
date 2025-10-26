import { createRouter, createWebHistory } from 'vue-router'
import Home from '../components/Home.vue'
import BeerList from '../components/BeerList.vue'
import BeerDetails from '../components/BeerDetails.vue'

const routes = [
  { path: '/', component: Home },
  { path: '/beers', component: BeerList },
  { path: '/beer/:id', component: BeerDetails, props: true }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router

