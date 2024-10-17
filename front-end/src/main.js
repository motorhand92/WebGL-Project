import { createApp } from "vue";
import App from "./App.vue";
import "./main.css";
import { createStore } from "vuex";

const store = createStore({
  state() {
    return {
      productId: null,
    };
  },
  mutations: {
    setProduct(state, newProduct) {
      state.productId = newProduct;
    },
  },
  actions: {
    updateProductId({ commit }, newProduct) {
      commit("setProduct", newProduct);
    },
  },
});

createApp(App).use(store).mount("#app");
