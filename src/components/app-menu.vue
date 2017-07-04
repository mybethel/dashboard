<script>
import apps from '../apps';

export default {
  data() {
    return {
      apps,
    };
  },
  methods: {
    goTo(app) {
      if (app.beta) return;
      this.$emit('transition');
    },
  },
};
</script>

<template>
  <menu class="apps">
    <router-link v-for="app in this.apps" :beta="app.beta" @click.native="goTo(app)" :to="app.main || '/'" :key="app.title">
      <app-icon :colors="[app.colors && app.colors[0] || '#FEFEFE', app.colors && app.colors[1] || '#E5E5E5']" :glyph="app.icon || app.title.toLowerCase()" />
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
    &[beta] {
      opacity: 0.2;
    }
  }
}
</style>
