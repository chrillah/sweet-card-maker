<template>
  <div class="poster-wrapper">
    <div class="poster-container">
      <img class="image-poster" :src="image" :alt="descriptionImage" />
      <h1 class="name-title">{{ name }}</h1>
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
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .image-poster {
    height: auto;
    max-width: 100%;
  }

  .name-title{
    background-color: #FFFFFF;
    padding: 1rem;
    font-style: italic;
    position: absolute;
    top:50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
  .misc{
    background-color: #FFFFFF;
    padding: 1rem;
    position: absolute;
    top:50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
</style>
