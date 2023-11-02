<template>
  <div class="hero-wrapper" :style="{ 'background-image': `url(${bgImage})` }">
    <RouterLink class="button-28 diy-btn hero-btn" to="/diy">Make a card</RouterLink>
  </div>
</template>

<script>
  import axios from 'axios'
  export default {
    methods: {
      async fetchData() {
        const res = await axios.get('heroImage.json', {
          headers: {
            Accept: 'application/json'
          }
        })
        this.images = res.data
      }
    },
    mounted() {
      this.fetchData()
    },
    data() {
      return {
        bgImage: 'https://images.unsplash.com/photo-1598112155290-484266d5d312?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        images: [],
        index: 0
      }
    },
    created() {
  setInterval(() => {
    this.index = (this.index + 1) % this.images.length;
    this.bgImage = this.images[this.index].image;
  }, 1000);
}
  }
</script>

<style scoped>
  .hero-wrapper {
    height: 100vh;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .hero-btn{
    max-width: 300px;
  }
</style>
