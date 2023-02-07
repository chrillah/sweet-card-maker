<script>
  import TestList from '../components/TestList.vue'
  export default {
    components: {
      TestList
    }
  }
</script>
<template>
  <div class="wrapper">
    <div class="container">
      <h1>AboutView</h1>
      <TestList />
    </div>
  </div>
</template>

<style scoped>
  .wrapper {
    width: 100%;
  }
  .container{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
</style>
