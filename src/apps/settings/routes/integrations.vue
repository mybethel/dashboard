<script>
export default {
};
</script>

<template>
  <div class="locked">
    <panel>
      <h2>Integrations</h2>
      <p>Make the most of your account by integrating Bethel with other apps you use.</p>
    </panel>
    <panel class="integrations">
      <ul class="full">
        <li>
          <icon glyph="logo-vimeo" width="48" />
          <div>
            <h4>Vimeo Pro</h4>
            <p>Import videos uploaded to your Vimeo account</p>
          </div>
          <button>+ Integrate</button>
        </li>
        <li>
          <icon glyph="logo-youtube" width="48" />
          <div>
            <h4>YouTube</h4>
            <p>Schedule events and broadcast live through YouTube</p>
          </div>
          <button>+ Integrate</button>
        </li>
      </ul>
    </panel>
  </div>
</template>

<style scoped lang="scss">
div.panel {
  margin-left: 0;
  margin-right: 0;
}
.panel.integrations {
  padding: 0;
}
</style>
