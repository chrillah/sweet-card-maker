<template>
  <div class="hero-wrapper" :style="{ 'background-image': `url(${bgImage})` }">
    <RouterLink class="button-28 diy-btn hero-btn" to="/diy">Make a card</RouterLink>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        bgImage: '/assets/img/sandro-katalina-k1bO_VTiZSs-unsplash.jpg',
        images: [
          '/assets/img/sandro-katalina-k1bO_VTiZSs-unsplash.jpg',
          '/assets/img/kiran-k-dZ_RZiMc6s0-unsplash.jpg',
          '/assets/img/armand-khoury-4cBVro7SHLs-unsplash.jpg'
        ],
        index: 0
      }
    },
    created() {
      setInterval(() => {
        this.index = (this.index + 1) % this.images.length
        this.bgImage = this.images[this.index]
      }, 1000)
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
