<template>
  <div v-if="product.PHOTO" class="basket-form__item">
    <img
      :src="product.PHOTO[0].src"
      :alt="product.NAME"
      class="basket-form__item-img"
    >
    <div class="basket-form__item-info">
      <div class="basket-form__item-title">{{ product.NAME }}</div>
      <div class="basket-form__item-calc">
        <div class="basket-form__item-price">
          {{ totalSum }} &#8381;
        </div>
        <span>за</span>
        <input
          v-model="val"
          type="text"
          class="basket-form__item-input"
          @input="updateItem"
        ><span>шт.</span>
      </div>
    </div>
    <div class="basket-form__item-button" @click="deleteItem" />
  </div>
</template>

<script>
import axios from "axios"
export default {
  props: {
    item: {type: Object, required: true},
    totalSum: {type: Number, required: true}
  },
  data() {
    return {
      product: this.item,
      val: this.item.COUNT,
    }
  },
  methods: {
    updateItem: function() {   
      axios
        .get(`http://5.23.53.82/api/basket/?update=${this.item.ID}&count=${this.val}&fuser=${this.$store.state.id}`)
        .then(() => {
          this.$emit("updateItem")
        })
    },
    deleteItem: function() {
      axios
        .get(`http://5.23.53.82/api/basket/?del=${this.item.ID}&fuser=${this.$store.state.id}`)
        .then(response => {
          this.$emit("deleteItem", response.data.ITEMS)
        })
    }
  }
}
</script>

<style></style>
