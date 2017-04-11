<template>
  <div :class="$style.topbar">
    <a v-html="this.icons.menu"></a>
    <a href="#/" v-html="this.icons.logo"></a>
    <img v-if="user" :alt="user.name" :src="user.avatar || 'http://static.bethel.io/images/default_avatar_white.png'" />
  </div>
</template>

<script>
import icons from '../assets';

export default {
  data() {
    return {
      icons,
    };
  },
  props: {
    user: Object,
  },
};
</script>

<style module>
.topbar {
  background: #106982;
  display: flex;
  height: 50px;
  align-items: center;
  justify-content: space-between;
  img {
    height: 50px;
  }
  a svg {
    display: inline-block;
    fill: #FFF;
    height: 24px;
    path {
      fill: #FFF;
    }
  }
}
</style>
