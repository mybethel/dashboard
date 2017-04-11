import Vue from 'vue';
import VueResource from 'vue-resource';
import { API_ROOT } from '../config';

Vue.use(VueResource);

export default {

  state: {
    loggedIn: false,
    user: {},
    ministry: {},
  },

  _isAdmin: false,

  init() {
    if (this.state.user._id) return Promise.resolve(this.state.user);

    let token = localStorage.getItem('token');
    if (!token) return Promise.reject('no token');

    return Vue.http.post(`${API_ROOT}/user/auth`, {}).then(response => {
      localStorage.setItem('token', response.body.token);
      this.state.loggedIn = true;
      this.state.user = response.body.data;
      return Vue.http.get(`${API_ROOT}/ministry/${this.state.user.ministry}`);
    }).then(response => {
      this.state.ministry = response.body.data;
      return true;
    }).catch(err => {
      throw new Error('expired token');
    });
  },

  login(email, password) {
    return Vue.http.post(`${API_ROOT}/user/auth`, { email, password }).then(response => {
      localStorage.setItem('token', response.body.token);
      this.state.loggedIn = true;
      return response.body.token;
    });
  },

  logout() {
    localStorage.removeItem('token');
    this.state.loggedIn = false;
    this.state.user = {};
    this.state.ministry = {};
  },

};
