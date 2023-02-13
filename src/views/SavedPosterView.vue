<template>
  <div class="wrapper">
    <h1 v-if="$store.state.showCards" class="intro-text">
      Here is all your shit
    </h1>

    <div v-if="!$store.state.showCards" class="button-container">
      <h1 class="intro-text">You have to do it yourself</h1>
      <RouterLink class="button-28 diy-btn" to="/diy">Make one</RouterLink>
    </div>

    <div class="container">
      <div v-if="$store.state.showCards">
        <CardItem
          v-for="card in $store.state.cards"
          :key="card.key"
          :title="card.title"
          :image="card.image"
          :font-style="card.fontStyle"
        />
        <!-- <PosterItem
          v-for="card in $store.state.cards"
          :key="card.key"
          :title="card.title"
          :image-src="card.imageSrc"
          :bg-color="card.bgColor"
          :font-style="card.fontStyle"
        /> -->
      </div>
    </div>
  </div>
</template>
<script>
  import CardItem from '../components/CardItem.vue'
  // import PosterItem from '../components/PosterItem.vue'
  export default {
    components: {
      CardItem
      // PosterItem
    }
  }
</script>
<style scoped>
  .button-container {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }

  .diy-btn {
    max-width: 420px;
  }
  .diy-btn:hover {
    color: #000000;
  }
</style>
