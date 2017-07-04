import autosize from 'autosize';
import Vue from 'vue';

import Alert from './alert';
import AppIcon from './app-icon';
import AppMenu from './app-menu';
import Panel from './panel';
import Sparkline from './sparkline';
import Spinner from './spinner';
import TopBar from './topbar';

Vue.component('alert', Alert);
Vue.component('app-icon', AppIcon);
Vue.component('app-menu', AppMenu);
Vue.component('panel', Panel);
Vue.component('sparkline', Sparkline);
Vue.component('spinner', Spinner);
Vue.component('top-bar', TopBar);

Vue.directive('autosize', {
  bind: el => autosize(el),
  componentUpdated: el => autosize.update(el),
  unbind: el => autosize.destroy(el),
});

export {
  Alert,
  AppIcon,
  AppMenu,
  Panel,
  Sparkline,
  Spinner,
  TopBar,
};
