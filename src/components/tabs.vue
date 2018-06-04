<template>
  <ul class="tabs">
    <slot />
  </ul>
</template>

<style scoped>
ul.tabs {
  background: #FFF;
  border-bottom: 1px solid #e6e6e6;
  display: flex;
  flex-direction: row;
  flex-shrink: 0;
  list-style: none;
  margin: 0;
  padding: 0 1rem;
  &.centered {
    justify-content: center;
  }
  & li {
    border-bottom: 1px solid transparent;
    color: var(--font-color-dim);
    cursor: pointer;
    font-size: 1rem;
    font-weight: 500;
    margin: 0 14px -1px;
    padding: 1rem;
    position: relative;
    &:first-child {
      margin-left: 0;
    }
    &:hover {
      color: var(--font-color-dark);
      border-color: var(--font-color-dim);
    }
    &.router-link-active {
      color: var(--brand-dark);
      border-color: var(--brand-dark);
    }
  }
}
</style>
