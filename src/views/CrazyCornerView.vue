<template>
  <div class="wrapper">
    <h1 class="intro-text">Crazy corner</h1>
    <div class="container">
      <ComputedComponent />
      <ChildComponent @input-value-from-child="fromChild" />
      <h1 class="bg">{{ msg }}</h1>
      <!-- <CounterButton class="button-28" /> -->
    </div>
  </div>
  <CarRace />
</template>

<script>
  import ChildComponent from '../components/ChildComponent.vue'
  // import CounterButton from '../components/CounterButton.vue'
  import ComputedComponent from '../components/ComputedComponent.vue'
  import CarRace from '../components/CarRace.vue'
  export default {
    components: {
      ChildComponent,
      // CounterButton,
      ComputedComponent,
      CarRace
    },
    data() {
      return {
        msg: ''
      }
    },
    methods: {
      fromChild(input) {
        this.msg = input
      }
    }
  }
</script>
<style>
  .bg {
    font-family: monospace;
    text-align: center;
    padding: 1rem;
    width: 100%;
    background-color: #ffffff;
  }
</style>
