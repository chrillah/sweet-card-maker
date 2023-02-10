<template>
  <button class="btn" @click="saveStyle">
    <div class="poster-wrapper" :style="color">
      <div class="poster-container">
        <img class="image-poster" :src="image" />
        <h1 :style="font" class="name-title">{{ name }}</h1>
      </div>
    </div>
  </button>
</template>

<script>
  export default {
    data() {
      return {
        style: {},
        name: this.title,
        image: this.imageSrc,
        color: this.bgColor,
        font: this.fontStyle
      }
    },
    emits: ['sendStyle'],
    methods: {
      saveStyle() {
        this.style.title = this.name
        this.style.imageSrc = this.image
        this.style.bgColor = this.color
        this.style.fontStyle = this.font
        this.$emit('sendStyle', this.style)
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
      bgColor: {
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
  /* .poster-wrapper {
    padding: 2rem;
    margin-bottom: 2rem;
    box-shadow: var(--box-shadow);
  }
  .poster-container {
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .image-poster {
    max-height: 70vh;
    width: 100%;
  }

  .name-title {
    text-align: center;
    background-color: #ffffff;
    padding: 1rem;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
  .btn{
    border: none;
    background: none;
    transition: all 300ms cubic-bezier(.23, 1, 0.32, 1);
    will-change: transform;
  }

  .btn:hover{
    transform: translateY(-4px);

  }

  @media (max-width: 450px) {
    .poster-wrapper {
      margin: 1rem;
      padding: 1rem;
    }
  } */
</style>
