import Vue from 'vue'
import App from './App.vue'
import sustainStore from './store';

Vue.config.productionTip = false

new Vue({
  store: sustainStore,
  render: h => h(App),
}).$mount('#app')
