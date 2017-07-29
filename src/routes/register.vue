<script>
import Vue from 'vue';

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
  <section>
    <fieldset>
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
    </fieldset>
  </section>
</template>

<style scoped>
  section {
    align-items: center;
    background-color: #106982;
    background-image: -webkit-radial-gradient(0% bottom, rgba(21, 145, 181, 0.7) 0, rgba(21, 145, 181, 0) 60%), -webkit-radial-gradient(50% top, rgba(21, 145, 181, 0.6) 0, rgba(21, 145, 181, 0) 75%);
    display: flex;
    justify-content: center;
  }
  fieldset {
    border: 0;
    box-sizing: border-box;
    color: #3A3B3C;
    width: 370px;
    max-width: 100%;
    margin: 0 auto;
    padding: 0 30px;
    background: #FFFFFF;
    border-radius: 3px;
    box-shadow: 0 0 25px rgba(0, 0, 0, 0.05);
  }
  h1 {
    text-transform: none;
    letter-spacing: normal;
    box-shadow: none;
    font-weight: 300;
    width: 100%;
    float: left;
    font-size: 24px;
    padding-top: 30px;
    text-align: center;
    & + p {
      color: #484848;
      font-size: 12px;
      margin-bottom: 30px;
      text-align: center;
    }
  }
  section {
    padding: 3rem;
  }
  label {
    display: flex;
    flex-direction: column;
    position: relative;
    padding: 0;
    clear: both;
    flex: 1 0 auto;
    background: #FFFFFF;
    font-size: 17px;
    margin-bottom: 19px;
    position: relative;
  }
  input {
    appearance: none;
    background: transparent;
    font-size: 17px;
    line-height: inherit;
    padding: 12px 14px;
    outline: 0;
    border: 1px solid #D1D1D1;
    border-radius: 3px;
    &:focus {
      border-color: #828384;
    }
  }
  input + span {
    cursor: text;
    background: #FFFFFF;
    box-shadow: -6px 0 #FFFFFF, 6px 0 #FFFFFF;
    font-size: inherit;
    height: 10px;
    position: absolute;
    top: 12px;
    left: 14px;
    padding: 1px 0 0 1px;
    transform-origin: left top 0;
    will-change: transform;
    backface-visibility: hidden;
    z-index: 0;
    color: #D1D1D1;
    transform: translate3d(0, 0, 0) scale(1);
    transition: z-index .2s, color .2s, transform .2s;
  }
  input:focus + span,
  label.valid input + span,
  label.invalid input + span {
    z-index: 2;
    transform: translate3d(0, -20px, 0) scale(0.824);
    color: #828384;
  }
  label.valid {
    input {
      border-color: #3FBE3E;
    }
    input + span {
      color: #3FBE3E;
    }
  }
  label.invalid {
    input {
      border-color: #DD3340;
    }
    input + span {
      color: #DD3340;
    }
  }
  footer {
    p {
      color: #B7B7B7;
      font-size: 14px;
      padding-top: 11px;
      margin-bottom: 19px;
      text-align: center;
    }
  }
</style>
