import API from '../api';

const state = {
  data: {},
  integrations: [],
  locations: [],
  team: [],
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
  getIntegrations({ commit, state }) {
    return API.get(`ministry/${state.data._id}/integration`).then(response => {
      commit('setIntegrations', response.body.data);
      return response.body.data;
    });
  },
  getLocations({ dispatch, getters }, ministryId) {

  },
  getTeam({ commit, dispatch }) {
    return API.get(`user?ministry=${state.data._id}`).then(response => {
      commit('setTeam', response.body.data);
      return true;
    });
  },
  init({ commit, dispatch }, ministryId) {
    return API.get(`ministry/${ministryId}`).then(response => {
      commit('setMinistry', response.body.data);
      dispatch('subscription/init', response.body.data._id, { root: true });
      return true;
    });
  },
  removeIntegration({ commit, dispatch }, integrationId) {
    return API.delete(`integration/${integrationId}`).then(response => {
      console.log(response);
      dispatch('getIntegrations');
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
  setTeam(state, team) {
    state.team = team;
  },
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
