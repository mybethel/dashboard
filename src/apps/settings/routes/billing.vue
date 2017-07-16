<script>
import { mapGetters } from 'vuex';

export default {
  computed: mapGetters('subscription', ['card', 'cardType', 'estimate', 'hasSubscription']),
  methods: {
    addPlan(plan) {
      this.$store.dispatch('subscription/addPlan', plan);
    },
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
        <h1 class="estimate">{{ estimate }}<br /><small>Estimated monthly bill</small></h1>
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
          <button @click="addPlan('podcast')" v-if="!hasSubscription('podcast')">+ $10/mo</button>
          <button class="secondary" disabled v-if="hasSubscription('podcast')">
            <icon glyph="check" width="18" />
            Active
          </button>
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
  position: relative;
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
h1.estimate {
  line-height: 1.7rem;
  position: absolute;
  text-align: right;
  top: 3rem;
  right: 2rem;
}
button {
  min-width: 110px;
}
button.secondary {
  padding-left: 40px;
  position: relative;
}
button svg {
  position: absolute;
  left: 16px;
  top: 5px;
}
</style>
