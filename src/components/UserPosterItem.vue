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
    emits: ['sendCard'],
    methods: {
      saveStyle() {
        this.style.title = this.name
        this.style.imageSrc = this.image
        this.style.bgColor = this.color
        this.style.fontStyle = this.font
        this.$emit('sendCard', this.style)
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
