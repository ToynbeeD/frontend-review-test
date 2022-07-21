<template>
  <header class="header">
    <h3>Товаров в корзине на: {{ totalCartPrice }} {{ currency }}</h3>
  </header>
</template>

<script>
export default {
  props: {
    currency: String,
  },
  computed: {
    currentCartList() {
      return this.$store.state.productsCart
    },
    totalCartPrice() {
      if (this.currentCartList.length === 0) {
        return 0
      } else {
        let totalPrice = 0
        for (let i = 0; i < this.currentCartList.length; i++) {
          totalPrice += Number(this.currentCartList[i].totalPrice)
        }

        return totalPrice.toFixed(2)
      }
    },
  },
};
</script>

<style scoped>
.header {
  padding: 10px;
  background: #e5e5e5;
}
</style>
