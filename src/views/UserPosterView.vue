<template>
  <div class="wrapper">
    <div class="container">
      <div class="button-container">
        <RouterLink class="button-28 diy-btn" to="/diy">Make a new one</RouterLink>
      </div>
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
<style scoped>
  .button-container {
    margin: 5rem;
    align-content: center;
  }
  .diy-btn:hover{
    color: #000000
}
</style>
