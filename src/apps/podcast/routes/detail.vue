<script>
import Podcast from '../service';

export default {
  data() {
    return {
      podcast: {},
    };
  },
  mounted() {
    Podcast.get(this.id).then(podcast => this.podcast = podcast);
  },
  props: ['id'],
};

</script>

<template>
  <section>
    <div class="main">
      <header>
        <img :src="podcast.image" />
        <div>
          <h1>{{ podcast.name }} <small>{{ podcast.type === 1 ? 'Audio' : 'Video' }} Podcast</small></h1>
          <p>Latest episode from <b>3/7/2015</b></p>
        </div>
      </header>
    </div>
    <div class="sidebar">
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
  h1 {
    font-weight: 300;
    margin-bottom: 0;
    small {
      color: #95aab5;
      font-size: 50%;
    }
  }
  section {
    display: flex;
    flex-direction: row;
    padding: 0 !important;
    .main {
      border-right: 1px solid #f1f1f1;
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
      flex: 1;
      background: #fcfcfc;
    }
  }
</style>
