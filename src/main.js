import Vue from 'vue';

import { Session } from './services';

import './components';
import router from './routes';

new Vue({
  data: {
    session: Session.state,
  },
  router,
}).$mount('#app');
