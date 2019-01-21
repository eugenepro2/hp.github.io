<template>
  <nuxt-link :to="'/card/'+product.ID">
  <div class="catalog-card"><img :src="product.PREVIEW_PICTURE.src" :alt="product.title" class="catalog-card__img">
    <div class="catalog-card__info">
      <div class="catalog-card__title">{{product.NAME}}</div>
      <div class="catalog-card__text">{{product.PREVIEW_TEXT}}</div>
      <div class="catalog-card__price">от {{product.PRICE}} &#8381; / шт</div>
      <div class="catalog-card__favorite"></div>
    </div>
  </div>
  </nuxt-link>
</template>

<script>
export default {
  props: ['product']
}
</script>

<style>

</style>

