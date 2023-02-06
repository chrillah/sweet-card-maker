<script>
  import CitiesList from './components/CitiesList.vue'
  import HelloWorld from './components/HelloWorld.vue'
  import CounterButton from './components/CounterButton.vue'
  import TestList from './components/TestList.vue'
  import NavBar from './components/NavBar.vue'

  export default {
    components: {
      CitiesList,
      HelloWorld,
      CounterButton,
      TestList,
      NavBar
    }
  }
</script>

<template>
  <NavBar />
  <HelloWorld msg="Hello World!" />
  <CitiesList />
  <CounterButton />
  <TestList />
</template>
