import Vue from 'vue'
import App from './App.vue'
import router from './router'
import AuthPlugin from './plugins/authPlugin.js';

Vue.config.productionTip = false

Vue.use(AuthPlugin);

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
