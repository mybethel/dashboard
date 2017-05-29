<script>
import { Podcast } from '../../../api';

export default {
  data() {
    return {
      podcasts: [],
      performance: {},
    };
  },
  methods: {
    subscribers(index) {
      if (!this.podcasts[index].subscribers) return 0;
      return this.podcasts[index].subscribers.reverse()[1].value || '0';
    },
  },
  mounted() {
    Podcast.init(this.$store.getters['session/ministryId']).then(podcasts => {
      this.podcasts = podcasts;
      podcasts.forEach((podcast, index) => {
        Podcast.performance(podcast._id).then(stats => {
          this.$set(this.podcasts[index], 'episodes', stats.episodes);
          this.$set(this.podcasts[index], 'subscribers', stats.subscribers.slice(0, -1));
        });
      });
    });
  },
};
</script>

<template>
  <div>
    <header>
      <h1>Podcasting</h1>
      <button>Create Podcast</button>
    </header>
    <section>
      <ul>
        <router-link tag="li" :to="{ name: 'podcast', params: { id: podcast._id }}" v-for="(podcast, index) in podcasts" key="podcast._id">
          <img :src="podcast.image" />
          <div>
            {{ podcast.name }}<br />
            <small>{{ podcast.type === 1 ? 'Audio' : 'Video' }} Podcast</small>
          </div>
          <small>{{ podcast.uuid }}</small>
          <span v-if="podcast.episodes"><big>{{ podcast.episodes }}</big><br /><small>{{ podcast.episodes > 1 ? 'episodes' : 'episode' }}</small></span>
          <span v-if="podcast.subscribers"><big>{{ Math.round(podcast.subscribers[podcast.subscribers.length - 1].value / 7).toLocaleString() }}</big><br /><small>subscribers</small></span>
          <sparkline v-if="podcast.subscribers && podcast.subscribers.length > 1" :stats="podcast.subscribers.map(data => data.value)"></sparkline>
        </router-link>
      </ul>
    </section>
  </div>
</template>

<style scoped lang="scss">
  div {
    display: flex;
    flex-direction: column;
    flex-grow: 1;
  }
  header {
    align-items: center;
    border-bottom: 1px solid #e6e6e6;
    display: flex;
    flex-direction: row;
    flex-shrink: 0;
    justify-content: space-between;
    padding: 32px 24px 0;
    h1 {
      font-weight: 300;
      margin: 0.67rem 0;
    }
    button {
      width: auto;
    }
  }
  section {
    background: #FFF;
  }
  ul {
    list-style: none;
    padding: 0;
    margin: 0 -8px;
    li {
      align-items: center;
      border-radius: 3px;
      cursor: pointer;
      display: flex;
      flex-direction: row;
      font-size: 18px;
      padding: 16px 8px;
      &:hover {
        background: #f4f6f8;
      }
      div {
        font-weight: 400;
      }
    }
    span {
      margin: 0 16px;
      text-align: center;
    }
    img {
      border-radius: 3px;
      margin-right: 16px;
      width: 100px;
    }
    big {
      font-weight: 100;
    }
    small {
      color: #95aab5;
    }
    svg {
      margin-left: 16px;
    }
  }
</style>
