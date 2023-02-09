<template>
  <div class="wrapper">
    <div class="container">
      {{ $route.params.savedPoster }}
      <PosterItem
        :title="poster.title"
        :image-src="poster.imageSrc"
        :bg-color="poster.bgColor"
        :font-style="poster.fontStyle"
      />
    </div>
  </div>
</template>
<script>
  import PosterItem from '../components/PosterItem.vue'
  export default {
    components: {
      PosterItem
    },
    mounted(){
      if (this.$route.params.savedPoster) {
        console.log(this.$route.params.savedPoster)
        this.poster = this.$route.params.savedPoster
      }
    },
    data() {
      return {
        poster: {}
      }
    }
  }
</script>
