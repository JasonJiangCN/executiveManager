//basic
import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
import App from './App.vue'
import axios from 'axios'
import VueRouter from 'vue-router'

//components
import index from './components/index.vue'
import login from './components/login.vue'




Vue.prototype.$http = axios
Vue.use(VueRouter)
Vue.use(ElementUI)


const routes = [
    { path: '/index', component: index },
    { path: '/login', component: login}

]
const router = new VueRouter({
    routes
})

new Vue({
  el: '#app',
  render: h => h(App),
  router
})
