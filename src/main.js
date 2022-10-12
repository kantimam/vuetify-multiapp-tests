import Vue from 'vue'
import App from './App.vue'
import HeaderApp from './HeaderApp.vue'
import Vuetify from 'vuetify/lib/framework';

Vue.config.productionTip = false


Vue.use(Vuetify);

new Vue({
  vuetify: new Vuetify({
  }),
  render: h => h(App),
}).$mount('#app')

new Vue({
  vuetify: new Vuetify({
  }),
  render: h => h(HeaderApp)
}).$mount('#v-head')


