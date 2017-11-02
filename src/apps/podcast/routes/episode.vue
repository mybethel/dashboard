<script>
import { Media } from '../../../api';

export default {
  computed: {
    media() {
      return this.$store.getters['podcast/episode'](this.episodeId);
    },
    isVimeo() {
      return this.$store.getters['podcast/isVimeo'];
    },
  },
  methods: {
    save() {
      Media.update({ id: this.episodeId }, {
        name: this.media.name,
        date: this.media.date,
        description: this.media.description,
      }).then(() => {
        this.$router.go(-1);
      });
    },
  },
  props: ['episodeId'],
};
</script>

<template>
  <form v-on:submit.prevent="save">
    <iframe :src="'https://embed.bethel.io/' + episodeId" />
    <div>
      <alert type="info" v-if="isVimeo">
        Some fields can only be edited on <a :href="'http://vimeo.com/' + media.uuid" target="_blank">the original Vimeo video</a>.
      </alert>
      <h1>{{ media.name }}</h1>
      <label :class="{ invalid: errors.has('name'), pristine: media.name && media.name.length > 0, valid: fields.name && fields.name.dirty }">
        <input :disabled="isVimeo" name="name" v-model="media.name" v-validate="'required'" type="text" />
        <span>Episode title</span>
      </label>
      <label :class="{ invalid: errors.has('date'), pristine: media.date, valid: fields.date && fields.date.dirty }">
        <input name="date" v-model="media.date" v-validate="'required'" type="text" />
        <span>Publish date</span>
      </label>
      <label :class="{ invalid: errors.has('description'), pristine: media.description, valid: fields.description && fields.description.dirty }">
        <textarea :disabled="isVimeo" name="description" v-autosize v-model="media.description" v-validate="'required'"></textarea>
        <span>Description</span>
      </label>
    </div>
    <footer>
      <button class="destructive icon"><icon glyph="delete" /></button>
      <div>
        <router-link :to="{ name: 'podcast', params: { id: media.podcast } }" tag="button" class="secondary">Cancel</router-link>
        <button type="submit">Save Changes</button>
      </div>
    </footer>
  </form>
</template>

<style scoped>
  form {
    display: flex;
    flex: 1;
    flex-direction: column;
    justify-content: space-between;
    & > div {
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
    & button {
      display: block;
      margin: 8px;
      white-space: nowrap;
      &.destructive {
        width: auto;
      }
    }
    & div {
      display: flex;
      flex-direction: row;
    }
  }
</style>
