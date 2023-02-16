<template>
  <div class="footer-wrapper">
    <div class="footer-container">
      <div class="footer-items">
        <h1 class="footer-info">Info</h1>
        <p class="footer-text">More info</p>
        <img class="footer-logo" src="/assets/img/logo.png" alt="" />
      </div>
      <div class="footer-items">
        <p class="footer-text">
          <a href="https://unsplash.com/">All pictures</a>
        </p>
        <!-- <div class="footer-logo" /> -->
      </div>
    </div>
  </div>
</template>
<style>
  .footer-wrapper {
    min-height: 20vh;
    background-color: #000000;
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

  .footer-items {
    padding: 1rem;
  }

  .footer-info {
    color: #ffffff;
  }

  .footer-logo {
    /* background-image: url('./assets/img/logo.png'); */
    width: 80px;
    height: auto;
  }

  .footer-text {
    color: #ffffff;
    font-family: monospace;
  }

  .footer-text a {
    color: #ffffff;
    text-decoration: none;
  }
</style>
