import '@babel/polyfill';
import './styles/custom-bootstrap.scss';
import 'bootstrap';
import Vue from 'vue';
import App from './App.vue';
import router from './router';
import { createProvider } from './vue-apollo';
import store from './store';
import Vuelidate from 'vuelidate';

Vue.config.productionTip = false
Vue.use(Vuelidate);

new Vue({
  store,
  router,
  apolloProvider: createProvider(),
  validations: {},
  created() {
    const isAuthenticated = localStorage.getItem('isAuthenticated') === 'true';
    if (isAuthenticated) {
      this.$store.commit('setAuthenticated', true);
    }
  },
  render: h => h(App)
}).$mount('#app')
