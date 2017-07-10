<script>
import { mapGetters } from 'vuex';

export default {
  computed: mapGetters('subscription', ['card', 'cardType']),
  methods: {
    updateCard(token) {
      this.$store.dispatch('subscription/create', token.id);
    }
  }
};
</script>

<template>
  <div class="locked">
    <panel>
      <h2>Billing Information</h2>
      <div v-if="card">
        <p>Your ministry is currently billed to: <icon :glyph="'cc-' + cardType" width="30" /> <b>{{ card }}</b>.</p>
        <button>Update Card</button>
      </div>
      <div v-if="!card">
        <p>Subscriptions enabled by your ministry will be charged to this card.</p>
        <stripe @submit="updateCard" />
      </div>
    </panel>

    <panel class="subscriptions">
      <ul class="full">
        <li>
          <app-icon :colors="['#656c78', '#3a3f45']" glyph="podcast" />
          <div>
            <h4>Podcasting</h4>
            <p>Audio and video podcasts with an embeddable media player</p>
          </div>
          <button>+ $10/mo</button>
        </li>
        <li>
          <app-icon :colors="['#656c78', '#3a3f45']" glyph="podcast" />
          <div>
            <h4>Audio Conversion</h4>
            <p>Automatically convert your video podcasts to audio—works with Vimeo</p>
          </div>
          <button>+ $20/mo</button>
        </li>
      </ul>
    </panel>
  </div>
</template>

<style lang="css" scoped>
div.panel {
  margin-left: 0;
  margin-right: 0;
}
p svg {
  align-self: center;
  bottom: -4px;
  display: inline-flex;
  margin: 0 5px 0 3px;
  position: relative;
}
.panel.subscriptions {
  padding: 0;
}
</style>
