<script>
export default {};
</script>

<template>
  <div class="panel">
    <slot />
  </div>
</template>

<style scoped>
.panel {
  background: #FFF;
  box-shadow: 0 1px 3px 1px rgba(0, 0, 0, .05);
  padding: 1rem 2rem;
  margin: 0 1rem 2rem;
}
hr {
  border: none;
  border-top: 1px solid #EEF1F6;
  margin: 2rem -2rem;
}
</style>
