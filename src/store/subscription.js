import API from '../api';

const state = {
  data: {},
};

const getters = {
  cardType(state, getters) {
    if (!getters.defaultCard) return;
    return getters.defaultCard.brand.toLowerCase();
  },
  card(state, getters) {
    if (!getters.defaultCard) return;
    return `${getters.defaultCard.brand} ending in ${getters.defaultCard.last4}`;
  },
  defaultCard(state) {
    if (!state.data.sources || !state.data.sources.data[0]) return;
    return state.data.sources.data[0];
  },
  estimate(state) {
    if (!state.data.subscriptions) return '$0';
    let cost = state.data.subscriptions.data.map(subscription => subscription.plan.amount).reduce((total, num) => total + num, 0);
    return `$${cost / 100}`;
  },
  hasSubscription: (state, getters) => plan => {
    if (!state.data.id) return false;
    return getters.subscriptions.indexOf(plan) >= 0;
  },
  subscriptions(state) {
    if (!state.data.subscriptions) return [];
    return state.data.subscriptions.data.map(subscription => subscription.plan.id);
  },
};

const actions = {
  addPlan({ dispatch, rootGetters }, plan) {
    if (!plan) return;
    API.put(`subscription/${rootGetters['session/ministryId']}`, {
      customer: state.data.id,
      plan,
    }).then(response => {
      dispatch('init');
    }).catch(err => console.error(err));
  },
  create({ dispatch, rootGetters }, token) {
    API.post('subscription', {
      id: rootGetters['session/ministryId'],
      token,
    }).then(() => dispatch('init'));
  },
  init({ commit, rootGetters }, ministryId) {
    ministryId = ministryId || rootGetters['session/ministryId'];
    API.get(`subscription/${ministryId}`).then(response => {
      commit('setSubscription', response.body);
    }).catch(err => {
      commit('setSubscription', {});
      console.warn('No subscription data.');
    });
  },
};

const mutations = {
  setSubscription(state, subscription) {
    state.data = subscription;
  },
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
