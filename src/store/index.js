// store/index.js
import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const isAuthenticated = localStorage.getItem('isAuthenticated') === 'true';

export default new Vuex.Store({
  state: {
    isAuthenticated,
  },
  mutations: {
    setAuthenticated(state, isAuthenticated) {
      state.isAuthenticated = isAuthenticated;
      localStorage.setItem('isAuthenticated', isAuthenticated);
    },
    clearAuthentication(state) {
      state.isAuthenticated = false;
      localStorage.removeItem('isAuthenticated');
    },
  },
});
