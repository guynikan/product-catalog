import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    products: [],
    storages: [],
    types: ["clothes", "books", "kitchenwares", "decors"],
  },
  getters: {
    product:
      ({ products }) =>
      (id, type) => {
        let result = {};
        products.forEach((product) => {
          product.forEach((prod) => {
            if (prod.id === id && prod.type === type) {
              result = prod;
            }
          });
        });
        return result;
      },

    getProducts: ({ products, types }) => {
      return products.find((product) => {
        return types.includes(product[0].type);
      });
    },

    getStorages: ({ storages }) => {
      return storages;
    },
  },
  mutations: {
    SET_PRODUCT(state, payload) {
      const data = payload;
      state.products = data;
    },

    SET_STORAGE(state, payload) {
      const data = payload;
      state.storages = data;
    },

    SET_TYPE(state, payload) {
      state.types = [];
      state.types.push(payload);
    },
  },
  actions: {
    async getStorages({ commit }) {
      let result = [];
      try {
        const response = await fetch("/api/storages");
        const { data } = await response.json();
        result = data;
      } finally {
        commit("SET_STORAGE", result);
      }
    },
    async getData({ commit }) {
      //const response = await fetch("/api/products/1?include=storage");
      const arr = ["clothes", "books", "kitchenwares", "decors"];
      let result = [];
      try {
        result = await Promise.all(
          arr.map(async (type) => {
            const response = await fetch(`/api/products/${type}`);
            const { data } = await response.json();
            console.log("cade mano", data);
            return data;
          })
        );
      } finally {
        commit("SET_PRODUCT", result);
      }
    },

    async setData({ dispatch }, data) {
      const regex = /\b[A-Z]/g;

      const str = JSON.stringify(data);
      const formattedData = str.replace(regex, (match) => {
        return match.toLowerCase();
      });

      const id = data.some((item) => !!item.id);

      if (id) {
        await fetch(`/api/products/${data[0].id}`, {
          method: "patch",
          body: formattedData,
        });
      } else {
        await fetch("/api/products", {
          method: "post",
          body: formattedData,
        });
      }
      dispatch("getData");
    },

    async deleteData({ dispatch }, { id, type }) {
      await fetch(`/api/products/${type}/${id}`, {
        method: "delete",
      });
      dispatch("getData");
    },
  },
});
