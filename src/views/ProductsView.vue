<template>
  <div class="products-wrapper">
    <div class="products-container">
      <ProductItem
        v-for="product in products"
        :key="product.id"
        :image="product.image"
        :price="product.price"
        :title="product.title"
      />
    </div>
  </div>
</template>

<style>
  .products-wrapper {
    background-color: white;
    padding-top: 8rem;
  }
  .products-container {
    position: relative;
    display: grid;
    grid-template-columns: 1fr;
  }

  @media (min-width: 375px) {
    .products-container{
      grid-template-columns: 1fr 1fr;
    }
  }

  @media (min-width: 500px) {
    .products-container{
      grid-template-columns: 1fr 1fr 1fr;
    }
  }

  @media (min-width: 768px) {
    .products-container{
      grid-template-columns: 1fr 1fr 1fr 1fr;
    }
  }

  @media (min-width: 1024px) {
    .products-container{
      grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
    }
  }
</style>

<script>
  import ProductItem from '../components/ProductItem.vue'
  import axios from 'axios'
  export default {
    components: {
      ProductItem
    },
    mounted() {
      this.fetchProducts()
    },
    methods: {
      async fetchProducts() {
        const res = await axios.get('productapi.json', {
          headers: {
            Accept: 'application/json'
          }
        })
        this.products = res.data
      }
    },
    data() {
      return {
        products: []
      }
    }
  }
</script>
