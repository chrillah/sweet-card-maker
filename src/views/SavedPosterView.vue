<template>
  <div class="wrapper">
    <div class="saved-container">
      <h1 v-if="$store.state.showCards" class="intro-text">
        Here is all your sweets
      </h1>

      <div v-if="!$store.state.showCards" class="button-container">
        <h1 class="intro-text">You have to do it yourself</h1>
        <RouterLink class="button-28 diy-btn" to="/diy">Make one</RouterLink>
      </div>
    </div>

    <div v-if="$store.state.showCards" class="container">
      <CardItem
        v-for="card in $store.state.cards"
        :key="card.key"
        :title="card.title"
        :image="card.image"
        :font-style="card.fontStyle"
      />
    </div>
  </div>
</template>
<script>
  import CardItem from '../components/CardItem.vue'
  export default {
    components: {
      CardItem
    }
  }
</script>
<style>
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
