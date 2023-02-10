<template>
  <div class="hero-wrapper" :style="{ 'background-image': `url(${bgImage})` }" />
</template>

<script>
  export default {
    data() {
      return {
        bgImage : '/assets/img/sandro-katalina-k1bO_VTiZSs-unsplash.jpg',
        images: [
          '/assets/img/sandro-katalina-k1bO_VTiZSs-unsplash.jpg',
          '/assets/img/kiran-k-dZ_RZiMc6s0-unsplash.jpg',
          '/assets/img/armand-khoury-4cBVro7SHLs-unsplash.jpg'
        ],
        // images: [
        //   "background-image: url('/assets/img/sandro-katalina-k1bO_VTiZSs-unsplash.jpg');",
        //   "background-image: url('/assets/img/kiran-k-dZ_RZiMc6s0-unsplash.jpg');",
        //   "background-image: url('/assets/img/armand-khoury-4cBVro7SHLs-unsplash.jpg');"
        // ],
        index: 0
      }
    },
    // method: {
    //   change() {
    //     this.index = (this.index + 1) % this.images.length
    //     setInterval(this.change, 3000)
    //   }
    // },
    created() {
      setInterval(() => {
        this.index =
          (this.index + 1) % this.images.length
        this.bgImage = this.images[this.index]
      }, 1000)
    },
    // computed: {
    //   changeBg() {
    //     return this.images[this.index]
    //   }
    // }
  }
</script>

<style scoped>
  .hero-wrapper {
    /* background-image: url('/assets/img/sandro-katalina-k1bO_VTiZSs-unsplash.jpg'); */
    height: 100vh;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
  }
</style>
