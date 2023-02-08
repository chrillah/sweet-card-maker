<template>
  <div class="wrapper">
    <div class="container">
      <h1>{{ userInput }}</h1>
    </div>
  </div>
</template>
<script>
export default{
  data(){
    return{
      userInput : this.inputFromUser
    }
  },
  props :{
    inputFromUser :{
      type : String,
      required : true
    }
  }
}
</script>
