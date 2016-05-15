import Vue from 'vue'
import './common/config'
import './common/plugin'
import App from './App'
import VueRouter from 'vue-router'
import { configRouter } from './common/router'
Vue.use(VueRouter)
const router = new VueRouter()
configRouter(router)
router.start(App, '#admin')
