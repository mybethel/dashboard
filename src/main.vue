<script>
import Vue from 'vue';
import VeeValidate from 'vee-validate';
import { mapGetters } from 'vuex';

Vue.use(VeeValidate, {
  enableAutoClasses: true,
});

import router from './routes';
import store from './store';

export default {
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
};
</script>

<template>
  <div id="app">
    <top-bar v-if="$store.getters['session/isLoggedIn']" :user="$store.state.session.user" :ministry="$store.state.ministry.data"></top-bar>
    <router-view></router-view>
  </div>
</template>
