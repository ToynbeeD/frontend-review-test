<template>
<!-- Несемантичная верстка. Нужно использовать теги ul и li -->
  <div class="cart-list">
    <!-- добавить key для v-for -->
    <div v-for="item in spisok_dlya_rendera">
      {{ item }}
    </div>
  </div>
</template>

<script>
export default {
  props: {
    cart: Array,
  },
  computed: {
    //такое наименование недопустимо!
      spisok_dlya_rendera() {
          return this.cart.reverse();
      },
  },
};
</script>

<style>

</style>
