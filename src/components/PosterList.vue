<script>
  import axios from 'axios'
  import PosterItem from './PosterItem.vue'
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

<template>
  <PosterItem
    v-for="item in list"
    :key="item.id"
    :title="item.name"
    :image-src="item.image"
    :bg-color="item.color"
    :font-style="item.fontStyle"
  />
</template>

<style scoped></style>
