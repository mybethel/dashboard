import API from '../api';

const state = {
  data: {},
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
