import Vue from 'vue';

let allIcons = require.context('../icons', false, /\.svg$/);
const icons = allIcons.keys().map(allIcons).reduce((state, icon) => {
  state[icon.default.id] = icon.default;
  state[icon.default.id].id = `#${icon.default.id}`;
  return state;
}, {});

Vue.component('icon', {
  computed: {
    defaultHeight() {
      return this.height || this.icons[this.glyph].viewBox.split(' ')[3];
    },
    defaultWidth() {
      return this.width || this.icons[this.glyph].viewBox.split(' ')[2];
    },
  },
  data() {
    return { icons };
  },
	props: ['glyph', 'gradient', 'height', 'viewbox', 'width'],
  template:
    `<svg :width="defaultWidth" :height="height" :viewBox="viewbox || icons[glyph].viewBox">
        <linearGradient :id="'gradient' + _uid" v-if="gradient && gradient.length > 1" gradientTransform="rotate(90)">
          <stop offset="0%" :stop-color="gradient[0]" />
          <stop offset="100%" :stop-color="gradient[1]" />
        </linearGradient>
        <use :xlink:href="icons[glyph].id" :fill="gradient && 'url(#gradient' + _uid + ')'" />
      </svg>`,
});

module.exports = icons;
