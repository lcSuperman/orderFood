// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import 'lib-flexible'
import store from './store'
import {
  Style,
  Dialog,
  Button,
  Toast
} from 'cube-ui'

Vue.config.productionTip = false
Vue.use(Dialog)
Vue.use(Toast)
Vue.use(Button)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
