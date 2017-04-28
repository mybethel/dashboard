<template>
  <div :class="$style.topbar">
    <a @click="appMenu = !appMenu" :class="$style.icon" v-html="this.icons.apps"></a>
    <transition name="slide-in">
      <menu @click="appMenu = false" :class="$style.appMenu" v-if="appMenu">
        <app-menu />
      </menu>
    </transition>
    <a href="#/" v-html="this.icons.logo"></a>
    <div class="user-menu">
      <img @click="showMenu = !showMenu" v-if="user" :alt="user.name" :src="user.avatar || 'http://static.bethel.io/images/default_avatar_white.png'" />
      <a @click="showMenu = !showMenu" :class="$style.icon" v-html="this.icons.menu"></a>
    </div>
    <transition name="slide-in">
      <menu @click="showMenu = false" :class="$style.usermenu" v-if="user && showMenu">
        <div>
          <div>
            <p>{{ user.name }}</p>
            <span>{{ ministry.name }}</span>
          </div>
          <a>
            Account Settings
            <span v-html="this.icons.settings"></span>
          </a>
          <a @click="logout">
            Log Out
            <span v-html="this.icons.logout"></span>
          </a>
        </div>
      </menu>
    </transition>
  </div>
</template>

<script>
import { Session } from '../services';
import icons from '../assets';

export default {
  data() {
    return {
      appMenu: false,
      icons,
      showMenu: false,
    };
  },
  methods: {
    logout() {
      Session.logout();
      this.$router.push('login');
    },
  },
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

<style module>
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
  bottom: 0;
  display: flex;
  flex-direction: column;
  left: 0;
  line-height: normal;
  margin: 0;
  padding: 56px 8px 0;
  position: absolute;
  right: 0;
  top: 0;
  > div {
    background-color: #fff;
    box-shadow: 0 3px 20px rgba(16, 105, 130, .3), 0 1px 2px rgba(0, 0, 0, .05), 0 0 0 1px rgba(16, 105, 130, .1);
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
.appMenu {
  align-items: flex-start;
  bottom: 0;
  display: flex;
  flex-direction: column;
  left: 0;
  line-height: normal;
  margin: 0;
  padding: 56px 8px 0;
  position: absolute;
  right: 0;
  top: 0;
}
</style>
