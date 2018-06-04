<script>
import md5 from 'md5';

export default {
  computed: {
    avatar() {
      return [
        '//www.gravatar.com/avatar/',
        this.hash || md5(this.email.trim().toLowerCase()),
        `?s=${Number(this.width || this.height || 40) * 2}`,
        '&d=http://static.bethel.io/images/default_avatar_white.png',
      ].join('');
    },
  },
  props: {
    email: String,
    height: String,
    width: String,
  },
};
</script>

<template>
  <img v-if="email" :src="avatar" :height="height" :width="width" />
</template>

<style scoped>
img {
  background: #106982;
}
</style>
