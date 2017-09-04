import API from '../api';

const state = {
  data: {},
  integrations: [],
  locations: [],
};

const getters = {
  id(state) {
    return state.data._id;
  },
  name(state) {
    return state.data.name;
  },
};

const actions = {
  getIntegrations({ commit, state }, ministryId) {
    ministryId = ministryId || state.data._id;
    return API.get(`ministry/${ministryId}/integration`).then(response => {
      commit('setIntegrations', response.body.data);
      return response.body.data;
    });
  },
  getLocations({ dispatch, getters }, ministryId) {

  },
  init({ commit, dispatch }, ministryId) {
    return API.get(`ministry/${ministryId}`).then(response => {
      commit('setMinistry', response.body.data);
      dispatch('subscription/init', response.body.data._id, { root: true });
      return true;
    });
  },
  update({ commit, state }, payload) {
    API.put(`ministry/${state.data._id}`, payload).then(response => {
      commit('setMinistry', response.body.data);
    });
  },
};

const mutations = {
  setIntegrations(state, integrations) {
    state.integrations = integrations;
  },
  setMinistry(state, ministry) {
    state.data = ministry;
  },
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
