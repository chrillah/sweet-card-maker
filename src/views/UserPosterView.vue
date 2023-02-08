<template>
  <div class="wrapper">
    <div class="container">
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
      }
    },
    data() {
      return {
        list: []
      }
    },
    components: { PosterItem }
  }
</script>
