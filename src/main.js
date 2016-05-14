import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import Hello from './components/Hello.vue'
import Home from './components/Home.vue'
Vue.use(VueRouter)
let router = new VueRouter()
router.map({
  '/': {
    component: Home
  },
  '/hello': {
    component: Hello
  }
})
router.start(App, '#admin')
