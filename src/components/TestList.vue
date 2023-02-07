<script>
  import axios from 'axios'
  import ListItem from './ListItem.vue'
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
    components: { ListItem }
  }
</script>

<template>
  <div class="list-item-wrapper">
    <ListItem
      v-for="item in list"
      :key="item.id"
      :list-name="item.name"
      :image-src="item.image"
    />
  </div>
</template>

<style scoped>
.list-item-wrapper{
  padding: 1rem;
}
</style>
