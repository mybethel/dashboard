import Vue from 'vue';

import Spinner from './spinner';
import TopBar from './topbar';

Vue.component('spinner', Spinner);
Vue.component('top-bar', TopBar);

export {
  Spinner,
  TopBar,
};
