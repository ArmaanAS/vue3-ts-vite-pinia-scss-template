import { createRouter, createWebHistory } from "vue-router";
import Page2 from "./views/Page2.vue";
import Home from "./views/Home.vue";

const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/page2', name: 'Page2', component: Page2 },
];

export const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});