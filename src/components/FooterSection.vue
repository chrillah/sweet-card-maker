<template>
  <div class="footer-wrapper">
    <div class="footer-container">
      <div class="footer-items">
        <h1 class="footer-info">Footer</h1>
      </div>
      <div class="footer-items">
        <div class="footer-logo" />
      </div>
    </div>
  </div>
</template>
<style>
  .footer-wrapper {
    background-color: #000000;
    margin: 2rem;
    /* display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center; */
  }

  .footer-container {
    width: 100%;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1rem;
  }

  .footer-info{
    color:#FFFFFF;
  }
  .footer-log{
    background-image: url('/assets/img/logo.png');
  }
</style>
