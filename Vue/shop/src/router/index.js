import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home';
const routes = [
  {
    path:"/",
    redirect:"/home"
    
  },
  {
    path:"/home",
    name:"Home",
    component:Home
  },
  {
    path:"/login",
    name:"login",
    component:() => import ("@/views/Login.vue")
  },
 
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
