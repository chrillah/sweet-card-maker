<script>
import TestList from '../components/TestList.vue'
export default {
  components:{
    TestList
  }
}
</script>
<template>
  <div class="wrapper">
    <h1>AboutView</h1>
    <TestList />
  </div>
</template>

<style>
.wrapper{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
</style>
