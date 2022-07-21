import api from '../../api/products.js';
import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);

export default new Vuex.Store({
  // абсолютно пустой стор, в котором даже нет никакого состояния. Либо Vuex убрать, либо использовать по назначению.
  state: {
  },
  mutations: {
  },
  actions: {
    getProductsList(ctx, data) {
      return api.getProductsList();
    },
  },
  modules: {
  }
})
