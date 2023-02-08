<template>
  <nav class="navbar navbar-expand-lg bg-body-tertiary">
    <div class="container-fluid">
      <RouterLink class="navbar-brand" to="/"><img class="logo" src="/assets/img/logo.png" alt="" /></RouterLink>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNavAltMarkup"
        aria-controls="navbarNavAltMarkup"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon" />
      </button>
      <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div class="navbar-nav">
          <RouterLink class="nav-link" aria-current="page" to="/">Home</RouterLink>
          <RouterLink class="nav-link" to="/collection">Collection</RouterLink>
          <RouterLink class="nav-link" to="/diy">DIY</RouterLink>
          <RouterLink class="nav-link" to="/crazyCorner">Crazy Corner</RouterLink>
        </div>
      </div>
    </div>
  </nav>
  <RouterView />
</template>
<style scoped>
.navbar{
  z-index: 100;
  width: 100%;
  position: fixed;
  background-color: #FFFFFF;
}
.logo{
  width: 100px;
  height: auto;
}

.nav-link{
  font-family: monospace;
  font-weight: 800;
  color: black;
}
.nav-link:hover,.nav-link:focus{
  /* background-color: indigo; */
  /* color: white; */
  background-color: var(--active-color);

  font-weight: 400;
}

.navbar-toggler{
  color: #000000;
}
</style>
