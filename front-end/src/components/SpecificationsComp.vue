<template>
  <h3>Specifications</h3>
  <div>
    <button v-if="this.specs !== 'Case'" class="specNav-button" @click="Case">Case</button>
    <button v-if="this.specs === 'Case'" class="specNav-clicked">Case</button>
    <button v-if="this.specs !== 'Dial'" class="specNav-button" @click="Dial">Dial</button>
    <button v-if="this.specs === 'Dial'" class="specNav-clicked">Dial</button>
    <button v-if="this.specs !== 'Movement'" class="specNav-button" @click="Movement">Movement</button>
    <button v-if="this.specs === 'Movement'" class="specNav-clicked">Movement</button>
    <button v-if="this.specs !== 'Strap'" class="specNav-button" @click="Strap">Strap</button>
    <button v-if="this.specs === 'Strap'" class="specNav-clicked">Strap</button>
  </div>
  <div v-if="this.specs === 'Case'">
    <div v-for="item in this.product.specifications" :key="item">
      <div class="specs-text">
        <ul v-for="spec in item.case" :key="spec">
          {{
            spec[0]
          }}
        </ul>
      </div>
      <div class="specs">
        <ul v-for="spec in item.case" :key="spec">
          {{
            spec[1]
          }}
        </ul>
      </div>
    </div>
  </div>
  <div v-if="this.specs === 'Dial'">
    <div v-for="item in this.product.specifications" :key="item">
      <div class="specs-text">
        <ul v-for="spec in item.dial" :key="spec">
          {{
            spec[0]
          }}
        </ul>
      </div>
      <div class="specs">
        <ul v-for="spec in item.dial" :key="spec">
          {{
            spec[1]
          }}
        </ul>
      </div>
    </div>
  </div>
  <div v-if="this.specs === 'Movement'">
    <div v-for="item in this.product.specifications" :key="item">
      <div class="specs-text">
        <ul v-for="spec in item.movement" :key="spec">
          {{
            spec[0]
          }}
        </ul>
      </div>
      <div class="specs">
        <ul v-for="spec in item.movement" :key="spec">
          {{
            spec[1]
          }}
        </ul>
      </div>
    </div>
  </div>
  <div v-if="this.specs === 'Strap'">
    <div v-for="item in this.product.specifications" :key="item">
      <div class="specs-text">
        <ul v-for="spec in item.strap" :key="spec">
          {{
            spec[0]
          }}
        </ul>
      </div>
      <div class="specs">
        <ul v-for="spec in item.strap" :key="spec">
          {{
            spec[1]
          }}
        </ul>
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
