<template>
  <form class="card-item-props">
    <div class="card-item-props__conditions">
      <div
        v-for="price in price.PRICES"
        :key="price.id"
        class="card-item-props__item"
      >
        <span>от {{ price.QUANTITY_FROM }} шт.</span
        ><span>{{ price.PRICE }} &#8381; </span>
      </div>
    </div>
    <div class="card-item-props__col">
      <div class="card-item-props__calc">
        <div class="card-item-props__price">{{ totalSum }} &#8381;</div>
        <span>за</span
        ><input
          v-model="count"
          type="number"
          class="card-item-props__input"
          @keyup="changePrice"
          @input="changePrice"
        >
        <span>шт.</span>
      </div>
      <div class="card-item-props__details">
        <ul>
          <li>Делаем на заказ за 12-14 дней</li>
          <li>Изменим комплект</li>
          <li>Нанесем логотип</li>
        </ul>
      </div>
    </div>
    <div class="card-item-props__col">
      <div class="card-item-props__button">
        <input type="submit" value="в Корзину" @click.prevent="addToCard" >
      </div>
      <a
        :href="price.LINK_TO_PAGE"
        target="_blank"
        class="card-item-props__gift"
        v-if="price.LINK_TO_PAGE"

      >
        <div class="card-item-props__gift-img" />
        <div class="card-item-props__gift-text">
          Этот подарок для физических лиц в магазине HappyFriend
        </div>
      </a>
    </div>
  </form>
</template>

<script>
import axios from "axios"
import $$ from "jquery"
export default {
  props: {
    price: {type: Object, required: true}
  },
  data() {
    return {
      totalSum: this.price.PRICES[0].PRICE * 10,
      count: 10
    }
  },
  methods: {
    changePrice: function(event) {
      let val = event.target.value

      this.price.PRICES.forEach(el => {
        if (
          +val >= +el.QUANTITY_FROM &&
          (+val <= +el.QUANTITY_TO || null == el.QUANTITY_TO)
        ) {
          this.totalSum = +el.PRICE * +this.count
        }
      })
    },
    addToCard: function() {
      if (
        this.$store.state.id == undefined ||
        this.$store.state.id == "undefined"
      ) {
        axios
          .get(
            "http://5.23.53.82/api/basket/?add=" +
              this.price.ID +
              "&count=" +
              this.count
          )
          .then(response => {
            this.$store.commit("set_idUser", response.data.fuser)
            this.$store.commit("set_countCart")
          })
      } else {
        axios
        .get(
          "http://5.23.53.82/api/basket/?add=" +
            this.price.ID +
            "&fuser=" +
            this.$store.state.id +
            "&count=" +
            this.count
          )
        .then(() => {
          this.$store.commit("set_countCart")
        })

      }
      $$(".cart").addClass("bounce")
      setTimeout(function() {
        $$(".cart").removeClass("bounce")
      }, 1000)
    }
  }
}
</script>

<style lang="sass">
.card-item-props
  position: relative
  z-index: 10
  &__input
    width: 100px
</style>

