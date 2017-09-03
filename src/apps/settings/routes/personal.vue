<script>
import { mapState } from 'vuex';

export default {
  computed: {
    ...mapState('session', ['user']),
  },
};
</script>

<template>
  <div class="locked">
    <panel>
      <h2>{{ user.name }}</h2>
      <div class="columns">
        <div>
          <label :class="{ invalid: errors.has('name'), pristine: user.name && user.name.length > 0, valid: user.name && user.name.dirty }">
            <input name="name" v-model="user.name" v-validate data-vv-rules="required" type="text" />
            <span>Your name</span>
          </label>
          <label :class="{ pristine: user.title && user.title.length > 0, valid: user.title && user.title.dirty }">
            <input name="title" v-model="user.title" type="text" />
            <span>Job title</span>
          </label>
        </div>
        <div>
          <label :class="{ invalid: errors.has('email'), pristine: user.email && user.email.length > 0, valid: user.email && user.email.dirty }">
            <input name="email" v-model="user.email" v-validate data-vv-rules="required|email" type="email" />
            <span>Personal e-mail</span>
          </label>
          <button>Change Password</button>
        </div>
      </div>
    </panel>
  </div>
</template>

<style scoped lang="scss">
div.panel {
  margin-left: 0;
  margin-right: 0;
}
h2 {
  padding-bottom: 2rem;
}
.panel.integrations {
  padding: 0;
}
div.columns {
  display: flex;
  flex-direction: row;
  flex-grow: 1;
  > div {
    flex: 1;
    &:first-child {
      margin-right: 0.5rem;
    }
    &:last-child {
      margin-left: 0.5rem;
    }
  }
}
</style>
