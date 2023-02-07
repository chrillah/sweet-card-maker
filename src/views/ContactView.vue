<script>
  import CounterButton from '../components/CounterButton.vue'
  export default {
    components: {
      CounterButton
    }
  }
</script>

<template>
  <div class="wrapper">
    <div class="intro-section">
      <h1 class="intro-text">Contact</h1>
    </div>
    <div class="container">
      <div class="contact-wrapper">
        <form class="contact-info">
          <label for="name">Namn:</label>
          <input type="text" id="name" name="name" />

          <label for="email">E-post:</label>
          <input type="email" id="email" name="email" />

          <input type="submit" value="Skicka" />
        </form>
      </div>
      <CounterButton />
    </div>
  </div>
</template>
<style scoped>
  .contact-wrapper {
    width: 100%;
    display: grid;
    grid-template-areas: 'info img';
  }
  .contact-info {
    background-color: #FFFFFF;
    grid-area: info;
  }
  .input-name {
    margin: 1rem;
    max-width: 400px;
    display: inline-block;
  }
</style>
