<template>
  <div class="poster-wrapper">
    <div class="poster-container">
      <h1 class="name-title">{{ name }}</h1>
      <img class="image-poster" :src="image" :alt="descriptionImage" />
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        name: this.title,
        image: this.imageSrc,
        descriptionImage: this.description
      }
    },
    props: {
      title: {
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
.poster-wrapper{
  max-width: 800px;
  padding-bottom: 4rem;
}
  .poster-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .image-poster {
    height: auto;
    max-width: 100%;
  }
</style>
