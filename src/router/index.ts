import { createRouter, createWebHistory } from 'vue-router'
import NotDefinedView from '../views/NotDefinedView.vue'
import HomeView from '../views/HomeView.vue'
import RotatingBorderView from '../views/elements/RotatingBorderView.vue'
import PolaDotsBackground from '../views/elements/PolkaDotsBackgroundView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: NotDefinedView
    },
    {
      path: '/homeVue',
      name: 'homeVue',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/rotatingBorder',
      name: 'rotatingBorder',
      component: RotatingBorderView
    },

    {
      path: '/polkaDotBakground',
      name: 'polkaDotBackground',
      component: PolaDotsBackground
    }
  ]
})

export default router
