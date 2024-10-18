<template>
  <div class="product-name">
    <h3>Product Name:</h3>
    <h3 v-if="product" class="product-text">{{ this.product.id }}</h3>
  </div>
  <div v-if="product">
    <h5>Description:</h5>
    <div v-for="desc in this.product.description" :key="desc">
      <li>{{ desc }}</li>
    </div>
  </div>
</template>

<script>
export default {
  name: "DescriptionComp",
  props: ["product"],
};
</script>
