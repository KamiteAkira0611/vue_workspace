import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

function loadView (view) {
  return () => import(/* webpackChunkName: "view-[request]" */ `./components/${view}.vue`)
}

export default new Router({
  mode: 'history',
  routes: [
    { path: '/', component: loadView("HelloWorld") },
    { path: '/user_modal', component: loadView("UserModal") }
  ]
})
