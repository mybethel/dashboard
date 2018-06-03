<script>
export default {
  data() {
    return {
      newUser: {},
    };
  },
  mounted() {
    if (this.$store.getters['session/isLoggedIn']) {
      this.$router.push('/');
    }
  },
  methods: {

  },
};
</script>

<template>
  <modal>
    <h1>Create an Account</h1>
    <p>Already have an account? <router-link to="login">Login here</router-link></p>
    <form v-on:submit.prevent="login">
      <label :class="{ invalid: errors.has('name'), valid: newUser.name && !errors.has('name') }">
        <input name="name" v-model="newUser.name" v-validate data-vv-rules="required" type="text" />
        <span>Name</span>
      </label>
      <label :class="{ invalid: errors.has('ministry'), valid: newUser.ministry && !errors.has('ministry') }">
        <input name="email" v-model="newUser.ministry" v-validate data-vv-rules="required" type="text" />
        <span>Ministry</span>
      </label>
      <label :class="{ invalid: errors.has('email'), valid: newUser.email && !errors.has('email') }">
        <input name="email" v-model="newUser.email" v-validate data-vv-rules="required|email" type="email" />
        <span>Email</span>
      </label>
      <label :class="{ invalid: errors.has('password'), valid: newUser.password && !errors.has('password') }">
        <input name="password" v-model="newUser.password" v-validate data-vv-rules="required" type="password" />
        <span>Password</span>
      </label>
      <button type="submit">Register</button>
    </form>
    <footer>
      <p>Feedback? Need help? <a href="mailto:hello@bethel.io">Talk to us.</a></p>
    </footer>
  </modal>
</template>
