<script>
  import UserInput from '../components/UserInput.vue'
  export default {
    components: {
      UserInput
    }
  }
</script>
<template>
  <div class="wrapper">
    <div class="diy-container">
      <div class="diy-item">
        <h1 class="intro-text">Do it yourself</h1>
        <UserInput />
      </div>
    </div>
  </div>
</template>
