import autosize from 'autosize';
import Vue from 'vue';

import AppMenu from './app-menu';
import Sparkline from './sparkline';
import Spinner from './spinner';
import TopBar from './topbar';

Vue.component('app-menu', AppMenu);
Vue.component('sparkline', Sparkline);
Vue.component('spinner', Spinner);
Vue.component('top-bar', TopBar);

Vue.directive('autosize', {
  bind: el => autosize(el),
  componentUpdated: el => autosize.update(el),
  unbind: el => autosize.destroy(el),
});

export {
  AppMenu,
  Sparkline,
  Spinner,
  TopBar,
};
