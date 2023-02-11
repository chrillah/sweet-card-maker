<template>
  <form class="input-info">
    <div class="input-container">
      <p class="label">Write a quote</p>
      <input type="text" v-model="quote" />
      <!-- <p v-if="quote">Here is your quote</p>
      <h1>{{ quote }}</h1> -->
    </div>
    <input
      v-if="quote"
      type="button"
      value="Make me a card yo"
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
      quote(newQuote, oldQuote) {
        console.log(`${oldQuote} has changed to ${newQuote}`)
      }
    },
    computed(){
      return this.quote
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
    max-width: 420px;
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
