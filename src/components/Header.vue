<script>
export default {
  name: 'Header',
  props: {
    // Неправильно! Надо сделать проп cart объектом, с ключами type, required, default
    cart: Array,
    required: true,
    default: {},

    currency: String,
  },
  data() {
    return {
      cartPrice: 0,
    };
  },
  watch: {
    cart(cart) {
      // наименование переменных, что за val, что за item?
      // я бы делал через computed свойство, оно тут очень подходит
      let val = 0;
      cart.forEach((item) => {
        val += item.price * item.amount;
      });
      this.cartPrice = val;
    },
  },
}
</script>

<style scoped>
  .header {
    padding: 10px;
    background: #e5e5e5;
  }
</style>

<template>
<!-- секция template должна быть вверху, а также добавить тег header -->
  <div class="header">
    <h3>Товаров в корзине на: {{ cartPrice }} {{ currency }}</h3>
  </div>
</template>
