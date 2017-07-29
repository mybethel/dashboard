<script>
import debounce from 'lodash/debounce';
import { mapGetters } from 'vuex';

export default {
  data() {
    return {
      email: this.$store.state.ministry.data.email,
      name: this.$store.state.ministry.data.name,
      url: this.$store.state.ministry.data.url,
    }
  },
  computed: {
    ...mapGetters('ministry', { ministryName: 'name' }),
  },
  methods: {
    updateMinistry: debounce(function(event) {
      if (this.errors.has(event.target.name)) return;
      let payload = {};
      payload[event.target.name] = event.target.value;
      this.$store.dispatch('ministry/update', payload);
    }, 400),
  }
};
</script>

<template>
  <div class="locked">
    <panel>
      <h2>{{ ministryName }}</h2>
      <div class="columns">
        <div>
          <h4 class="subhead">Ministry details</h4>
          <label :class="{ invalid: errors.has('name'), pristine: !errors.has('name') }">
            <input @input="updateMinistry" name="name" v-model="name" v-validate data-vv-rules="required" type="text" />
            <span>Ministry name</span>
          </label>
        </div>
        <div>
          <h4 class="subhead">Contact information</h4>
          <label :class="{ invalid: errors.has('email'), pristine: !errors.has('email') }">
            <input @input="updateMinistry" name="email" v-model="email" v-validate data-vv-rules="required|email" type="email" />
            <span>Public e-mail</span>
          </label>
          <label :class="{ invalid: errors.has('url'), pristine: !errors.has('url') }">
            <input @input="updateMinistry" name="url" v-model="url" v-validate data-vv-rules="required|url" type="text" />
            <span>Website address</span>
          </label>
        </div>
      </div>
    </panel>
    <panel class="locations">

    </panel>
  </div>
</template>

<style scoped lang="scss">
div.panel {
  margin-left: 0;
  margin-right: 0;
}
.panel.locations {
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
h4.subhead {
  color: var(--textColorDim);
  font-weight: 400;
  border-bottom: 1px solid #e6e6e6;
  font-size: 0.7rem;
  margin: 1.5rem 0;
  padding: 0.2rem 0.5rem;
  text-transform: uppercase;
}
</style>
