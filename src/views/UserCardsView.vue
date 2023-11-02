<template>
  <div class="wrapper">
    <div class="save-container">
      <div class="button-container">
        <RouterLink
          v-if="!$store.state.showSaved"
          class="button-28 diy-btn"
          to="/diy"
        >
          Make
          a new one
        </RouterLink>
        <!-- <RouterLink v-if="!$store.state.showSaved" class="button-28 diy-btn" to="/poster">Your collection of cards</RouterLink> -->

        <button
          v-if="$store.state.showSaved"
          @click="$store.commit('back')"
          class="button-28"
        >
          Back
        </button>

        <button
          type="button"
          v-if="$store.state.showSaved"
          class="button-28"
          @click="$store.commit('savedCards', receivedCard)"
        >
          Save
        </button>

        <!-- <button
          v-if="$store.state.showRemoved"
          class="button-28"
          @click="$store.commit('removeCard', receivedCard)"
        >
          Remove
        </button> -->
      </div>
      <div class="container" v-if="!$store.state.showSaved">
        <UserCardItem
          v-for="card in listOfCards"
          @send-card="received"
          :key="card.id"
          :title="$route.params.inputFromUser"
          :image="card.image"
          :font-style="card.fontStyle"
        />
        <!-- <UserPosterItem
          @send-card="received"
          v-for="item in listOfCards"
          :key="item.id"
          :title="$route.params.inputFromUser"
          :image-src="item.image"
          :bg-color="item.color"
          :font-style="item.fontStyle"
        /> -->
      </div>

      <div v-if="$store.state.showSaved">
        <CardItem
          :font-style="receivedCard.fontStyle"
          :image="receivedCard.image"
          :title="receivedCard.title"
        />
        <!-- <PosterItem
          :title="receivedCard.title"
          :image-src="receivedCard.imageSrc"
          :bg-color="receivedCard.bgColor"
          :font-style="receivedCard.fontStyle"
        /> -->
      </div>
    </div>
  </div>
</template>
<script>
  import UserCardItem from '../components/UserCardItem.vue'
  import CardItem from '../components/CardItem.vue'
  // import PosterItem from '../components/PosterItem.vue'
  // import UserPosterItem from '../components/UserPosterItem.vue'
  import axios from 'axios'
  export default {
    mounted() {
      this.fetchCards()
    },
    created() {
      this.fetchCards()
    },
    methods: {
      async fetchCards() {
        const response = await axios.get('listOfObjects.json', {
          headers: {
            Accept: 'application/json'
          }
        })
        this.listOfCards = response.data
      },
      received(savedCard) {
        this.receivedCard = savedCard
        this.$store.commit('showSaveButton')
      }
    },
    data() {
      return {
        listOfCards: [],
        receivedCard: {}
      }
    },
    components: {
      CardItem,
      UserCardItem
      // PosterItem,
      // UserPosterItem
    }
  }
</script>
<style scoped>
  .button-container {
    margin: 5rem;
    /* align-content: center; */
    display: grid;
    gap: 1rem;
    grid-template-rows: 1fr 1fr;
  }

  .button-28 {
    min-width: 320px;
  }
  .diy-btn:hover {
    color: #000000;
  }
</style>
