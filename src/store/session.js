import API from '../api';

const state = {
  loggedIn: false,
  user: {},
  ministry: {},
};

const getters = {
  hasRole: (state, getters) => role => {
    return getters.isLoggedIn && state.user.permission === role;
  },
  isAdmin(state, getters) {
    return getters.hasRole('admin');
  },
  isLoggedIn(state, getters) {
    return !!getters.userId;
  },
  ministryId(state) {
    return state.ministry._id;
  },
  userId(state) {
    return state.user._id;
  },
};

const actions = {
  init({ dispatch, getters }) {
    if (getters.isLoggedIn) Promise.reject();
    let token = localStorage.getItem('token');
    if (!token) return Promise.reject();
    return dispatch('login');
  },
  login({ commit, dispatch, state }, auth) {
    return API.post('user/auth', auth).then(response => {
      localStorage.setItem('token', response.body.token);
      commit('setUser', response.body.data);
      return API.get(`ministry/${state.user.ministry}`);
    }).then(response => {
      commit('setMinistry', response.body.data);
      return true;
    }).catch(err => {
      dispatch('logout');
      throw new Error('invalid');
    });
  },
  logout({ commit }) {
    localStorage.removeItem('token');
    commit('setUser', {});
    commit('setMinistry', {});
  },
};

const mutations = {
  setMinistry(state, ministry) {
    state.ministry = ministry;
  },
  setUser(state, user) {
    state.user = user;
  },
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
