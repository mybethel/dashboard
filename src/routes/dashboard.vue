<script>
import { mapGetters } from 'vuex';

import apps from '../apps';

export default {
  computed: mapGetters({
    name: 'session/name',
  }),
  data() {
    return {
      apps,
    };
  },
  methods: {
    help() {
      Intercom('show');
    },
  },
};
</script>

<template>
  <section>
    <div class="locked">
      <panel>
        <h1>Welcome {{ name }}!</h1>
        <p>Looks like you're new here. Learn about Bethel from the resources below.</p>
        <p>Feedback? Need help? <a href="#" @click="help">Talk to us</a>.</p>
      </panel>
      <panel>
        <h3>Getting started with Bethel</h3>
        <p class="muted">To get the most out of your account, we recommend starting with these steps.</p>
        <hr />
        <div class="started">
          <app-icon :colors="['#656c78', '#3a3f45']" glyph="church" />
          <div>
            <h4>Locations and service times</h4>
            <p>Ensure your ministry profile is up-to-date so new users can find you in the mobile app.</p>
          </div>
          <div class="action">
            <router-link tag="button" to="/settings/ministry">Edit Profile</router-link>
          </div>
        </div>
        <hr />
        <div class="started">
          <app-icon :colors="['#656c78', '#3a3f45']" glyph="podcast" />
          <div>
            <h4>Create a podcast</h4>
            <p>Create both an audio and a video podcast to reach the most people.</p>
          </div>
          <div class="action">
            <router-link tag="button" to="/podcast">New Podcast</router-link>
          </div>
        </div>
        <hr />
        <div class="started">
          <app-icon :colors="['#656c78', '#3a3f45']" glyph="people" />
          <div>
            <h4>Invite your team</h4>
            <p>Everyone on your team can use Bethel to manage each part of your ministry.</p>
          </div>
          <div class="action">
            <router-link tag="button" to="/settings/team">Manage Team</router-link>
          </div>
        </div>
        <hr />
        <div class="started">
          <app-icon :colors="['#656c78', '#3a3f45']" glyph="feedback" />
          <div>
            <h4>Give us feedback</h4>
            <p>What would you like to see next? Bethel is only possible with your feedback.</p>
          </div>
          <div class="action">
            <button @click="help">Say Hi!</button>
          </div>
        </div>
      </panel>
    </div>
  </section>
</template>

<style scoped>
  h3 {
    margin-bottom: 0;
  }
  div.started {
    display: flex;
    flex-direction: row;
    align-items: center;
    & h4, & p {
      margin: 0;
    }
    & p {
      font-size: 0.95rem;
      margin-top: 0.5rem;
    }
    & .action {
      margin-left: auto;
    }
    & button {
      width: 150px;
    }
    &:last-of-type {
      margin-bottom: 1rem;
    }
  }
  div.icon {
    margin-bottom: 0;
    padding-right: 2rem;
  }
</style>
