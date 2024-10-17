<template>
  <h1>FAVRE - LEUBA 3D WATCH DISPLAYER</h1>
  <div>
    <BabylonJsComp :product="product" />
  </div>
  <div class="button-wrap">
    <div v-for="item in productData" :key="item.id">
      <button class="navButton" @click="OpenBabylon(item.id)">{{ item.id }}</button>
    </div>
  </div>
  <div class="description-wrap">
    <DescriptionComp :product="product" />
  </div>
  <div class="specifications-wrap">
    <SpecificationsComp :product="product" />
  </div>
</template>

<script>
import BabylonJsComp from "@/components/BabylonJsComp.vue";
import DescriptionComp from "@/components/DescriptionComp.vue";
import SpecificationsComp from "@/components/SpecificationsComp.vue";
import { productData } from "@/data.js";

export default {
  name: "MainPage",
  components: {
    BabylonJsComp,
    DescriptionComp,
    SpecificationsComp,
  },
  data() {
    return {
      productData,
      product: [],
    };
  },
  methods: {
    OpenBabylon(productId) {
      const curProduct = productData.find((curProduct) => curProduct.id === productId);
      this.product = curProduct;

      console.log(this.product);
      console.log(this.product.specifications.case);
    },
  },
};
</script>
