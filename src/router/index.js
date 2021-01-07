import { createRouter, createWebHashHistory } from 'vue-router';
const Index = () => import('@/views/Index');


const routes = [
  { path: '/', redirect: '/index'},
  { path: '/index', component: Index }
]



const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
