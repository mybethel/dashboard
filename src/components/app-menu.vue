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
      <icon :glyph="app.icon || app.title.toLowerCase()" height="48" width="48" />
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
  width: 312px;
  a {
    align-items: center;
    color: #5A5A5C;
    flex-direction: column;
    font-size: 13px;
    font-weight: 400;
    justify-content: space-between;
    display: flex;
    border-radius: 3px;
    width: 80px;
    padding: 12px;
    text-decoration: none;
    &:hover {
      background: #F7F8FB;
    }
    svg {
      margin-bottom: 6px;
    }
    &[beta] {
      opacity: 0.2;
    }
  }
}
</style>
