<template>
  <form class="input-info">
    <div class="input-container">
      <!-- <p class="label">Input your name</p>
      <input type="text" v-model="name" /> -->
      <p class="label">Write a quote</p>
      <input type="text" v-model="quote" />
    </div>
    <input
      v-if="quote"
      type="button"
      value="Make me a poster yo"
      @click="sendQuote"
      class="button-28"
    />
  </form>
</template>

<script>
  export default {
    data() {
      return {
        quote: ''
      }
    },
    methods: {
      sendQuote(inputFromUser) {
        inputFromUser = this.quote
        this.$router.push({ name: 'user', params: { inputFromUser } })
      }
    },
    watch: {
      // name(newName, oldName) {
      //   console.log(`${oldName} has changed to ${newName}`)
      // },
      quote(newQuote, oldQuote) {
        console.log(`${oldQuote} has changed to ${newQuote}`)
      }
    }
  }
</script>

<style scoped>
  input[type='text'] {
    width: 100%;
    padding: 0.5rem 2rem;
    margin: 0.5rem;
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
