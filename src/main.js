import Vue from 'vue'
import App from './App.vue'
import router from './router'
import VueAnalytics from 'vue-analytics'

// Tell Vue.js to use vue-highlightjs
import VueHighlightJS from 'vue-highlightjs'
Vue.use(VueHighlightJS)

Vue.config.productionTip = false

// Configuration VueAnalytics
Vue.use(VueAnalytics, {
  id: 'UA-148416481-2',
  router
});

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
