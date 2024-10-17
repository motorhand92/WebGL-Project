<template>
  <h3 v-if="product">Product Name: {{ this.product.id }}</h3>
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
