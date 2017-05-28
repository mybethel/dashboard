import Vue from 'vue';
import { mapGetters } from 'vuex';

import router from './routes';
import store from './store';

import './components';

new Vue({
  computed: mapGetters({
    isLoggedIn: 'session/isLoggedIn',
  }),
  store,
  router,
  watch: {
    isLoggedIn: function(isLoggedIn) {
      if (!isLoggedIn) this.$router.push('/login');
    },
  },
}).$mount('#app');
