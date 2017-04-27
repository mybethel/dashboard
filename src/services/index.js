import Vue from 'vue';
import VueResource from 'vue-resource';

Vue.use(VueResource);

Vue.http.interceptors.push(function(request, next) {
  request.headers.set('Authorization', `JWT ${localStorage.getItem('token')}`);

  next(function(response) {
    // @TODO: Intercept 401 or 403 responses and redirect to login.
  });
});

import Session from './session';

export {
  Session,
};
