import Vue from 'vue'
import App from './App.vue'
import router from './router'
import BootstrapVue from 'bootstrap-vue'
import VueCompositionApi from '@vue/composition-api'

import './assets/styles/styles.scss'

Vue.config.productionTip = false

Vue.use(BootstrapVue)
Vue.use(VueCompositionApi)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
