<script>
export default {};
</script>

<template>
  <div>
    <header>
      <div class="locked">
        <h1>Account Settings</h1>
        <ul class="tabs">
          <router-link tag="li" :to="{ name: 'settings.personal' }" exact>Personal</router-link>
          <router-link tag="li" :to="{ name: 'settings.ministry' }" exact>Ministry</router-link>
          <router-link tag="li" :to="{ name: 'settings.team' }" exact>My Team</router-link>
          <router-link tag="li" :to="{ name: 'settings.integrations' }" exact>Integrations</router-link>
          <router-link tag="li" :to="{ name: 'settings.billing' }">Billing</router-link>
        </ul>
      </div>
    </header>
    <router-view />
  </div>
</template>

<style scoped>
div {
  display: flex;
  flex-direction: column;
  flex-grow: 1;
}
header {
  background: var(--brand-dark);
  & h1 {
    color: #FFF;
    font-size: 2.5rem;
    font-weight: 200;
    padding: 2rem 2rem 1rem;
  }
}
.tabs {
  padding: 0 1rem;
}
</style>
