import Vue from 'vue'
import App from './App.vue'

/**BOOTSTRAP**/
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
/**BOOTSTRAP**/

/**axios**/
import axios from 'axios'
/**axios**/

/**FONTAWESOME**/
import { library } from '@fortawesome/fontawesome-svg-core'
import { faUserSecret } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
library.add(faUserSecret)
/**END FONTAWESOME**/

import router from "./components/routes";

Vue.component('font-awesome-icon', FontAwesomeIcon)
Vue.config.productionTip = false
Vue.use(BootstrapVue)
Vue.use(IconsPlugin)
Vue.use(axios)

new Vue({
  render: h => h(App),
  router
}).$mount('#app')

/* eslint-disable no-new */
//new Vue({
 // el: '#app',
 // components: { App },
 // template: '<App/>'
//})
