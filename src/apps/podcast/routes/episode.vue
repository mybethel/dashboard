<script>
import { Media } from '../../../api';

export default {
  data() {
    return {
      media: {},
    };
  },
  methods: {
    init() {
      Media.get({ id: this.episodeId }).then(response => {
        this.media = response.body.data;
      });
    },
  },
  mounted() {
    this.init();
  },
  props: ['episodeId'],
  watch: {
    $route: 'init',
  },
};
</script>

<template>
  <section>
    <div>
      <h1>{{ media.name }}</h1>
    </div>
    <footer>
      <button class="destructive icon"><icon glyph="delete" /></button>
      <div>
        <router-link :to="{ name: 'podcast', params: { id: media.podcast } }" tag="button" class="secondary">Cancel</router-link>
        <button>Save Changes</button>
      </div>
    </footer>
  </section>
</template>

<style lang="scss" scoped>
  section {
    display: flex;
    flex: 1;
    flex-direction: column;
    justify-content: space-between;
    > div {
      margin-bottom: auto;
      padding: 16px;
    }
  }
  footer {
    background: #FFF;
    border-top: 1px solid #EEE;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 8px;
    button {
      display: block;
      margin: 8px;
      white-space: nowrap;
      &.destructive {
        width: auto;
      }
    }
    div {
      display: flex;
      flex-direction: row;
    }
  }
</style>
