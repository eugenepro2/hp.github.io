<template>
  <div>
    <template v-if="childDataLoaded">
      <div style="background: #fff">
        <div class="container">
          <AppBreadcrumb :bred="bred"/>  
        </div>
      </div>
      <div class="card-item">
        <div class="container">
          <div class="card-item__inner">
            <header-info :info="product" />
            <div class="card-item__info">
              <image-carousel v-if="product.PHOTO.length !== 0" :image="product.PHOTO" />
              <price v-if="product.PRICES.length !== 0" :price="product" />
              <div v-else>Цены не доступны</div>
            </div>
            <tabs :tabs="product" /> 
            <accordion :accordion="product" />
          </div>
        </div>
      </div>
    </template>
  </div>
</template>

<script>
import HeaderInfo from "./HeaderInfo"
import ImageCarousel from "./ImageCarousel"
import Price from "./price"
import Tabs from "./tabs"
import Accordion from "./accordion"
import AppBreadcrumb from '../ui/AppBreadcrumb'
import axios from "axios"
export default {
  components: {
    HeaderInfo,
    ImageCarousel,
    Price,
    Tabs,
    Accordion,
    AppBreadcrumb
  },
  data() {
    return {
      product: [],
      childDataLoaded: false,
      bred: ''
    }
  },
  beforeCreate() {
    axios
      .get("http://5.23.53.82/api/catalog-element/?id=" + this.$route.params.slug)
      .then(response => {        
        this.product = response.data.ELEMENT
        this.childDataLoaded = true
        this.bred = response.data.BRED        
        console.log(this.product);
      })
  }
}
</script>

<style></style>
