import Vue from 'vue';
import Vuex from 'vuex';

import ministry from './ministry';
import podcast from './podcast';
import session from './session';
import subscription from './subscription';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    ministry,
    podcast,
    session,
    subscription,
  },
});
