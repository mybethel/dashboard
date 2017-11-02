<template>
  <svg :width="width" :height="height">
    <defs>
      <linearGradient :id="'gradient-' + _uid" x1="0" x2="0" y1="1" y2="0">
        <stop offset="10%" stop-color="#95aab5"></stop>
        <stop offset="33%" stop-color="#00A4F0"></stop>
        <stop offset="90%" stop-color="#106982"></stop>
      </linearGradient>
      <mask :id="'mask-' + _uid" x="0" y="0" :width="width" :height="height">
        <polyline :transform="'translate(0, ' + height + ') scale(1,-1)'" :points="points" fill="transparent" stroke="#8cc665" :stroke-width="strokeWidth"></polyline>
      </mask>
    </defs>
    <g transform="translate(0, 0.0)">
      <rect x="0" y="0" :width="width" :height="height" :style="'stroke:none;fill:url(#gradient-' + _uid + ');mask:url(#mask-' + _uid +')'"></rect>
    </g>
  </svg>
</template>

<script>
export default {
  props: {
    height: {
      type: Number,
      default: 30,
    },
    stats: Array,
    strokeWidth: {
      type: Number,
      default: 2,
    },
    width: {
      type: Number,
      default: 150,
    },
  },
  computed: {
    points: function() {
      return this.stats.map((stat, i) => {
        let position = {
          h: (this.width - this.strokeWidth) * (i + 1) / this.stats.length,
          v: Math.max(this.strokeWidth / 2, (this.height - this.strokeWidth) * (stat / this.maxValue)) || 0,
        };
        return [position.h, position.v].join(',');
      }).join(' ');
    },
    maxValue: function() {
      return Math.max(...this.stats);
    },
  },
};
</script>
