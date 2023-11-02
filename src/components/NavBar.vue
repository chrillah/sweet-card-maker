<template>
  <nav :class="class">
    <div class="container-fluid">
      <RouterLink class="navbar-brand" to="/"
        ><img class="logo" src="/assets/img/logo_v3.png" alt=""
      /></RouterLink>
      <button
        @click="onMenu()"
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
          <RouterLink
            class="nav-link" aria-current="page"
            to="/" >Home</RouterLink>
          <RouterLink class="nav-link" to="/collection">Collection</RouterLink>
          <RouterLink class="nav-link" to="/diy">DIY</RouterLink>
          <RouterLink class="nav-link" to="/poster">
            <div v-if="this.$store.state.cards.length !== 0">{{ numberOfCards }}</div>
            <div v-if="this.$store.state.cards.length === 0">No cards</div>
          </RouterLink>
        </div>
      </div>
    </div>
  </nav>
  <RouterView />
  <FooterSection />
</template>
<script>
  import FooterSection from './FooterSection.vue'
  export default {
    data(){
      return{
        class : 'navbar navbar-expand-lg bg-body-tertiary',
        menuOpen: false,
      }
    },
    components: {
      FooterSection
    },
    computed: {
      numberOfCards() {
        return 'Your Cards ' + this.$store.state.cards.length
      }
    },
    methods: {
      onMenu() {
        this.menuOpen = !this.menuOpen
        if(this.menuOpen){
          this.class = 'navbar navbar-expand-lg bg-body-tertiary nav-bar-shadow'
        } else {
          this.class = 'navbar navbar-expand-lg bg-body-tertiary'
        }
      }
    }
  }
</script>
<style scoped>
  .navbar {
    z-index: 100;
    width: 100%;
    position: fixed;
    background-color: #ffffff;
    padding-bottom: 2rem;
    transition: all ease-in 300ms;
  }

  .nav-bar-shadow{
   box-shadow: rgba(203, 183, 255, 0.7) 0px 22px 70px 4px;
  }
  .logo {
    width: 50px;
    height: auto;
  }

  .nav-link {
    font-family: monospace;
    font-weight: 800;
    color: black;
  }
  .nav-link:hover,
  .nav-link:focus,
  .logo:hover {
    background-color: var(--active-color);
    font-weight: 400;
  }

  .navbar-toggler {
    color: #000000;
  }
</style>
