<template>
  <ul v-if="cartList.length > 0" class="cart-list">
    <li v-for="product in $store.state.productsCart" :key="product.id">
      {{ product.title }} {{ product.amount }}кг, на сумму {{ product.totalPrice }} {{ currency }}
    </li>
  </ul>
</template>

<script>
export default {
  props: {
    currency: String
  },
  computed: {
    cartList() {
      return this.$store.state.productsCart.reverse();
    },
  },
};
</script>

<style scoped>
li {
  padding: 3px 10px;
}
</style>
