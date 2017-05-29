import findIndex from 'lodash.findindex';

import { Podcast } from '../api';

const PODCAST_TYPE_AUDIO = 1;
const PODCAST_TYPE_VIDEO = 2;
const PODCAST_SOURCE_BETHEL = 1;
const PODCAST_SOURCE_VIMEO = 2;

const state = {
  media: [],
  meta: {},
};

const getters = {
  episode: state => episodeId => {
    let index = findIndex(state.media, { _id: episodeId });
    if (index < 0) return {};
    return state.media[index];
  },
  isAudio(state) {
    return state.meta.type === PODCAST_TYPE_AUDIO;
  },
  isBethel(state) {
    return state.meta.source === PODCAST_SOURCE_BETHEL;
  },
  isVideo(state) {
    return state.meta.type === PODCAST_TYPE_VIDEO;
  },
  isVimeo(state) {
    return state.meta.source === PODCAST_SOURCE_VIMEO;
  },
  type(state) {
    return state.meta.type === PODCAST_TYPE_AUDIO ? 'Audio' : 'Video';
  },
};

const actions = {
  init({ commit }, podcastId) {
    commit('setPodcast', {});
    commit('setMedia', []);
    Podcast.get(podcastId).then(podcast => {
      commit('setPodcast', podcast);
      Podcast.episodes(podcastId).then(episodes => {
        commit('setMedia', episodes);
      });
    });
  },
};

const mutations = {
  setPodcast(state, podcast) {
    state.meta = podcast;
  },
  setMedia(state, media) {
    state.media = media;
  },
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
