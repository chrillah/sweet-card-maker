<template>
  <div class="wrapper">
    <h1 v-if="$store.state.showSaved" class="intro-text">Here is all your shit</h1>
    <h1 v-if="!$store.state.showSaved" class="intro-text">You have to do it yourself</h1>
    <div v-if="!$store.state.showSaved" class="button-container">
      <RouterLink class="button-28 diy-btn" to="/diy">Make one</RouterLink>
    </div>
    <div class="container">
      <div v-if="$store.state.showSaved">
        <PosterItem
          v-for="poster in $store.state.posters"
          :key="poster.key"
          :title="poster.title"
          :image-src="poster.imageSrc"
          :bg-color="poster.bgColor"
          :font-style="poster.fontStyle"
        />
                <!-- <button
          v-if="$store.state.showRemoved"
          class="button-28"
          @click="$store.commit('removePoster', receivedPoster)"
        >
          Remove
        </button> -->
      </div>
    </div>
  </div>
</template>
<script>
  import PosterItem from '../components/PosterItem.vue'
  export default {
    components: {
      PosterItem
    }
  }
</script>
<style scoped>
  .button-container {
    margin: 5rem;
    align-content: center;
  }
  .diy-btn:hover {
    color: #000000;
  }
</style>
