import autosize from 'autosize';
import Vue from 'vue';

import Alert from './alert';
import AppIcon from './app-icon';
import AppMenu from './app-menu';
import Icon from './icon';
import Panel from './panel';
import Sparkline from './sparkline';
import Spinner from './spinner';
import Stripe from './stripe';
import TopBar from './topbar';
import Uploader from './uploader';

Vue.component('alert', Alert);
Vue.component('app-icon', AppIcon);
Vue.component('app-menu', AppMenu);
Vue.component('icon', Icon);
Vue.component('panel', Panel);
Vue.component('sparkline', Sparkline);
Vue.component('spinner', Spinner);
Vue.component('stripe', Stripe);
Vue.component('top-bar', TopBar);
Vue.component('uploader', Uploader);

Vue.directive('autosize', {
  bind: el => autosize(el),
  componentUpdated: el => autosize.update(el),
  inserted: el => autosize.update(el),
  unbind: el => autosize.destroy(el),
});

export {
  Alert,
  AppIcon,
  AppMenu,
  Panel,
  Sparkline,
  Spinner,
  Stripe,
  TopBar,
  Uploader,
};
