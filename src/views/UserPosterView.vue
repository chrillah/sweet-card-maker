<template>
  <div class="wrapper">
    <div class="container">
      <div class="button-container">
        <RouterLink class="button-28 diy-btn" to="/diy"
          >Make a new one</RouterLink
        >
        <button
          v-if="show"
          class="button-28"
          @click="$store.commit('savedPosters', receivedPoster)"
        >
          Save
        </button>
        <!-- <button
          v-if="$store.state.showRemoved"
          class="button-28"
          @click="$store.commit('removePoster', receivedPoster)"
        >
          Remove
        </button> -->
      </div>
      <div class="container" v-if="!show">
        <UserPosterItem
          @send-style="received"
          v-for="item in listOfPosters"
          :key="item.id"
          :title="$route.params.inputFromUser"
          :image-src="item.image"
          :bg-color="item.color"
          :font-style="item.fontStyle"
        />
      </div>

      <div v-if="show">
        <PosterItem
          :title="receivedPoster.title"
          :image-src="receivedPoster.imageSrc"
          :bg-color="receivedPoster.bgColor"
          :font-style="receivedPoster.fontStyle"
        />
      </div>
    </div>
  </div>
</template>
<script>
  import PosterItem from '../components/PosterItem.vue'
  import UserPosterItem from '../components/UserPosterItem.vue'
  import axios from 'axios'
  export default {
    mounted() {
      this.fetchPosters()
    },
    methods: {
      async fetchPosters() {
        const response = await axios.get('testList.json', {
          headers: {
            Accept: 'application/json'
          }
        })
        this.listOfPosters = response.data
      },
      received(savedPoster) {
        this.receivedPoster = savedPoster
        this.show = true
      }
    },
    data() {
      return {
        listOfPosters: [],
        receivedPoster: {},
        show: false
      }
    },
    components: {
      PosterItem,
      UserPosterItem
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
  .diy-btn:hover {
    color: #000000;
  }
</style>
