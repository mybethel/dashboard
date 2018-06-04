<script>
import Editor from './episode';

export default {
  components: {
    Editor,
  },
  data: () => ({
    edit: false,
  }),
  computed: {
    episodes() {
      return this.$store.state.podcast.media;
    },
    podcast() {
      return this.$store.state.podcast.meta;
    },
  },
  methods: {
    toggle(eid) {
      this.edit = this.edit == eid ? false : eid;
    },
    uploadEpisode(file, done) {
      console.log(file);
      done('@TODO');
    },
  },
  mounted() {
    this.$store.dispatch('podcast/init', this.id);
  },
  props: ['id'],
};

</script>

<template>
  <section>
    <header>
      <img :src="podcast.image" />
      <div>
        <h1>{{ podcast.name }}<br /><small>{{ podcast.type === 1 ? 'Audio' : 'Video' }} Podcast</small></h1>
        <p v-if="episodes.length > 0">Latest episode from <b>{{ new Date(episodes[0].date).toLocaleDateString() }}</b></p>
      </div>
    </header>
    <ul class="episodes">
      <uploader accept="audio/*" :signature="uploadEpisode" v-if="podcast.source === 1">
        <li class="dropzone-content">
          <p>Drop files here to upload or <span>choose file</span></p>
        </li>
      </uploader>
      <li v-for="episode in episodes" :key="episode._id" :class="{ active: edit == episode._id }">
        <div class="details" @click="toggle(episode._id)">
          {{ episode.name }}
          <small>{{ new Date(episode.date).toLocaleDateString() }}</small>
          <icon glyph="chevron-right" />
        </div>
        <editor v-if="edit == episode._id" :episode-id="episode._id" />
      </li>
    </ul>
  </section>
</template>

<style scoped>
  img {
    border-radius: 3px;
    height: 120px;
    margin-right: 12px;
    width: 120px;
  }
  header {
    display: flex;
    flex-direction: row;
    align-items: flex-end;
    & p {
      font-size: 14px;
      margin: 0 0 6px;
    }
  }
  .episodes {
    list-style: none;
    margin: 24px 0;
    padding: 0;
    & div.dropzone-wrapper {
      box-shadow: 0 1px 3px 2px rgba(0, 0, 0, .05);
      background: #FFF;
      &:hover {
        background: #f4f6f8;
      }
    }
    & li {
      box-shadow: 0 1px 3px 1px rgba(0, 0, 0, .05);
      background: #FFF;
      cursor: pointer;
      display: flex;
      flex-direction: column;
      padding: 16px;
      border-bottom: 1px solid #EEE;
      transition: 0.2s all ease-in-out;
      &:hover {
        background: #f4f6f8;
      }
      & > div.details {
        align-items: center;
        display: flex;
        flex-direction: row;
        user-select: none;
        width: 100%;
      }
      & .icon {
        transform: rotate(90deg);
        transition: 0.2s transform ease-in-out;
      }
      &.active {
        box-shadow: 0 2px 10px 0 rgba(1,25,38,0.10);
        margin: 1rem -0.5rem;
        &:hover {
          background: #FFF;
        }
        & .icon {
          transform: rotate(-90deg);
        }
      }
      &.dropzone-content {
        border: none;
        background: none;
        box-shadow: none;
        &:hover {
          background: none;
        }
      }
      & small {
        color: var(--font-color-dim);
        margin-left: auto;
        padding: 0 24px 0 12px;
      }
      & svg {
        flex-shrink: 0;
      }
    }
  }
</style>
