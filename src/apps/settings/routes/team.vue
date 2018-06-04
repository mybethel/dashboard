<script>
export default {
  mounted() {
    this.$store.dispatch('ministry/getTeam');
  },
};
</script>

<template>
  <div class="locked">
    <panel>
      <h2>Team</h2>
      <p>Invite everyone on your team to manage each part of your ministry.</p>
    </panel>
    <panel class="team">
      <ul class="full">
        <li v-for="user in $store.state.ministry.team">
          <avatar :email="user.email" height="48" width="48" />
          <div>
            <h4>{{ user.name }}</h4>
            <p>{{ user.email }}</p>
          </div>
        </li>
      </ul>
    </panel>
  </div>
</template>

<style scoped>
div.panel {
  margin-left: 0;
  margin-right: 0;
}
.panel.team {
  padding: 0;
}
img {
  border-radius: 4px;
  margin-right: 1rem;
}
</style>
