<script>
let allIcons = require.context('../icons', false, /\.svg$/);
let icons = allIcons.keys().map(allIcons).reduce((state, icon) => {
  state[icon.default.id] = icon.default;
  state[icon.default.id].id = `#${icon.default.id}`;
  return state;
}, {});

export default {
  computed: {
    calcHeight() {
      if (this.width && !this.height) return;
      return this.height || this.icons[this.glyph].viewBox.split(' ')[3];
    },
    calcWidth() {
      if (this.height && !this.width) return;
      return this.width || this.icons[this.glyph].viewBox.split(' ')[2];
    },
  },
  data() {
    return { icons };
  },
  props: ['glyph', 'gradient', 'height', 'viewbox', 'width'],
};
</script>

<template>
  <svg :width="calcWidth" :height="calcHeight" :viewBox="viewbox || icons[glyph].viewBox" v-if="icons[glyph]" :class="'icon ' + glyph">
    <linearGradient :id="'gradient' + _uid" v-if="gradient && gradient.length > 1" gradientTransform="rotate(90)">
      <stop offset="0%" :stop-color="gradient[0]" />
      <stop offset="100%" :stop-color="gradient[1]" />
    </linearGradient>
    <use :xlink:href="icons[glyph].id" :fill="gradient && 'url(#gradient' + _uid + ')'"/>
  </svg>
</template>

<style scoped>
svg {
  fill: currentcolor;
}
</style>
