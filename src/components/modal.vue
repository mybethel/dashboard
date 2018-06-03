<script>
export default {
};
</script>

<template>
  <section>
    <fieldset>
      <slot />
    </fieldset>
  </section>
</template>

<style scoped>
  section {
    align-items: center;
    background-color: #106982;
    background-image: -webkit-radial-gradient(0% bottom, rgba(21, 145, 181, 0.7) 0, rgba(21, 145, 181, 0) 60%), -webkit-radial-gradient(50% top, rgba(21, 145, 181, 0.6) 0, rgba(21, 145, 181, 0) 75%);
    bottom: 0;
    display: flex;
    justify-content: center;
    left: 0;
    padding: 3rem;
    position: absolute;
    right: 0;
    top: 0;
    text-align: center;
    z-index: 10;
  }
  fieldset {
    border: 0;
    box-sizing: border-box;
    color: #3A3B3C;
    width: 370px;
    max-width: 100%;
    margin: 0 auto;
    overflow: hidden;
    padding: 0 30px;
    background: #FFFFFF;
    border-radius: 3px;
    box-shadow: 0 0 25px rgba(0, 0, 0, 0.05);
  }
  h1 {
    text-transform: none;
    letter-spacing: normal;
    box-shadow: none;
    font-weight: 300;
    width: 100%;
    float: left;
    margin-bottom: 8px;
    padding-top: 30px;
    text-align: center;
    & + p {
      color: #484848;
      font-size: 0.875rem;
      margin-bottom: 30px;
      text-align: center;
    }
  }
  button {
    font-size: 1rem;
    line-height: 30px;
    width: 100%;
  }
  footer {
    background: #f5f5f5;
    border-top: 1px solid rgba(0,0,0,0.12);
    margin: 1rem -30px 0;
    padding: 0.5rem;
    text-align: center;
    p {
      color: #B7B7B7;
      font-size: 14px;
      padding-top: 11px;
      margin-bottom: 19px;
      text-align: center;
    }
  }
</style>
