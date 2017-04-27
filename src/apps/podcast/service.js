import Vue from 'vue';
import VueResource from 'vue-resource';
import { API_ROOT } from '../../config';

Vue.use(VueResource);

const Podcast = Vue.resource('podcast{/id}{?ministry}', {}, {
  performance: { method: 'GET', url: 'podcast{/id}/performance' },
}, { root: API_ROOT });

export default {

  state: {
    all: [],
  },

  init(ministry) {
    return Podcast.get({ ministry })
      .then(response => response.body.data);
  },

  get(podcastId) {
    return Podcast.get({ id: podcastId })
      .then(response => response.body.data);
  },

  performance(podcastId) {
    return Podcast.performance({ id: podcastId })
      .then(response => {
        let result = response.body;
        return Vue.http.get(result.subscribers).then(response => {
          result.subscribers = response.body.result;
          return result;
        });
      }).catch(console.error);
  },

  update(podcastId, payload) {
    return Podcast.update({ id: podcastId }, payload)
      .then(response => response.body.data);
  },

};
