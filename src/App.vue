<script>
  import CounterButton from './components/CounterButton.vue'
  import TestList from './components/TestList.vue'
  import NavBar from './components/NavBar.vue'

  export default {
    components: {
      CounterButton,
      TestList,
      NavBar
    }
  }
</script>

<template>
  <NavBar />
  <!-- <HelloWorld msg="Hello World!" /> -->
  <CounterButton />
  <TestList />
</template>
