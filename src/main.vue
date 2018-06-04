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

<style>
html, body, div#app {
  height: 100%;
  min-height: 100%;
}

body {
  background: #f4f6f8;
  color: #1e2126;
  font-family: system-ui;
  font-weight: 300;
  min-width: 1024px;
}

div#app {
  display: flex;
  flex-direction: column;
  & section {
    flex-grow: 1;
    overflow: auto;
    padding: 1.5rem;
    padding-bottom: 6rem;
  }
}

div.locked {
  max-width: 1024px;
  min-width: 1024px;
  margin: 0 auto;
}
</style>
