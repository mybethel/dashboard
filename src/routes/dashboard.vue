<script>
import { Session } from '../services';

export default {
  data() {
    return {
    };
  },
  methods: {
    logout() {
      Session.logout();
      this.$router.push('/login');
    },
  },
};
</script>

<template>
  <section>
    Dashboard home
    <a href="#" v-on:click="logout">Logout</a>
  </section>
</template>

<style scoped>

</style>
