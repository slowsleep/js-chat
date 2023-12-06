import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router';
import './index.css'
import App from './App.vue'

import Home from './pages/Home.vue'
import Login from './pages/Login.vue'
import Signup from './pages/Signup.vue'

const routes = [
  { path: '/', name:"Home", component: Home },
  { path: '/login', name:"Login", component: Login },
  { path: '/signup', name:"Signup", component: Signup },
]

const router = createRouter({
  history: createWebHistory(),
  routes, 
})

const app = createApp(App)
app.use(router)
app.mount('#app')
