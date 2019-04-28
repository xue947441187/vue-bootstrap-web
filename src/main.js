// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import top from './top/top'
import $ from 'jquery'
import jquery from "jquery"
import "../node_modules/popper.js/dist/popper"
import '../node_modules/bootstrap/dist/js/bootstrap.min'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'

Vue.config.productionTip = false

Vue.component('top',top)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App, },
  template: '<App/>'
})
