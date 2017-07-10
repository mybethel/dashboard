import API from '../api';

const state = {
  data: {},
};

const getters = {
  hasSubscription: state => plan => {
    if (!state.data.id) return false;
    return true;
  },
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
};

const actions = {
  create({ dispatch, rootGetters }, token) {
    API.post('subscription', {
      id: rootGetters['session/ministryId'],
      token,
    }).then(() => dispatch('init'));
  },
  init({ commit }, ministryId) {
    if (!ministryId) return;
    API.get(`subscription/${ministryId}`).then(response => {
      commit('setSubscription', response.body);
    }).catch(err => console.warn('No subscription data.'));
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
