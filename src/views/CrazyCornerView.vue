<template>
  <div class="wrapper">
    <div class="container">
      <ChildComponent />
    </div>
  </div>
</template>

<script>
  import ChildComponent from '../components/ChildComponent.vue'
  export default {
    components: {
      ChildComponent
    }
  }
</script>
