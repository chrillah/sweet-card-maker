<script>
  import axios from 'axios'
  import CardItem from './CardItem.vue'
  export default {
    mounted() {
      this.fetchData()
    },
    methods: {
      async fetchData() {
        const res = await axios.get('listOfObjects.json', {
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
    components: { CardItem }
  }
</script>

<template>
  <!-- <PosterItem
    v-for="item in list"
    :key="item.id"
    :title="item.name"
    :image-src="item.image"
    :bg-color="item.color"
    :font-style="item.fontStyle"
  /> -->
  <CardItem
    v-for="card in list"
    :key="card.id"
    :title="card.title"
    :image="card.image"
    :font-style="card.fontStyle"
  />
</template>

<style scoped></style>
