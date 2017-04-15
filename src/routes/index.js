import Vue from 'vue';
import VueRouter from 'vue-router';

import { Session } from '../services';

import Dashboard from './dashboard';
import Login from './login';
import Register from './register';

Vue.use(VueRouter);

const router = new VueRouter({
  routes: [
    { path: '/', component: Dashboard, meta: { auth: true } },
    { path: '/login', component: Login },
    { path: '/register', component: Register },
    { path: '*', redirect: '/' },
  ],
});

router.beforeEach((to, from, next) => {
  if (to.matched.some(route => route.meta.auth) && !Session.state.loggedIn) {
    return Session.init()
      .then(() => next())
      .catch(err => next({
        path: '/login',
        query: { redirect: to.fullPath },
      }));
  }

  next();
});

export default router;
