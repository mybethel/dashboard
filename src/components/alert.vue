<template>
  <div :class="['alert', type]">
    <slot />
  </div>
</template>

<script>
export default {
  props: {
    type: String,
  },
};
</script>

<style scoped>
.alert {
  border: 1px solid transparent;
  border-radius: 4px;
  display: block;
  font-size: 14px;
  line-height: 1.42857;
  margin-bottom: 20px;
  padding: 10px;
  & a {
    color: inherit;
  }
  &.danger {
    background-color: #fdf6f6;
    border-color: #efb3b3;
    color: #D64242;
  }
  &.info {
    background-color: #f5f9fe;
    border-color: #b3d2f7;
    color: #408FEC
  }
  &.success {
    background-color: #f8fcf9;
    border-color: #c7e6cc;
    color: #74C080
  }
}
</style>
