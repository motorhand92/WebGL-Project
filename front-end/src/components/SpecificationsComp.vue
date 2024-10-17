<template>
  <h3>Specifications</h3>
  <div>
    <button class="specNav-button" @click="Case">Case</button>
    <button class="specNav-button" @click="Dial">Dial</button>
    <button class="specNav-button" @click="Movement">Movement</button>
    <button class="specNav-button" @click="Strap">Strap</button>
  </div>
  <div v-if="this.specs === 'Case'">
    <h5>{{ this.specs }}</h5>
    <div v-for="item in this.product.specifications" :key="item">
      <div v-for="spec in item.case" :key="spec">
        <li>{{ spec[0] }} : {{ spec[1] }}</li>
      </div>
    </div>
  </div>
  <div v-if="this.specs === 'Dial'">
    <h5>{{ this.specs }}</h5>
    <div v-for="item in this.product.specifications" :key="item">
      <div v-for="spec in item.dial" :key="spec">
        <li>{{ spec[0] }} : {{ spec[1] }}</li>
      </div>
    </div>
  </div>
  <div v-if="this.specs === 'Movement'">
    <h5>{{ this.specs }}</h5>
    <div v-for="item in this.product.specifications" :key="item">
      <div v-for="spec in item.movement" :key="spec">
        <li>{{ spec[0] }} : {{ spec[1] }}</li>
      </div>
    </div>
  </div>
  <div v-if="this.specs === 'Strap'">
    <h5>{{ this.specs }}</h5>
    <div v-for="item in this.product.specifications" :key="item">
      <div v-for="spec in item.strap" :key="spec">
        <li>{{ spec[0] }} : {{ spec[1] }}</li>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "SpecificationsComp",
  props: ["product"],
  data() {
    return {
      specs: null,
    };
  },
  methods: {
    Case() {
      this.specs = "Case";
    },
    Dial() {
      this.specs = "Dial";
    },
    Movement() {
      this.specs = "Movement";
    },
    Strap() {
      this.specs = "Strap";
    },
  },
};
</script>
