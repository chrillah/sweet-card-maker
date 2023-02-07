<template>
  <div class="poster-container">
    <h1 class="name-title">{{ name }}</h1>
    <img class="image-poster" :src="image" :alt="descriptionImage" />
  </div>
</template>

<script>
  export default {
    data() {
      return {
        name: this.listName,
        image: this.imageSrc,
        descriptionImage: this.description
      }
    },
    props: {
      listName: {
        type: String,
        required: true
      },
      imageSrc: {
        type: String,
        required: true
      },
      description: {
        type: String,
        required: true
      }
    }
  }
</script>
<style scoped>
.poster-container{
  max-width: 500px;
}
  .image-poster {
    height: auto;
    max-width: 100%;
  }
</style>
