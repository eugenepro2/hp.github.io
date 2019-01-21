<template>
  <div>
    <div class="catalog-tags">
      <div class="container">
        <div class="catalog-tags__inner">
          <div class="catalog-tags__title hidden">А еще у нас есть</div>
          <div class="catalog-tags__mobile-menu">
            <div class="catalog-tags__mobile-name">Теги</div>
            <div
              v-if="mobileLabels.length == 0"
              class="catalog-tags__mobile-text"
            >
              Нету
            </div>
            <div v-else="" class="catalog-tags__mobile-text">
              {{ mobileLabels }}
            </div>
            <div
              class="catalog-tags__mobile-button"
              @click="toggleFilterTags"
            />
          </div>
          <div
            :class="{ active: showLabels }"
            class="catalog-tags__mobile-list"
          >
            <div class="catalog-tags__mobile-header">
              <div class="catalog-tags__mobile-header-title">Теги</div>
              <div
                class="catalog-tags__mobile-header-close"
                @click="toggleFilterTags"
              />
            </div>
            <div class="catalog-tags__list">
              <label
                v-for="label in labels"
                ref="label"
                :key="label.id"
                :data-label="label.CODE"
                :for="label.CODE"
                class="catalog-tags__button"
                @click="toggleLabel"
              >
                {{ label.NAME }}
                <input :id="label.CODE" type="checkbox" hidden >
                <div class="catalog-tags__img" />
              </label>
            </div>
            <div class="catalog-tags__menu-button" @click="toggleFilterTags">
              <span>Готово</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <template v-if="childDataLoaded">
      <div class="catalog-filter">
        <div class="container">
          <div class="catalog-filter__inner">
            <div class="catalog-filter__target">
              <div class="catalog-filter__name">Ищем подарок</div>

              <div
                class="catalog-filter__button button-sections"
                @click="toggleFilterSections"
              >
                {{ textSections }}
              </div>

              <div class="catalog-filter__mobile-menu">
                <div class="catalog-filter__mobile-name">Кому</div>
                <div class="catalog-filter__mobile-text mobile-sections-text">
                  {{ textSections }}
                </div>
                <div
                  class="catalog-filter__mobile-button"
                  @click="toggleFilterSections"
                />
              </div>
              <div
                :class="{ active: showSections }"
                class="catalog-filter__mobile-list"
              >
                <div class="catalog-filter__mobile-header">
                  <div class="catalog-filter__mobile-header-title">Кому</div>
                  <div
                    class="catalog-filter__mobile-header-close"
                    @click="toggleFilterSections"
                  />
                </div>
                <div
                  :class="{ active: showSections }"
                  class="catalog-filter__menu catalog-filter__menu_sidebar"
                >
                  <ul class="catalog-filter__menu-ul" @click="filterSections">
                    <li
                      v-for="section in sections.slice(0, 1)"
                      :key="section.id"
                      :data-section="section.CODE"
                      class="catalog-filter__menu-li catalog-filter__menu-li_active"
                    >
                      {{ section.NAME }}
                    </li>
                    <li
                      v-for="section in sections.slice(1)"
                      :key="section.id"
                      :data-section="section.CODE"
                      class="catalog-filter__menu-li"
                    >
                      {{ section.NAME }}
                    </li>
                  </ul>
                  <div
                    class="catalog-filter__menu-button"
                    @click="toggleFilterSections"
                  >
                    <span>Готово</span>
                  </div>
                </div>
              </div>
            </div>
            <div class="catalog-filter__price">
              <div class="catalog-filter__name">не дороже</div>
              <div class="catalog-filter__button" @click="toggleFilterPrices">
                {{textPrices}} <span>&#8381; /шт</span>
              </div>
              <div class="catalog-filter__mobile-menu">
                <div class="catalog-filter__mobile-name">Не дороже</div>
                <div class="catalog-filter__mobile-text">{{textPrices}} &#8381; /шт</div>
                <div
                  class="catalog-filter__mobile-button"
                  @click="toggleFilterPrices"
                />
              </div>
              <div
                :class="{ active: showPrices }"
                class="catalog-filter__mobile-list"
              >
                <div class="catalog-filter__mobile-header">
                  <div class="catalog-filter__mobile-header-title">
                    Не дороже
                  </div>
                  <div
                    class="catalog-filter__mobile-header-close"
                    @click="toggleFilterPrices"
                  />
                </div>
                <div
                  :class="{ active: showPrices }"
                  class="catalog-filter__menu catalog-filter__menu_sidebar"
                >
                  <ul class="catalog-filter__menu-ul" @click="filterPrices">
                    <li 
                      v-for="price in prices" 
                      :key="price.id" 
                      :data-price="price.PRICE" 
                      class="catalog-filter__menu-li catalog-filter__menu-li_active"
                    >
                      {{price.PRICE}}
                      <span>&#8381; /шт</span>
                    </li>
                  </ul>
                  <div
                    class="catalog-filter__menu-button"
                    @click="toggleFilterPrices"
                  >
                    <span>Готово</span>
                  </div>
                </div>
              </div>
            </div>
            <div class="catalog-filter__reset" @click="reset">Сбросить все</div>
          </div>
        </div>
      </div>
    </template>
    <section class="catalog-cards">
      <div v-if="loading" class="catalog-cards__loader" />
      <div class="container">
        <div class="catalog-cards__inner">
          <card
            v-for="product in products.slice(0, 4)"
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
            v-for="product in products.slice(4)"
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
            Показано {{ request.countNumber }} из {{ countAll }}
          </div>
          <a
            v-if="showMore"
            class="catalog-load-more__button"
            @click="readMore"
          >
          <span>Загрузить еще</span></a
          >
        </div>
      </div>
    </div>
    <div class="spacer" />
  </div>
</template>

<script>
Array.prototype.remove = function(value) {
  var idx = this.indexOf(value)
  if (idx != -1) {
    return this.splice(idx, 1)
  }
  return false
}

import $$ from "jquery"
import axios from "axios"
import Card from "./Card"

export default {
  components: {
    Card
  },
  data() {
    return {
      childDataLoaded: false,
      products: [],
      sections: [],
      labels: [],
      request: {
        labels: [],
        sections: [],
        prices: "",
        countNumber: 12,
        count: ""
      },
      countAll: 1,
      loading: false,
      showMore: true,
      showSections: false,
      showPrices: false,
      showLabels: false,
      arrayForLabels: [],
      arrayForSections: [],
      mobileLabels: [],
      textSections: "",
      textPrices: ""
    }
  },
  watch: {
    "request.labels": function(val) {
      this.resetCount()
      this.request.labels = val
      this.wathcFilter(
        this.request.labels,
        this.request.sections,
        this.request.prices,
        this.request.count
      )
    },
    "request.sections": function(val) {
      this.resetCount()
      this.request.sections = val
      this.request.labels = []
      this.wathcFilter(
        this.request.labels,
        this.request.sections,
        this.request.prices,
        this.request.count
      )
    },
    "request.prices": function(val) {
      this.resetCount()
      this.request.prices = val
      this.request.labels = []
      this.wathcFilter(
        this.request.labels,
        this.request.sections,
        this.request.prices,
        this.request.count
      )
    },
    "request.count": function() {
      this.wathcFilter(
        this.request.labels,
        this.request.sections,
        this.request.prices,
        this.request.count
      )
    },
    "request.countNumber": function() {
      if (this.request.countNumber > this.countAll) {
        this.request.countNumber = this.countAll
        this.showMore = false
      }
    }
  },
  created() {
    this.loading = true    
    if (this.$route.query.filter) {
      axios
        .get(`http://5.23.53.82/api/catalog/?section[]=${this.$route.query.filter}`)
        .then(response => {
          this.products = response.data.ELEMENTS
          this.sections = response.data.SECTIONS
          this.prices = response.data.PRICES
          this.labels = response.data.LABELS
          this.countAll = response.data.COUNT
          this.childDataLoaded = true
          this.textPrices = response.data.PRICES[0].PRICE
          this.loading = false
          response.data.SECTIONS.forEach(el => {
            if (el.ACTIVE == 1) {
              this.textSections = el.NAME.toLowerCase()
            }
          });
        })
    } else{
      axios.get(`http://5.23.53.82/api/catalog/`).then(response => {
        this.products = response.data.ELEMENTS
        this.sections = response.data.SECTIONS
        this.prices = response.data.PRICES
        this.labels = response.data.LABELS
        this.countAll = response.data.COUNT
        this.childDataLoaded = true
        this.textSections = response.data.SECTIONS[0].NAME.toLowerCase()
        this.textPrices = response.data.PRICES[0].PRICE
        this.loading = false
      })
    }
  },
  methods: {
    toggleLabel: function(event) {
      let el = event.target
      let elAttr = el.getAttribute("data-label")
      let labels = this.request.labels
      $$(el).toggleClass("active")
      if (elAttr !== null && $$(el).hasClass("active")) {
        labels.push("label=" + elAttr)
        this.arrayForLabels.push(
          el.textContent.replace(/[\n\r]+|[\s]{2,}/g, " ").trim()
        )
      } else {
        labels.remove("label=" + elAttr)
      }
      this.mobileLabels = this.arrayForLabels.join(", ")
    },
    filterSections: function(event) {
      let el = event.toElement
      let elAttr = el.getAttribute("data-section")
      let text = el.textContent.replace(/[\n\r]+|[\s]{2,}/g, " ").trim().toLowerCase()
      $$(el).toggleClass("active")
      if ($$(el).hasClass("active")) {
        this.textSections = el.innerText.toLowerCase()
        this.request.sections.push(elAttr)
        this.arrayForSections.push(text)
      }else{
        this.request.sections.remove(elAttr)
        this.arrayForSections.remove(text)
      }
      console.log(this.arrayForSections);
      
      this.textSections = this.arrayForSections.join(", ")
      
    },
    filterPrices: function(event) {
      let el = event.toElement
      let elAttr = el.getAttribute("data-price")
      $$(".catalog-filter__menu-li").removeClass("active")
      $$(el).addClass("active")
      
      if ($$(el).hasClass("catalog-filter__menu-li")) {
        this.textPrices = elAttr
        this.showPrices = false
      }
      this.request.prices = `&price_max=${elAttr}`
    },
    wathcFilter: function(labels, sections, prices, count) {
      this.loading = true
      labels = labels.join("&")
      sections = sections.join('&section[]=')
      
      axios
        .get(`http://5.23.53.82/api/catalog/?${labels}&section[]=${sections}${prices}${count}`)
        .then(response => {
          this.products = response.data.ELEMENTS
          this.sections = response.data.SECTIONS
          this.labels = response.data.LABELS
          this.countAll = response.data.COUNT
          this.loading = false
        })
    },
    readMore: function() {
      this.request.countNumber += 12
      this.request.count = "&count=" + this.request.countNumber
    },
    resetCount: function() {
      this.request.countNumber = 12
      this.request.count = "&count=" + this.request.countNumber
    },
    toggleFilterTags: function() {
      this.showLabels = !this.showLabels
    },
    toggleFilterSections: function() {
      this.showSections = !this.showSections
    },
    toggleFilterPrices: function() {
      this.showPrices = !this.showPrices
    },
    reset: function() {
      this.loading = true
      axios.get("http://5.23.53.82/api/catalog/").then(response => {
        this.products = response.data.ELEMENTS
        this.sections = response.data.SECTIONS
        this.labels = response.data.LABELS
        this.countAll = response.data.COUNT
        this.childDataLoaded = true
        this.textSections = response.data.SECTIONS[0].NAME.toLowerCase()
        this.mobileLabels = []
        this.arrayForLabels = []
        this.arrayForSections = []
        this.loading = false
      })
    }
  }
}
</script>

<style>
.catalog-cards__inner a {
  text-decoration: none;
}
.catalog-filter,
.catalog-tags {
  background: #fff;
  position: relative;
}
.catalog-tags:before {
  content: "";
  background: url(/img/form-bg.png) no-repeat 50% 0;
  position: absolute;
  top: 100px;
  left: 0;
  width: 100%;
  height: 200px;
  z-index: -1;
  transform: rotate(180deg);
}
</style>
