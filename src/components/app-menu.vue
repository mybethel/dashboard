<script>
import apps from '../apps';
import icons from '../assets';

export default {
  data() {
    return {
      apps,
      icons,
    };
  },
  methods: {

  },
};
</script>

<template>
  <menu :class="$style.appMenu">
    <router-link v-for="app in this.apps" :beta="app.beta" :to="app.main || '/'" :key="app.title">
      <span v-html="app.icon || icons[app.iconName || app.title.toLowerCase()]"></span>
      {{ app.title }}
    </router-link>
  </menu>
</template>


<style module lang="scss">
.appMenu {
  background-color: #fff;
  box-shadow: 0 3px 20px rgba(16, 105, 130, .3), 0 1px 2px rgba(0, 0, 0, .05), 0 0 0 1px rgba(16, 105, 130, .1);
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
    color: #96A3B6;
    flex-direction: column;
    font-size: 13px;
    justify-content: space-between;
    display: flex;
    border-radius: 3px;
    width: 80px;
    padding: 12px;
    text-decoration: none;
    &:hover {
      background: #F7F8FB;
    }
    span svg {
      fill: #5A5A5C;
      height: 48px;
      margin-bottom: 6px;
    }
    &[beta] {
      opacity: 0.2;
    }
  }
}
</style>
