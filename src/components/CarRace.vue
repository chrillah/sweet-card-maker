<template>
  <div class="wrapper">
    <h1 class="intro-text">Car Race</h1>
    <div class="container">
      <div>
        <button class="button-28" @click="$store.commit('moveCar')">Move Car</button>
        <p :style="{ position: 'relative', right: $store.state.right + 'px' }">🚙</p>
      </div>
    </div>
  </div>
</template>

<script>
  // export default {
  //   data() {
  //     return {
  //       right: -50,
  //       numberOfClick: 0
  //     }
  //   },
  //   methods: {
  //     moveCar() {
  //       this.numberOfClick++
  //       this.right += 10
  //       if(this.numberOfClick > 20){
  //         this.right = -50
  //       }
  //     }
  //   }
  // }
</script>
