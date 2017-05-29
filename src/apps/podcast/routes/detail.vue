<script>
export default {
  computed: {
    episodes() {
      return this.$store.state.podcast.media;
    },
    podcast() {
      return this.$store.state.podcast.meta;
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
    <div class="main">
      <router-link to="/podcast" class="breadcrumb">&larr; Back to Podcasts</router-link>
      <header>
        <img :src="podcast.image" />
        <div>
          <h1>{{ podcast.name }}<br /><small>{{ podcast.type === 1 ? 'Audio' : 'Video' }} Podcast</small></h1>
          <p v-if="episodes.length > 0">Latest episode from <b>{{ new Date(episodes[0].date).toLocaleDateString() }}</b></p>
        </div>
      </header>
      <ul class="episodes">
        <router-link tag="li" :to="{ name: 'podcast.episode', params: { episodeId: episode._id } }" v-for="episode in episodes" key="episode._id">
          {{ episode.name }}
          <small>{{ new Date(episode.date).toLocaleDateString() }}</small>
          <icon glyph="chevron-right" />
        </router-link>
      </ul>
    </div>
    <div class="sidebar">
      <router-view></router-view>
    </div>
  </section>
</template>

<style lang="scss" scoped>
  img {
    border-radius: 3px;
    height: 120px;
    margin-right: 12px;
    width: 120px;
  }
  section {
    display: flex;
    flex-direction: row;
    padding: 0 !important;
    .main {
      border-right: 1px solid #f1f1f1;
      overflow-y: auto;
      padding: 24px;
      width: 55%;
      header {
        display: flex;
        flex-direction: row;
        align-items: flex-end;
        p {
          font-size: 14px;
          margin: 0 0 6px;
        }
      }
    }
    .sidebar {
      display: flex;
      flex: 1;
      background: #fcfcfc;
      overflow-y: auto;
    }
  }
  .episodes {
    background: #FFF;
    box-shadow: 0 2px 10px 0 rgba(1,25,38,0.10);
    list-style: none;
    margin: 24px 0;
    padding: 0;
    li {
      cursor: pointer;
      display: flex;
      align-items: center;
      flex-direction: row;
      padding: 16px;
      border-bottom: 1px solid #EEE;
      &:hover,
      &.router-link-active {
        background: #f4f6f8;
      }
      &.router-link-active {
        color: #106982;
        svg {
          opacity: 0;
        }
      }
      small {
        color: var(--textColorDim);
        margin-left: auto;
        padding: 0 24px 0 12px;
      }
      svg {
        flex-shrink: 0;
      }
    }
  }
</style>
