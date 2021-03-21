import { createRouter, createWebHashHistory } from 'vue-router';
import Home from '../views/Home.vue';
import Fridge from '../views/Fridge.vue';
import Item from '../views/Item.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/fridge',
    name: 'fridge',
    component: Fridge,
  },
  {
    path: '/item/:id?',
    name: 'item',
    component: Item,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
