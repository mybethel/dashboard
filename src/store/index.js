import Vue from 'vue';
import Vuex from 'vuex';

import podcast from './podcast';
import session from './session';
import subscription from './subscription';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    podcast,
    session,
    subscription,
  },
});
