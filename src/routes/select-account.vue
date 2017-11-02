<script>
import Vue from 'vue';

import { User } from '../api';

export default {
  data() {
    return {
      ministries: [],
      search: '',
    };
  },
  mounted() {
    User.ministries({ id: this.$store.getters['session/userId'] }).then(response => {
      this.ministries = response.body;
    });
  },
  computed: {
    filtered() {
      return this.ministries.filter(ministry =>
        ministry.name.toLowerCase().indexOf(this.search.toLowerCase()) > -1);
    },
  },
  methods: {
    select(ministryId) {
      this.$store.dispatch('session/login', {
        ministry: ministryId,
      }).then(() => {
        this.$router.push(this.$route.query.redirect || '/');
      });
    },
  },
};
</script>

<template>
  <section>
    <div>
      <h1>Welcome back!</h1>
      <p>Select an account to continue</p>
      <ul>
        <li class="search" v-if="ministries.length > 4">
          <icon glyph="search" />
          <input placeholder="Search..." type="text" v-model="search" />
        </li>
        <router-link tag="li" to="/">
          {{ $store.state.ministry.data.name }}
          <icon glyph="check" />
        </router-link>
        <li @click="select(ministry._id)" v-for="ministry in filtered" v-if="ministry._id !== $store.getters['ministry/id']">
          {{ ministry.name }}
          <icon glyph="chevron-right" />
        </li>
      </ul>
    </div>
  </section>
</template>

<style scoped>
  section {
    align-items: center;
    background-color: #106982;
    background-image: -webkit-radial-gradient(0% bottom, rgba(21, 145, 181, 0.7) 0, rgba(21, 145, 181, 0) 60%), -webkit-radial-gradient(50% top, rgba(21, 145, 181, 0.6) 0, rgba(21, 145, 181, 0) 75%);
    bottom: 0;
    display: flex;
    left: 0;
    position: absolute;
    right: 0;
    top: 0;
    text-align: center;
    z-index: 10;
    & > div {
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
  }
  ul {
    list-style: none;
    margin: 0 -29px 0 -30px;
    max-height: 50vh;
    overflow-y: auto;
    padding: 0;
    text-align: left;
    & li {
      align-items: center;
      border-top: 1px solid #EEF1F6;
      border-radius: 0;
      cursor: pointer;
      display: flex;
      height: 40px;
      justify-content: space-between;
      padding: 0 12px;
      &:hover {
        background: #F7F8FB;
      }
      &.search {
        padding: 0;
        height: auto;
        & input {
          background: transparent;
          border: 0;
          line-height: 40px;
          outline: none;
          padding: 0 12px 0 6px;
          width: 100%;
        }
        & svg {
          padding-left: 12px;
        }
      }
      & svg {
        fill: #106982;
      }
    }
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
</style>
