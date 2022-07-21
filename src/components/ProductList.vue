<template>
  <ul class="product-list">
    <ProductItem
      v-for="product in productsList"
      :key="product.id"
      :product="product"
      :currency="currency"
    />
  </ul>
</template>

<script>
import ProductItem from '@/components/ProductItem.vue'

export default {
  components: { ProductItem },
  props: {
    currency: String,
  },
  computed: {
    productsList() {
      return this.$store.state.productsList
    }
  },
  methods: {
    startPricesMonitoring() {
      setInterval(async () => {
        await this.getList()
      }, 2000);
    },
    async getList() {
      await this.$store.dispatch('getProductsList');
    }
  },
  async created() {
    await this.getList()
    this.startPricesMonitoring()
  },
};
</script>

<style>
.product-list {
  padding: 10px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}
</style>
