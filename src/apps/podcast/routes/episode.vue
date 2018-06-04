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
  <div>
    <alert type="info" v-if="isVimeo">
      Some fields can only be edited on <a :href="'http://vimeo.com/' + media.uuid" target="_blank">the original Vimeo video</a>.
    </alert>
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
</template>

<style scoped>
  div {
    padding: 2rem 0 0 0;
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
