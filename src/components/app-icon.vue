<script>
export default {
  props: {
    glyph: String,
    colors: Array,
  },
};
</script>

<template>
  <div class="icon">
    <icon class="backing" :gradient="colors" glyph="icon-base" height="60" width="60" />
    <icon class="app" :glyph="glyph" height="60" width="60" />
  </div>
</template>

<style lang="scss" scoped>
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
      filter: drop-shadow(1px 2px 1px rgba(0, 0, 0, 0.05));
      position: relative;
      transform: scale(0.7);
      transition: transform 0.3s;
      z-index: 1;
    }
    &:hover {
      transform: scale(1.1);
      .app {
        transform: scale(0.8);
      }
    }
  }
</style>
