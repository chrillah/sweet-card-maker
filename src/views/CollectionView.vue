<script>
  import CardList from '../components/CardList.vue';
  export default {
    components: {
      CardList
    }
  }
</script>
<template>
  <div class="wrapper">
    <h1 class="intro-text">Some of our collection</h1>
    <div class="grid-container">
      <CardList />
      <!-- <PosterList /> -->
    </div>
  </div>
</template>

<style scoped>
  /* .grid-container {
    margin: 0 2rem;
    line-height: 0;
    -webkit-column-count: 1;
    -webkit-column-gap: 0px;
    -moz-column-count: 1;
    -moz-column-gap: 0px;
    column-count: 1;
    column-gap: 2rem;
  }

  @media (min-width: 650px) {
    .grid-container {
      margin: 0 2rem;
      line-height: 0;
      -webkit-column-count: 2;
      -webkit-column-gap: 0px;
      -moz-column-count: 2;
      -moz-column-gap: 0px;
      column-count:2;
      column-gap: 2rem;
    }
  }
  @media (min-width: 980px) {
    .grid-container {
      margin: 0 2rem;
      line-height: 0;
      -webkit-column-count: 3;
      -webkit-column-gap: 0px;
      -moz-column-count: 3;
      -moz-column-gap: 0px;
      column-count:3;
      column-gap: 2rem;
    }
  } */
</style>
