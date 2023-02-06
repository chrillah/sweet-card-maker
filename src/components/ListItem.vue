<template>
  <li>
    <h1>{{ name }}</h1>
  </li>
</template>

<script>
  export default {
    data() {
      return {
        name: this.listName
      }
    },
    props: {
      listName: {
        type: String,
        required: true
      }
    }
  }
</script>
