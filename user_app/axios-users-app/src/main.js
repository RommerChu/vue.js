import Vue from 'vue'
import App from './App.vue'

/***INSTALL THIS LINK FROM BOOTSTRAP VUE***/
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import axios from 'axios'


Vue.config.productionTip = false
/***INSTALL TO USE THIS --- THEN GO TO APP.VUE TO USE***/
Vue.use(BootstrapVue)
Vue.use(IconsPlugin)
Vue.use(axios)


new Vue({
  render: h => h(App),
}).$mount('#app')
