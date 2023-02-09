<script>
  import PosterList from '../components/PosterList.vue'
  export default {
    components: {
      PosterList
    }
  }
</script>
<template>
  <div class="wrapper">
    <h1 class="intro-text">Some of our collection</h1>
    <div class="grid-container">
      <PosterList />
    </div>
  </div>
</template>

<style scoped>
.grid-container{
  line-height: 0;
  -webkit-column-count: 3;
  -webkit-column-gap: 0px;
  -moz-column-count: 3;
  -moz-column-gap: 0px;
  column-count: auto-fit;
  column-gap: 2rem;
}
</style>
