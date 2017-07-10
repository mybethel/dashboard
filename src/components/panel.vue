<script>
export default {};
</script>

<template>
  <div class="panel">
    <slot />
  </div>
</template>

<style lang="scss" scoped>
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
h1 {
  margin-top: 1rem;
}
h2 {
  margin-bottom: 0;
}
h2 + p {
  margin-top: 0.5rem;
}
ul.full {
  list-style: none;
  margin: 0;
  padding: 0;
  li {
    align-items: center;
    border-bottom: 1px solid #EEF1F6;
    display: flex;
    flex-direction: row;
    padding: 1rem 2rem;
    &:hover {
      background: #F7F8FB;
    }
    &:last-of-type {
      border-bottom: none;
    }
  }
  svg, div.icon {
    margin-right: 1rem;
  }
  h4, p {
    margin: 0;
  }
  p {
    font-size: 0.9rem;
    margin-top: 0rem;
  }
  button {
    margin-left: auto;
  }
}
</style>
