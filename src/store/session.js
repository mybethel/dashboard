import API from '../api';

const state = {
  loggedIn: false,
  user: {},
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
  name(state) {
    return state.user.name;
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
      Intercom('update', {
        created_at: response.body.data.createdAt,
        email: response.body.data.email,
        name: response.body.data.name,
        user_id: response.body.data._id,
      });
      return dispatch('ministry/init', state.user.ministry, { root: true });
    }).catch(err => {
      dispatch('logout');
      throw new Error('invalid');
    });
  },
  logout({ commit }) {
    localStorage.removeItem('token');
    commit('setUser', {});
    commit('ministry/setMinistry', {}, { root: true });
    Intercom('shutdown');
  },
};

const mutations = {
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
