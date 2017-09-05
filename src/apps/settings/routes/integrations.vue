<script>
import { mapState } from 'vuex';

import API from '../../../api';

export default {
  computed: {
    vimeoAccounts() {
      return this.integrations;
    },
    ...mapState('ministry', ['integrations']),
  },
  methods: {
    connect(provider) {
      API.get(`integration/${provider}`).then(response => {
        if (response.body.url) window.location = response.body.url;
      });
    },
    disconnect(id) {
      this.$store.dispatch('ministry/removeIntegration', id);
    },
  },
  mounted() {
    this.$store.dispatch('ministry/getIntegrations');
  }
};
</script>

<template>
  <div class="locked">
    <panel>
      <h2>Integrations</h2>
      <p>Make the most of your account by integrating Bethel with other apps you use.</p>
    </panel>
    <panel class="integrations">
      <ul class="full">
        <li>
          <icon glyph="logo-vimeo" width="48" />
          <div>
            <h4>Vimeo Pro</h4>
            <p>Import videos uploaded to your Vimeo account</p>
          </div>
          <button @click="connect('vimeo')">+ Integrate</button>
        </li>
        <li class="account" v-for="account in vimeoAccounts">
          <icon glyph="logo-vimeo" width="22" />
          <img :src="account.picture" />
          {{ account.name }}
          <button class="small secondary" @click="disconnect(account._id)">Disconnect</button>
        </li>
        <li>
          <icon glyph="logo-youtube" width="48" />
          <div>
            <h4>YouTube</h4>
            <p>Schedule events and broadcast live through YouTube</p>
          </div>
          <button>+ Integrate</button>
        </li>
      </ul>
    </panel>
  </div>
</template>

<style scoped lang="scss">
div.panel {
  margin-left: 0;
  margin-right: 0;
}
.panel.integrations {
  padding: 0;
}
li.account {
  font-size: 14px;
  svg {
    margin-right: 4px !important;
  }
  img {
    border-radius: 3px;
    height: 22px;
    margin-right: 1rem;
    width: 22px;
  }
  button {
    min-width: 120px;
  }
}
</style>
