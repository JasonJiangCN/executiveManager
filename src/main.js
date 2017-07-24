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
import attSumTable from './components/attSumTable.vue'


//Components Register
Vue.prototype.$http = axios
Vue.use(VueRouter)
Vue.use(ElementUI)

//Routes Configuration
const routes = [
    { path: '/index', component: index },
    { path: '/login', component: login},
    { path: '/attsummary', component: attSumTable}

]
//new Router Instance
const router = new VueRouter({
    routes
})

//The Main Vue Instance
var vm=new Vue({
  el: '#app',
  render: h => h(App),
  router
})
