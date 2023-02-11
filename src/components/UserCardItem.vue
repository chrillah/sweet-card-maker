<template>
  <button class="btn" @click="saveStyle">
    <div class="card-wrapper">
      <div class="card-container">
        <img class="card-image" :src="cardImage" />
        <h1 :class="cardFontStyle">{{ cardTitle }}</h1>
      </div>
    </div>
  </button>
</template>

<script>
  export default {
    data() {
      return {
        style: {},
        cardTitle: this.title,
        cardImage: this.image,
        cardFontStyle: this.fontStyle
      }
    },
    emits: ['sendCard'],
    methods: {
      saveStyle() {
        this.style.title = this.cardTitle
        this.style.imageSrc = this.cardImage
        this.style.fontStyle = this.cardFontStyle
        this.$emit('sendCard', this.style)
      }
    },
    props: {
      title: {
        type: String,
        required: true
      },
      image: {
        type: String,
        required: true
      },
      fontStyle: {
        type: String,
        required: true
      }
    }
  }
</script>
<style scoped>
  .card-wrapper {
    padding: 2rem;
    margin-bottom: 2rem;
  }
  .card-container {
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    box-shadow: var(--box-shadow);
  }
  .card-image {
    height: auto;
    width: 100%;
  }
  /* .name-title {
    text-align: center;
    background-color: #ffffff;
    padding: 1rem;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  } */

  @media (max-width: 450px) {
    .card-wrapper {
      margin: 1rem;
      padding: 1rem;
    }
  }
</style>
