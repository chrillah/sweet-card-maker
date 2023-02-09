<template>
  <div class="wrapper">
    <div class="container">
      <div class="button-container">
        <RouterLink class="button-28 diy-btn" to="/diy">Make a new one</RouterLink>
      </div>
      <!-- <TestPosterItem
        @send-style="received"
        v-for="item in list"
        :key="item.id"
        :title="$route.params.inputFromUser"
        :image-src="item.image"
        :bg-color="item.color"
        :font-style="item.fontStyle"
      />

      <PosterItem
        v-if="receivedObject"
        :title="receivedObject.title"
        :image-src="receivedObject.imageSrc"
        :bg-color="receivedObject.bGcolor"
        :font-style="receivedObject.fontStyle"
      /> -->
      <PosterItem
        v-for="item in list"
        :key="item.id"
        :title="$route.params.inputFromUser"
        :image-src="item.image"
        :description="item.description"
        :bg-color="item.color"
        :font-style="item.fontStyle"
      />
    </div>
  </div>
</template>
<script>
  import PosterItem from '../components/PosterItem.vue'
  // import TestPosterItem from '../components/TestPosterItem.vue'
  import axios from 'axios'
  export default {
    mounted() {
      this.fetchData()
    },
    methods: {
      async fetchData() {
        const res = await axios.get('testList.json', {
          headers: {
            Accept: 'application/json'
          }
        })
        this.list = res.data
      },
      received(object) {
        console.log(object)
        this.receivedObject = object
        console.log(this.receivedObject)
      }
    },
    data() {
      return {
        list: [],
        receivedObject: {}
      }
    },
    components: {
      PosterItem,
      // TestPosterItem
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
