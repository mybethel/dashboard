<script>
export default {
};
</script>

<template>
  <section>
    <div class="locked">
      <panel>
        <h1>Integrations</h1>
        <p>Make the most of your account by integrating Bethel with other apps you use.</p>
      </panel>
      <panel class="integrations">
        <ul>
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
  </section>
</template>

<style scoped lang="scss">
.panel.integrations {
  padding: 0;
}
ul {
  list-style: none;
  margin: 0;
  padding: 0;
  li {
    align-items: center;
    border-bottom: 1px solid #EEF1F6;
    display: flex;
    flex-direction: row;
    padding: 1rem 2rem;
    &:hover {
      background: #F7F8FB;
    }
    &:last-of-type {
      border-bottom: none;
    }
  }
  svg {
    margin-right: 1rem;
  }
  h4, p {
    margin: 0;
  }
  p {
    font-size: 0.9rem;
    margin-top: 0rem;
  }
  button {
    margin-left: auto;
  }
}
</style>
