<template>
  <div>
    <div style="background: #fff">
      <div class="container">
        <template v-if="childDataLoaded">
          <AppBreadcrumb :bred="bred"/>  
        </template>
      </div>
    </div>
    <div class="search">
      <div class="container">
        <h1>Результаты поиска</h1>
        <label for="footer__search" class="footer__search">
          <form @submit.prevent="searchSubmit">
            <button type="submit" class="footer__search-icon"></button>
            <input
              id="footer__search"
              type="text"
              placeholder="Поиск по сайту"
              class="footer__search-input search__input"
              v-model="search"
            >
          </form>
        </label>
        <section class="catalog-cards">
          <div class="container">
            <div class="catalog-cards__inner">
              <card
                v-for="product in products.slice(0,4)"
                :key="product.id"
                :product="product"
              />
            </div>
          </div>
        </section>
        <div class="index-banner">
          <div class="container">
            <div class="index-banner__inner">
              <a href="#" class="index-banner__item">
                <span class="index-banner__title">Как мы делаем наши </span
              ><span class="index-banner__subtitle">подарки</span></a
              ><a href="#" class="index-banner__item">
                <span class="index-banner__title">Разработка подарков</span
              ><span class="index-banner__subtitle">на заказ</span></a
              >
            </div>
          </div>
        </div>
        <section class="catalog-cards">
          <div class="container">
            <div class="catalog-cards__inner">
              <card
                v-for="product in productsSlice"
                :key="product.id"
                :product="product"
              />
            </div>
          </div>
        </section>
        <div class="catalog-load-more">
        <div class="container">
          <div class="catalog-load-more__inner">
            <div class="catalog-load-more__count">
              Показано {{ countNumber }} из {{ products.length }}
            </div>
            <a
              v-if="showMore"
              class="catalog-load-more__button"
              @click="readMore"
            >
            <span>Загрузить еще</span></a>
          </div>
        </div>
      </div>
      <div class="spacer" />
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import AppBreadcrumb from '../components/ui/AppBreadcrumb'
import Card from "../components/catalog/Card"
export default {
  components: {
    AppBreadcrumb,
    Card
  },
  data(){
    return{
      products: [],
      productsSlice: [],
      search: this.$route.query.q,
      bred: '',
      childDataLoaded: false,
      countNumber: 12,
      showMore: true
    }
  },
  created() {
    axios
      .get(`http://5.23.53.82/api/search/?q=${this.$route.query.q}`)
      .then(response => {
        this.products = response.data.ELEMENTS
        this.bred = response.data.BRED
        this.childDataLoaded = true
        this.sliceProduct(12)
        if (this.products.length < 12) {
          this.countNumber = this.products.length
        } else{
          this.countNumber = 12
        }
        
      })
  },
  methods: {
    searchSubmit: function(){
      axios
      .get(`http://5.23.53.82/api/search/?q=${this.search}`)
      .then(response => {
        this.products = response.data.ELEMENTS
        this.bred = response.data.BRED
        this.childDataLoaded = true
        this.sliceProduct(12)  
        if (this.products.length < 12) {
          this.countNumber = this.products.length
        } else{
          this.countNumber = 12
        }
      })
    },
    sliceProduct: function(slice){      
      this.productsSlice = this.products.slice(4, slice)
    },
    readMore: function() {
      this.countNumber += 12  
      if (!(this.countNumber < this.products.length)) {
        this.countNumber = this.products.length
      }
      this.sliceProduct(this.countNumber)
    },
  }
}
</script>

<style lang="sass">

.search
  &:before
    content: ""
    background: url(/img/form-bg.png) no-repeat 50% 0
    position: absolute
    top: 120px
    left: 0
    width: 100%
    height: 200px
    z-index: -1
    -webkit-transform: rotate(180deg)
  h1
    font-size: 32px
    font-weight: normal
    font-style: normal
    font-stretch: normal
    line-height: 1.25
    letter-spacing: normal
    color: #5b4630
    margin-bottom: 15px
  &__input
    width: 100%
.catalog-card
  a
    text-decoration: none
</style>

