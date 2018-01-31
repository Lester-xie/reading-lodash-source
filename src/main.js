// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

import 'materialize-css/dist/css/materialize.min.css'
import 'vue-highlightjs/node_modules/highlight.js/styles/atom-one-light.css'

// Import Vue and vue-highlgihtjs
import VueHighlightJS from 'vue-highlightjs'


// Tell Vue.js to use vue-highlightjs

import 'vue-awesome/icons/github'
import Icon from 'vue-awesome/components/Icon'
Vue.component('icon', Icon)

import Post from '@/components/Post.vue'
Vue.component('post', Post)

Vue.use(VueHighlightJS)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  data: {
    paths: router.paths
  },
  components: { App },
  template: '<App :paths="paths"/>'
})
