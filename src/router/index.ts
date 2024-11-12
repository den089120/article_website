import { createRouter, createWebHistory } from 'vue-router';
import Main from "@/pages/Main.vue";
import {RouterPaths} from "./routerPaths";
import NotFoundPage from "@/pages/NotFoundPage.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: RouterPaths.Main,
      // name: 'home',
      component: Main
    },
    {
      path: RouterPaths.About,
      // name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('@/pages/About.vue')
    },
    {
      path: RouterPaths.NotFound,
      name: 'NotFoundPage',
      component: NotFoundPage
    }
  ]
})

export default router
