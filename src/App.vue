<template>
  <div id="app">
    <MyHeader :currency="currency" />
    <main>
      <ProductList :currency="currency"/>
      <ProductCart :currency="currency"/>
    </main>
  </div>
</template>

<script>
import MyHeader from '@/components/MyHeader.vue';
import ProductList from '@/components/ProductList.vue';
import ProductCart from '@/components/ProductCart.vue';

export default {
  name: 'App',
  components: {
    MyHeader,
    ProductList,
    ProductCart,
  },
  data() {
    return {
      currency: 'VGTB',
    };
  }
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

ul {
  list-style: none;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  color: #2c3e50;
}
</style>
