import Vue from 'vue'
import VueRouter from 'vue-router'
import Layout from '@/views/Layout'

const Home = () => import('@/views/Home')
const Search = () => import('@/views/Search')
const Information = () => import('@/views/Information')
const Mine = () => import('@/views/Mine')
const Login = () => import('@/views/Login')

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: Layout,
    redirect: '/home',
    children: [
      { path: '/home', name: 'home', component: Home },
      { path: '/search', name: 'search', component: Search },
      { path: '/information', name: 'information', component: Information },
      { path: '/mine', name: 'mine', component: Mine }
    ]
  },
  { path: '/login', component: Login }
]

const router = new VueRouter({
  routes
})

export default router
