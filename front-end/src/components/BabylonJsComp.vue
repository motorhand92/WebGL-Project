<template>
  <main>
    <canvas class="babylonCanvas"> </canvas>
  </main>
</template>

<script>
import { BasicScene } from "@/BabylonJs/BasicScene";
import { productData } from "@/data";

export default {
  name: "BabylonJsComp",
  props: ["product"],
  data() {
    return {
      productData,
      curProduct: this.product,
    };
  },
  mounted() {
    const canvas = document.querySelector("canvas");
    new BasicScene(canvas, this.curProduct.cadFile);
  },
  watch: {
    product() {
      this.curProduct = this.product;
      console.log(this.curProduct);

      const canvas = document.querySelector("canvas");
      canvas.remove();
      const newCanvas = document.createElement("canvas");
      newCanvas.setAttribute("class", "babylonCanvas");
      const main = document.querySelector("main");
      main.append(newCanvas);

      new BasicScene(newCanvas, this.curProduct.cadFile);
    },
  },
};
</script>
