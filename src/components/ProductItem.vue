<template>
  <li class="card">
    <h3 class="card-title">{{ product.title }}</h3>
    <img class="card-image" :src="product.image" :alt="product.title" />
    <p class="card-price">Цена: {{ product.price }} {{ currency }}</p>

    <form action="#" @submit.prevent="addToCart">
      <label>
        <input type="number" v-model.number="productAmount" />
        <span>кг</span>
      </label>
      <button type="submit">В корзину</button>
    </form>
  </li>
</template>

<script>
export default {
  props: {
    product: {
      type: Object,
      require: true,
      default: {},
    },
    currency: String,
  },
  data() {
    return {
      productAmount: null,
    };
  },
  methods: {
    addToCart() {
      if (!this.productAmount) return;

      const sameProductInCart = this.$store.state.productsCart.find((product) => product.id === this.product.id);
      if (sameProductInCart) {
        sameProductInCart.amount += this.productAmount;
        sameProductInCart.totalPrice = (this.product.price * sameProductInCart.amount).toFixed(2);
      } else {
        const cartProduct = {
          ...this.product,
          amount: this.productAmount,
          totalPrice: (this.product.price * this.productAmount).toFixed(2),
        };
        this.$store.commit("addProductToCart", cartProduct);
      }
      this.productAmount = null
    },
  },
};
</script>

<style scoped>
.card {
  flex: 0 1 calc(33.3% - 15px);
  border: 1px solid #908888;
  border-radius: 5px;
  text-align: center;
  padding: 10px;
}

.card:not(:last-child) {
  margin-right: 15px;
}

.card-image {
  width: 100%;
}

.card-price {
  margin-bottom: 10px;
}

label {
  margin-bottom: 10px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}

input {
  width: 130px;
  margin-right: 5px;
}

button {
  padding: 5px;
  margin: 5px;
}

@media (max-width: 840px) {
  .card {
    flex-basis: calc(50% - 8px);
    margin-bottom: 15px;
  }

  .card:not(:last-child) {
    margin-right: 0;
  }

  .card:not(:nth-child(even)) {
    margin-right: 15px;
  }
}

@media (max-width: 420px) {
  .card {
    flex-basis: 100%;
  }
  .card:not(:nth-child(even)) {
    margin-right: 0;
  }
}
</style>
