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
      this.media = {};
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
    <iframe :src="'https://embed.bethel.io/' + episodeId" />
    <div>
      <h1>{{ media.name }}</h1>
      <label :class="{ invalid: errors.has('name'), pristine: media.name && media.name.length > 0, valid: fields.name && fields.name.dirty }">
        <input name="name" v-model="media.name" v-validate="'required'" type="text" />
        <span>Episode title</span>
      </label>
      <label :class="{ invalid: errors.has('date'), pristine: media.date, valid: fields.date && fields.date.dirty }">
        <input name="date" v-model="media.date" v-validate="'required'" type="text" />
        <span>Publish date</span>
      </label>
      <label :class="{ invalid: errors.has('description'), pristine: media.description, valid: fields.description && fields.description.dirty }">
        <textarea name="description" v-autosize v-model="media.description" v-validate="'required'"></textarea>
        <span>Description</span>
      </label>
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
      overflow-y: auto;
      padding: 16px;
    }
  }
  iframe {
    border: 0;
  }
  h1 {
    margin-bottom: 2rem;
  }
  footer {
    background: #FFF;
    border-top: 1px solid #EEE;
    display: flex;
    flex-direction: row;
    flex-shrink: 0;
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
