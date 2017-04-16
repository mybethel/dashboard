import Vue from 'vue';

import AppMenu from './app-menu';
import Spinner from './spinner';
import TopBar from './topbar';

Vue.component('app-menu', AppMenu);
Vue.component('spinner', Spinner);
Vue.component('top-bar', TopBar);

export {
  AppMenu,
  Spinner,
  TopBar,
};
