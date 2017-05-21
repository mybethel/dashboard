import Vue from 'vue';
import VueResource from 'vue-resource';

import store from '../store';

import { API_ROOT } from '../config';

Vue.use(VueResource);

Vue.http.interceptors.push(function(request, next) {
  request.headers.set('Authorization', `JWT ${localStorage.getItem('token')}`);

  next(function(response) {
    if (response.status === 401) {
      store.dispatch('session/logout');
    };
  });
});

export let User = Vue.resource('user{/id}', {}, {
  ministries: { method: 'GET', url: 'user{/id}/ministries' },
}, { root: API_ROOT });

export default {
  get(endpoint) {
    return Vue.http.get(`${API_ROOT}/${endpoint}`);
  },
  post(endpoint, payload) {
    return Vue.http.post(`${API_ROOT}/${endpoint}`, payload);
  },
};
