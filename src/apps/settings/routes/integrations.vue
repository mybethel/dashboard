<script>
import { mapState } from 'vuex';

export default {
  computed: {
    vimeoAccounts() {
      return this.integrations;
    },
    ...mapState('ministry', ['integrations']),
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
          <button>+ Integrate</button>
        </li>
        <li class="account" v-for="account in vimeoAccounts">
          <img :src="account.picture" />
          {{ account.name }}
          <button class="small secondary">Disconnect</button>
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
  padding-left: 3.125rem !important;
  img {
    height: 30px;
    margin-right: 1rem;
    width: 30px;
  }
  button {
    min-width: 120px;
  }
}
</style>
