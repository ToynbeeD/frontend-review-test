import api from '../../api/products.js';
import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    productsList: [],
    productsCart: []
  },
  mutations: {
    createProductList(state, products) {
      state.productsList = products
    },
    addProductToCart(state, product) {
      state.productsCart.push(product)
    }
  },
  actions: {
    async getProductsList({ commit }) {
      const products = await api.getProductsList();
      commit('createProductList', products)
    }
  },
  modules: {
  }
})
