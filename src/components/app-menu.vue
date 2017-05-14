<script>
import apps from '../apps';
import './icon';

export default {
  data() {
    return {
      apps,
    };
  },
  methods: {

  },
};
</script>

<template>
  <menu class="apps">
    <router-link v-for="app in this.apps" :beta="app.beta" :to="app.main || '/'" :key="app.title">
      <div class="icon">
        <icon class="backing" :gradient="[app.colors && app.colors[0] || '#FEFEFE', app.colors && app.colors[1] || '#E5E5E5']" glyph="icon-base" height="60" width="60" />
        <icon class="app" :glyph="app.icon || app.title.toLowerCase()" height="60" width="60" />
      </div>
      {{ app.title }}
    </router-link>
  </menu>
</template>


<style lang="scss" scoped>
.apps {
  background-color: #fff;
  box-shadow: 0 0 1px rgba(99, 114, 130, 0.32), 0 8px 16px rgba(27, 39, 51, 0.08);
  border-radius: 3px;
  color: #1e2126;
  display: flex;
  flex-direction: row;
  margin: 0;
  padding: 6px;
  flex-wrap: wrap;
  overflow: hidden;
  text-align: center;
  width: 300px;
  a {
    align-items: center;
    color: #646466;
    flex-direction: column;
    font-size: 12px;
    font-weight: 400;
    justify-content: space-between;
    display: flex;
    border-radius: 3px;
    width: 80px;
    padding: 10px;
    text-decoration: none;
    &:hover {
      background: #F7F8FB;
      .icon {
        transform: scale(1.1);
        .app {
          transform: scale(0.8);
        }
      }
    }
    .icon {
      height: 60px;
      margin-bottom: 6px;
      position: relative;
      transition: transform 0.2s;
      width: 60px;
      .backing {
        position: absolute;
        top: 0;
        left: 0;
      }
      .app {
        fill: #FFF;
        position: relative;
        transform: scale(0.7);
        transition: transform 0.3s;
        z-index: 1;
      }
    }
    &[beta] {
      opacity: 0.2;
    }
  }
}
</style>
