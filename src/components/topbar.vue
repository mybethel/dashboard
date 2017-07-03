<template>
  <div class="topbar">
    <a @click="appMenu = !appMenu" class="icon"><icon glyph="apps" /></a>
    <transition name="slide-in">
      <menu class="app-menu" v-if="appMenu">
        <app-menu v-on-clickaway="hideMenu" />
      </menu>
    </transition>
    <a href="#/"><icon glyph="logo" height="24" width="122" /></a>
    <div class="user-menu">
      <img @click="showMenu = !showMenu" v-if="user" :alt="user.name" :src="user.avatar || 'http://static.bethel.io/images/default_avatar_white.png'" />
      <a @click="showMenu = !showMenu" class="icon"><icon glyph="menu" /></a>
    </div>
    <transition name="slide-in">
      <menu class="usermenu" v-if="user && showMenu">
        <div v-on-clickaway="hideMenu">
          <div>
            <p>{{ user.name }}</p>
            <span>{{ ministry.name }}</span>
          </div>
          <a>
            Account Settings
            <icon glyph="settings" />
          </a>
          <router-link :to="'/account?redirect=' + $route.fullPath">
            Switch Account
            <icon glyph="switch-account" />
          </router-link>
          <a @click="logout">
            Log Out
            <icon glyph="logout" />
          </a>
        </div>
      </menu>
    </transition>
  </div>
</template>

<script>
import { mixin as clickaway } from 'vue-clickaway';

import './icon';

export default {
  data() {
    return {
      appMenu: false,
      showMenu: false,
    };
  },
  methods: {
    hideMenu() {
      if (!this.appMenu && !this.showMenu) return;
      this.appMenu = false;
      this.showMenu = false;
    },
    logout() {
      this.$store.dispatch('session/logout');
    },
  },
  mixins: [clickaway],
  mounted() {
    Headway.init({
      selector: '.user-menu',
      account: 'ypangx',
    });
  },
  props: {
    user: Object,
    ministry: Object,
  },
};
</script>

<style lang="scss" scoped>
.topbar {
  align-items: center;
  background: #FFF;
  box-shadow: 0 1px 3px 2px rgba(0, 0, 0, .05);
  display: flex;
  flex-shrink: 0;
  height: 50px;
  justify-content: space-between;
  line-height: 0;
  padding: 0 8px;
  z-index: 9;
  img {
    border-radius: 3px;
    cursor: pointer;
    height: 38px;
  }
  > div {
    display: flex;
    flex-direction: row;
    align-items: center;
  }
  a {
    cursor: pointer;
    text-decoration: none;
  }
  a svg {
    display: inline-block;
    fill: #106982;
    height: 24px;
  }
}
a.icon svg {
  fill: #106982;
}
.usermenu {
  align-items: flex-end;
  display: flex;
  flex-direction: column;
  line-height: normal;
  margin: 0;
  padding: 56px 8px 0;
  position: absolute;
  right: 0;
  top: 0;
  > div {
    background-color: #fff;
    box-shadow: 0 0 1px rgba(99, 114, 130, 0.32), 0 8px 16px rgba(27, 39, 51, 0.08);
    border-radius: 3px;
    color: #1e2126;
    overflow: hidden;
    text-align: center;
    width: 240px;
    > div {
      padding: 20px 10px 20px;
    }
  }
  p {
    margin: 6px 0 0;
  }
  span {
    color: #95aab5;
    font-size: 90%;
  }
  a {
    align-items: center;
    justify-content: space-between;
    display: flex;
    border-top: 1px solid #EEF1F6;
    border-radius: 0;
    height: 40px;
    padding: 0 12px;
    &:hover {
      background: #F7F8FB;
    }
    span {
      line-height: 0;
    }
  }
}
.app-menu {
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  left: 0;
  line-height: normal;
  margin: 0;
  padding: 56px 8px 0;
  position: absolute;
  top: 0;
}
</style>
