import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home';
const routes = [
  {
    path:"/",
    redirect:"/home"
  },
  {
    path:"/home",
    name:"home",
    component:Home
  },
  {
    path:"/login",
    name:"login",
    component:() => import ("@/views/Login.vue")
  },
  {
    path:"/category",
    name:"category",
    component:() => import ("@/views/Category.vue")
  },
  {
    path:"/cart",
    name:"cart",
    component:() => import ("@/views/Cart.vue")
  },
  {
    path:"/user",
    name:"user",
    component:() => import ("@/views/User.vue")
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
