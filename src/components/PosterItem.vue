<template>
  <div class="poster-wrapper" :style="color">
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
        descriptionImage: this.description,
        color : this.bgColor
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
      },
      bgColor :{
        type : String,
        required : true
      }
    }
  }
</script>
<style scoped>
.poster-wrapper{
  max-width: 800px;
  padding: 2rem;
  margin: 4rem;
  box-shadow: rgba(0, 0, 0, 0.56) 0px 22px 70px 4px;
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
