<template>
  <form class="input-info">
    <div class="input-container">
      <input type="text" v-model="inputValue" />
      <input type="button" @click="sendValue" value="Send" class="button-28" />
    </div>
  </form>
</template>

<script>
  export default {
    data() {
      return {
        inputValue: ''
      }
    },
    methods: {
      sendValue() {
        this.$emit('inputValueFromChild', this.inputValue)
        this.inputValue = ''
      }
    },
    emits: ['inputValueFromChild']
  }
</script>

<style scoped>
  input[type='text'] {
    width: 100%;
    padding: 0.5rem 2rem;
    margin: 0.5rem;
    /* padding: 12px;
    margin: 8px; */
    box-sizing: border-box;
  }

  .input-info {
    width: 100%;
    padding: 1rem;
    background-color: #ffffff;
    box-shadow: var(--box-shadow);
    min-height: 250px;
  }

  .input-container {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }

  input[type='button'] {
    margin-top: 2rem;
  }
</style>
