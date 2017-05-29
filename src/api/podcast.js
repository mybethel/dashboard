import Vue from 'vue';
import VueResource from 'vue-resource';

Vue.use(VueResource);

import { API_ROOT } from '../config';

export default {

  _API: Vue.resource('podcast{/id}{?ministry}', {}, {
    media: { method: 'GET', url: 'podcast{/id}/media?sort=-date' },
    performance: { method: 'GET', url: 'podcast{/id}/performance' },
  }, { root: API_ROOT }),

  init(ministry) {
    return this._API.get({ ministry })
      .then(response => response.body.data);
  },

  get(podcastId) {
    return this._API.get({ id: podcastId })
      .then(response => response.body.data);
  },

  episodes(podcastId) {
    return this._API.media({ id: podcastId })
      .then(response => response.body.data);
  },

  performance(podcastId) {
    return this._API.performance({ id: podcastId })
      .then(response => {
        let result = response.body;
        return Vue.http.get(result.subscribers).then(response => {
          result.subscribers = response.body.result;
          return result;
        });
      }).catch(console.error);
  },

  update(podcastId, payload) {
    return this._API.update({ id: podcastId }, payload)
      .then(response => response.body.data);
  },

};
