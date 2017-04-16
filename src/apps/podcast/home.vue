<script>
import { Podcast, Session } from '../../services';

export default {
  data() {
    return {
      podcasts: [],
    };
  },
  mounted() {
    Podcast.init(Session.state.ministry._id).then(podcasts => this.podcasts = podcasts);
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
        <li v-for="podcast in podcasts">
          <img :src="podcast.image" />
          <div>
            {{ podcast.name }}<br />
            <small>{{ podcast.type === 1 ? 'Audio' : 'Video' }} Podcast</small>
          </div>
          <small>{{ podcast.uuid }}</small>
        </li>
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
      font-size: 16px;
      padding: 16px 8px;
      &:hover {
        background: #f4f6f8;
      }
    }
    img {
      border-radius: 3px;
      margin-right: 16px;
      width: 100px;
    }
    small {
      color: #95aab5;
    }
  }
</style>
