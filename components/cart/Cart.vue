<template>
  <div>
    <template v-if="childDataLoaded">
      <section class="basket-form">
        <div class="container">
          <div class="basket-form__inner">
            <div class="basket-form__title">Корзина</div>
            <a href="#" class="basket-form__download">
              <div class="basket-form__download-img" />
              <div class="basket-form__download-text">
                Скачать в виде презентации
              </div>
            </a>
            <div class="basket-form__list">
              <div v-if="cartProducts.length == 0">Корзина пустая</div>
              <item
                v-for="item in cartProducts"
                :key="item.id"
                :item="item, totalSum"
                @deleteItem="deleteItem($event)" @updateItem="updateItem($event)"
              />
            </div>
            <form class="basket-form__form" @submit.prevent="submitForm">
              <div class="basket-form__form-text">Итого</div>
              <div class="basket-form__form-price">{{ totalSum }} &#8381;</div>
              <div class="basket-form__form-props">
                <label
                  for="basket-form__form-logo"
                  class="basket-form__form-checkbox"
                >
                  <input
                    id="basket-form__form-logo"
                    v-model="logo"
                    type="checkbox"
                    hidden
                  >
                  <div class="basket-form__form-img" />
                  <span>Нанести логотип</span>
                </label>
                <label
                  for="basket-form__form-comp"
                  class="basket-form__form-checkbox"
                >
                  <input
                    id="basket-form__form-comp"
                    v-model="change"
                    type="checkbox"
                    hidden
                  >
                  <div class="basket-form__form-img" />
                  <span>Изменить состав подарка</span>
                </label>
              </div>
              <textarea
                v-model="comment"
                placeholder="Комментарий к заказу"
                name="basket-form__form-textarea"
                cols="30"
                rows="10"
                class="basket-form__form-textarea"
              />
              <div class="basket-form__form-submit">
                <input type="submit" value="Оформить" >
              </div>
            </form>
          </div>
        </div>
      </section>
    </template>
  </div>
</template>

<script>
import axios from "axios"
import Item from "./item"
export default {
  components: {
    Item
  },
  data() {
    return {
      cartProducts: [],
      childDataLoaded: false,
      totalSum: 0,
      logo: false,
      change: false,
      comment: ""
    }
  },
  created() {
    axios
      .get(`http://5.23.53.82/api/basket/?get=${this.$store.state.id}`)
      .then(response => {
        console.log(response);
        
        this.cartProducts = response.data.ITEMS
        this.childDataLoaded = true
        this.totalSum = response.data.AllSumm
      })
  },
  methods: {
    deleteItem: function(product) {
      axios
        .get(`http://5.23.53.82/api/basket/?get=${this.$store.state.id}`)
        .then(response => {
          this.cartProducts = response.data.ITEMS
          this.totalSum = response.data.AllSumm
          this.cartProducts.forEach(el => {
            if (product.length == undefined) {
              this.totalSum = 0
              this.cartProducts.length = 0
            } else {
              let sum = +el.PRICE * +el.COUNT
              this.totalSum += sum
            }
          })
        })
      this.$store.commit("set_countCart")
    },
    updateItem() {      
      axios
        .get(`http://5.23.53.82/api/basket/?get=${this.$store.state.id}`)
        .then(response => {
          this.totalSum = response.data.AllSumm
        })
    },
    submitForm: function() {
      let id = []
      this.cartProducts.forEach(el => {
        id.push(el.ID)
      })
      this.$router.push(`/order?id=${id}&logo=${this.logo}&change=${this.change}&comment=${this.comment}&totalSum=${this.totalSum}`
      )
    }
  }
}
</script>

<style></style>
