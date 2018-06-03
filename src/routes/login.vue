<script>
export default {
  data() {
    return {
      credentials: {
        user: '',
        password: '',
      },
      serverError: false,
    };
  },
  mounted() {
    if (this.$store.getters['session/isLoggedIn']) {
      this.$router.push('/');
    }
  },
  methods: {
    login() {
      if (this.errors.any()) return;
      this.$store.dispatch('session/login', {
        email: this.credentials.user.toLowerCase(),
        password: this.credentials.password,
      }).then(() => {
        this.$router.push(this.$route.query.redirect || '/');
      }).catch(() => {
        this.serverError = true;
      });
    },
  },
};
</script>

<template>
  <modal>
    <h1>Welcome back!</h1>
    <p>Need a Bethel account? <router-link to="register">Create one here</router-link></p>
    <form v-on:submit.prevent="login">
      <label :class="{ invalid: errors.has('email') || serverError, valid: credentials.user.length > 0 && !errors.has('email') }">
        <input name="email" v-model="credentials.user" v-validate data-vv-rules="required|email" type="email" />
        <span>Email</span>
      </label>
      <label :class="{ invalid: errors.has('password') || serverError, valid: credentials.password.length > 0 && !errors.has('password') }">
        <input name="password" v-model="credentials.password" v-validate data-vv-rules="required" type="password" />
        <span>Password</span>
      </label>
      <button type="submit">Log In</button>
    </form>
    <footer>
      <p>Feedback? Need help? <a href="mailto:hello@bethel.io">Talk to us.</a></p>
    </footer>
  </modal>
</template>
