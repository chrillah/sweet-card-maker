<template>
  <div class="wrapper">
    <h1 class="intro-text">Car Race</h1>
    <div class="container">
      <div>
        <button class="button-28" @click="$store.commit('moveCar')">
          Move Car
        </button>
        <p :style="{ position: 'relative', right: $store.state.right + 'px' }">
          🚙
        </p>
      </div>
    </div>
  </div>
</template>

<script></script>
