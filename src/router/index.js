import Vue from 'vue';
import VueRouter from 'vue-router';

import LoginPage from '@/views/LoginPage.vue';
import SignupPage from '@/views/SignupPage.vue';
import HomePage from '@/views/HomePage.vue';
import ChatPage from '@/views/ChatPage.vue';
import store from '@/store';

Vue.use(VueRouter);

const routes = [
  { path: '/login', component: LoginPage },
  { path: '/signup', component: SignupPage },
  { path: '/', component: HomePage },
  { path: '/chats', component: ChatPage },
];

const router = new VueRouter({
  routes,
  mode: 'history',
});

router.beforeEach((to, from, next) => {
  const isAuthenticated = store.state.isAuthenticated;

  if (to.path === '/logout') {
    store.commit('clearAuthentication');
    next('/login');
  } else if (to.path !== '/login' && !isAuthenticated && to.path !== '/signup') {
    next('/login');
  } else {
    next();
  }
});

export default router;
