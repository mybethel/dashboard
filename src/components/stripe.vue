<script>
const style = {
  base: {
    color: '#000',
    fontFamily: '"proxima-nova", "Helvetica Neue", Arial, sans-serif',
    fontWeight: 300,
    fontSize: '17px',
  },
  invalid: {
    color: '#D64242',
    iconColor: '#D64242',
  },
};

style.base['::placeholder'] = {
  color: '#aab7c4',
};

export default {
  data() {
    return {
      _form: {},
      _stripe: {},
      error: '',
    };
  },
  props: {
  },
  mounted() {
    this._stripe = new Stripe('pk_test_1sPGtxCTdxJOIxrRAaIRu9tt');
    let elements = this._stripe.elements();
    this._form = elements.create('card', { style });
    this._form.mount(this.$refs.input);
    this._form.addEventListener('change', event => {
      this.error = event.error && event.error.message || '';
    });
  },
  beforeDestroy() {
    this._form.unmount();
  },
  methods: {
    submit() {
      this._stripe.createToken(this._form).then(result => {
        this.$emit('submit', result.token);
      });
    },
  },
};
</script>

<template>
  <div class="stripe-wrapper">
    <div class="stripe-input">
      <div ref="input"></div>
      <span>{{ error }}</span>
    </div>
    <button class="large" @click="submit">Update Card</button>
  </div>
</template>

<style lang="css">
.StripeElement {
  border: 1px solid #D1D1D1;
  border-radius: 3px;
  padding: 12px 14px;
}
.StripeElement--focus {
  border-color: #828384;
}
.StripeElement--invalid {
  border-color: #D64242;
}
.stripe-input {
  float: left;
  width: 70%;
}
.stripe-input div + span {
  color: #D64242;
  display: inline-block;
  font-size: 14px;
  padding: 3px 14px;
}
.stripe-wrapper button {
  margin-left: 8px;
}
</style>
