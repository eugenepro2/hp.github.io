<template>
  <div class="catalog-card">
    <nuxt-link :to="`/${product.SECTION[0].CODE}/${product.CODE}`">
    <!-- <img
      :src="product.PREVIEW_PICTURE.src"
      :alt="product.title"
      class="catalog-card__img"
    /> -->
    <image-loader
      :src="product.PREVIEW_PICTURE.src"
      :alt="product.title"
      class="catalog-card__img"
    ></image-loader>
    </nuxt-link>
    <nuxt-link :to="`/${product.SECTION[0].CODE}/${product.CODE}`">
    <div class="catalog-card__info">
      <div class="catalog-card__title">{{ product.NAME }}</div>
      <div class="catalog-card__text">{{ product.PREVIEW_TEXT }}</div>
      <div class="catalog-card__price">
        от {{ product.PRICE }} &#8381; / шт
      </div>
    </div>
    </nuxt-link>
    <div @click="addToFavorite" :data-id="product.ID" id="inner" class="catalog-card__favorite" />
  </div>
</template>

<script>
import axios from 'axios'
import $$ from 'jquery'
export default {
  props: {
    product: {type: Object, required: true}
  },
  methods: {
    addToFavorite: function(event){
      let attr = event.toElement.getAttribute('data-id')
      $$(event.toElement).addClass('active')
      if (this.$store.state.id == undefined || this.$store.state.id == 'undefined') {
        axios
          .get(`http://5.23.53.82/api/izbr/?add=${attr}`)
          .then(response => {
            this.$store.commit('set_idUser', response.data.fuser)
          })
      } else{
        axios.get(`http://5.23.53.82/api/izbr/?add=${attr}&fuser=${this.id}`)
      }
    }
  },
}
</script>

<style lang="sass">
.catalog-card
  position: relative
  &__favorite.active
    background: url(/img/fav-active.svg) no-repeat 50% 50%
    opacity: 1
</style>
