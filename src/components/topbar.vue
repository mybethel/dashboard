<template>
  <div class="topbar">
    <a @click="appMenu = !appMenu" class="icon"><icon glyph="apps" /></a>
    <transition name="slide-in">
      <menu class="app-menu" v-if="appMenu">
        <app-menu v-on-clickaway="hideMenu" @transition="hideMenu" />
      </menu>
    </transition>
    <router-link to="/"><icon glyph="logo" height="24" width="122" /></router-link>
    <div class="user-menu">
      <img @click="showMenu = !showMenu" v-if="user" :alt="user.name" :src="user.avatar || 'http://static.bethel.io/images/default_avatar_white.png'" />
    </div>
    <transition name="slide-in">
      <menu class="usermenu" v-if="user && showMenu">
        <div v-on-clickaway="hideMenu">
          <p>{{ user.name }}</p>
          <router-link to="/settings" @click.native="hideMenu">
            Account Settings
            <icon glyph="settings" />
          </router-link>
          <router-link to="/settings/integrations" @click.native="hideMenu">
            Integrations
            <icon glyph="integration" />
          </router-link>
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
  props: {
    user: Object,
  },
};
</script>

<style scoped>
.topbar {
  align-items: center;
  background: #FFF;
  box-shadow: 0 1px 3px 2px rgba(0, 0, 0, .05);
  display: flex;
  flex-shrink: 0;
  height: 3rem;
  justify-content: space-between;
  line-height: 0;
  padding: 0 1rem;
  z-index: 9;
  & img {
    border-radius: 3px;
    cursor: pointer;
    height: 2rem;
  }
  & > div {
    display: flex;
    flex-direction: row;
    align-items: center;
  }
  & a {
    cursor: pointer;
    text-decoration: none;
  }
  & a svg {
    display: inline-block;
    fill: #106982;
    height: 24px;
  }
}
a.icon svg {
  fill: #106982;
}
.user-menu {
  z-index: 10;
}
.usermenu {
  align-items: flex-end;
  display: flex;
  font-size: 14px;
  flex-direction: column;
  line-height: normal;
  margin: 0;
  padding: 4px 8px;
  position: absolute;
  right: 0;
  top: 0;
  & > div {
    background-color: #fff;
    box-shadow: 0 0 1px rgba(99, 114, 130, 0.32), 0 8px 16px rgba(27, 39, 51, 0.08);
    border-radius: 3px;
    color: #1e2126;
    overflow: hidden;
    width: 240px;
  }
  & p {
    line-height: 40px;
    margin: 0;
    padding: 0 12px;
  }
  & span {
    color: #95aab5;
    font-size: 90%;
  }
  & a {
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
    & span {
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
  padding: 3.25rem 0.5rem 0;
  position: absolute;
  top: 0;
}
</style>
