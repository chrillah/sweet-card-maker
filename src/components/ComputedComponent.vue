<template>
  <form class="input-info">
    <div class="input-container">
      <p class="label">First name</p>
      <input type="text" v-model="name" />
      <p class="label">Last name</p>
      <input type="text" v-model="lastName" />
    </div>
    <h1 class="text">{{ fullName }}</h1>
  </form>
</template>
<script>
  export default {
    data() {
      return {
        name: '',
        lastName: ''
      }
    },
    computed: {
      fullName() {
        return `${this.name} ${this.lastName}`
      }
    }
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

  .text{
    text-align: center;
  }

  .input-info {
    width: 100%;
    padding: 1rem;
    background-color: #ffffff;
    box-shadow: var(--box-shadow);
    min-height: 350px;
    margin-bottom: 5rem;
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
