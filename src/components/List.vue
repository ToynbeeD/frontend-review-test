<template>
<!-- семантика, добавить теги ul и li -->
  <div class="product-list">
    <!-- key для v-for!!! -->
    <div class="card" v-for="product in products" :style="{width: cardsWidth + '%'}">
      <!-- по смыслу это заголовок карточки, тег h2-h6 -->
      <p class="card-title">{{ product.title }}</p>
      <!-- img лучше оборачивать в контейнер -->
      <img class="card-image" :src="product.image" alt="">
      <p class="card-price">Цена: {{ product.price }} {{ currency }}</p>

      <!-- это должна быть форма (form) и кнопка должна быть внутри формы. -->
      <div>
        <input type="number" ref="amount" :id="product.id">
        <span>кг</span>
      </div>

      <button @click="addToCart(product)"> В корзину </button>
    </div>
  </div>

  <!-- для card сделать отдельный компонент! -->
</template>

<script>
export default {
  props: {
    currency: String,
  },
  data() {
    return {
      products: [],
    };
  },
  computed: {
    cardsWidth() {
      // убрать и делать адаптив в css, используя @media!!!
      let width = window.innerWidth;
      let count = 1;
      if (width > '840px') {
        count = 3;
      } else if ((width > '420px' && width < '840px')) {
        count = 2;
      }

      return 100 / count;
    },
  },
  methods: {
    startPricesMonitoring() {
      // по заданию запрос должен идти каждые 2 секунды, сейчас одна
      setInterval(this.getList, 1000);
    },
    async getList() {
      // неясно зачем здесь вообще нужен vuex для одно только action, если он есть, значит надо хранить данные там, а не в компонентах.
      let data = await this.$store.dispatch('getProductsList');

      this.products = data;
    },
    addToCart(product) {
      // запутанно, делай проще))
      let amount = this.$refs.amount.find((input) => input.id === product.id).value;

      let data = {
        amount,
        price: product.price,
        title: product.title,
      };
      this.$parent.cart.push(data);
    },
  },
  created() {
    this.startPricesMonitoring();
  },
};
</script>

<style>
  .product-list {
    padding: 10px;
  }
  /* flex нужен */
  .card {
    display: inline-block;
    width: 100%;
    border: 1px solid #908888;
    border-radius: 5px;
    text-align: center;
    padding: 10px;
  }
  .card-image {
    width: 100%;
  }
  button {
    padding: 5px;
    margin: 5px;
  }

</style>
