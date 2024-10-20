<template>
  <div class="product-name">
    <h3>Product Name:</h3>
    <div>
      <h3 v-if="product.id === 'Big Date'" class="product-text">{{ this.product.id }}</h3>
      <h3 v-if="product.id === 'Chrono'" class="product-text">{{ this.product.id }}</h3>
      <h3 v-if="product.id === 'Power Reserve'" class="product-text">{{ this.product.id }}</h3>
    </div>
  </div>
  <div>
    <h5>Description:</h5>
    <div v-if="product.id === 'Big Date'">
      <div v-for="desc in this.product.description" :key="desc">
        <li>{{ desc }}</li>
      </div>
    </div>
    <div v-if="product.id === 'Chrono'">
      <div v-for="desc in this.product.description" :key="desc">
        <li>{{ desc }}</li>
      </div>
    </div>
    <div v-if="product.id === 'Power Reserve'">
      <div v-for="desc in this.product.description" :key="desc">
        <li>{{ desc }}</li>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "DescriptionComp",
  props: ["product"],
};
</script>
