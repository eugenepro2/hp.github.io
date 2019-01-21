<template>
  <div class="index">
    <template v-if="childDataLoaded">
      <section class="index-slider">
        <no-ssr>
          <swiper ref="mySwiper" :options="slider">
            <swiper-slide v-for="slide in main.SLIDERS" :key="slide.id">
              <div
                :style="`background-image: url(${slide.IMG.src})`"
                class="index-slider__item"
              >
                <div class="index-slider__item-inner">
                  <div class="index-slider__title">{{ slide.NAME }}</div>
                  <div class="index-slider__subtitle">Заголовок</div>
                  <div class="index-slider__desc">
                    <ul class="index-slider__ul">
                      <li class="index-slider__li">
                        Собственное производство площадью 300 м2
                      </li>
                      <li class="index-slider__li">6 лет на рынке</li>
                      <li class="index-slider__li">Доставка по всей России</li>
                    </ul>
                  </div>
                </div>
              </div>
            </swiper-slide>
            <div slot="pagination" class="swiper-pagination" />
          </swiper>
        </no-ssr>
      </section>
      <section class="index-cards">
        <div class="index-cards__inner">
          <div
            v-for="slide in main.PRODUCTS"
            :key="slide.id"
            class="index-cards__item"
          >
            <div
              :style="`background-image: url(${slide.PREVIEW_PICTURE.src})`"
              class="index-cards__img"
            />
            <div class="index-cards__body">
              <div class="index-cards__name">{{ slide.NAME }}</div>
              <div class="index-cards__text" v-html="slide.TEXT" />
              <div class="index-cards__price">от {{ slide.PRICE }} &#8381;</div>
              <nuxt-link :to="`${slide.SECTION[0].CODE}/${slide.CODE}`"
                ><div class="index-cards__button">
                  <span>Перейти в Каталог</span>
                </div></nuxt-link
              >
            </div>
          </div>
        </div>
        <div class="index-cards__carousel">
          <no-ssr>
            <swiper ref="mySwiper" :options="slider">
              <swiper-slide v-for="slide in main.PRODUCTS" :key="slide.id">
                <div class="index-cards__item">
                  <div
                    :style="
                      `background-image: url(${slide.PREVIEW_PICTURE.src})`
                    "
                    class="index-cards__img"
                  />
                  <div class="index-cards__body">
                    <div class="index-cards__name">{{ slide.NAME }}</div>
                    <div class="index-cards__text" v-html="slide.TEXT" />
                    <div class="index-cards__price">
                      от {{ slide.PRICE }} &#8381;
                    </div>
                    <nuxt-link :to="`/card/${slide.ID}`"
                      ><div class="index-cards__button">
                        <span>Перейти в Каталог</span>
                      </div></nuxt-link
                    >
                  </div>
                </div>
              </swiper-slide>
              <div slot="pagination" class="swiper-pagination" />
            </swiper>
          </no-ssr>
        </div>
      </section>
      <section class="index-categories">
        <div
          v-for="item in main.PROMO_PAGES.slice(0, 4)"
          :key="item.id"
          class="index-categories__item"
        >
          <div class="index-categories__title">{{ item.NAME }}</div>
          <nuxt-link to="/service/1"
          ><div class="index-categories__button">
            Подробнее о услуге
          </div></nuxt-link
          >
        </div>
      </section>
      <section class="index-cases">
        <div class="container">
          <div class="index-cases__inner">
            <div class="index-cases__title">Индивидуальные кейсы</div>
            <div class="index-cases__list">
              <div v-for="item in main.CASES" :key="item.id" class="index-case">
                <img
                  :src="item.PREVIEW_PICTURE.src"
                  :alt="item.NAME"
                  class="index-case__img"
                >
                <div class="index-case__inner">
                  <div class="index-case__title">{{ item.NAME }}</div>
                  <div class="index-case__text">{{ item.PREVIEW_TEXT }}</div>
                  <div class="index-case__price">
                    от {{ item.PRICE }} &#8381;
                  </div>
                  <nuxt-link to="/case/1">
                    <div class="index-case__button">
                      <span>Перейти в Каталог</span>
                    </div>
                  </nuxt-link>
                </div>
              </div>
            </div>
            <div class="index-cases__carousel">
              <no-ssr>
                <swiper ref="mySwiper" :options="slider">
                  <swiper-slide v-for="item in main.CASES" :key="item.id">
                    <div class="index-case">
                      <img
                        :src="item.PREVIEW_PICTURE.src"
                        :alt="item.NAME"
                        class="index-case__img"
                      />
                      <div class="index-case__inner">
                        <div class="index-case__title">{{ item.NAME }}</div>
                        <div class="index-case__text">
                          {{ item.PREVIEW_TEXT }}
                        </div>
                        <div class="index-case__price">
                          от {{ item.PRICE }} &#8381;
                        </div>
                      </div>
                    </div>
                  </swiper-slide>
                  <div slot="pagination" class="swiper-pagination" />
                </swiper>
              </no-ssr>
            </div>
            <nuxt-link to="/case/1">
              <div class="index-cases__button"><span>Все Кейсы</span></div>
            </nuxt-link>
          </div>
        </div>
      </section>
      <section class="index-other">
        <div class="container">
          <div class="index-other__inner">
            <div class="index-articles">
              <h2 class="index-articles__title">Может помочь</h2>
              <div
                v-for="item in main.ARTICLES.slice(0, 2)"
                :key="item.id"
                class="index-articles__item"
              >
                <nuxt-link :to="`/article/${item.CODE}`">
                <div class="index-articles__inner index-articles__inner_cut">
                  <div class="index-articles__info">
                    <div class="index-articles__date">{{ item.DATE }}</div>
                    <div class="index-articles__text">{{ item.NAME }}</div>
                  </div>
                </div>
                <div class="index-articles__inner hidden-320">
                  <div class="index-articles__info">
                    <div class="index-articles__date">{{ item.DATE }}</div>
                    <div class="index-articles__text">{{ item.NAME }}</div>
                  </div>
                </div>
                <img
                  :src="item.PREVIEW_PICTURE.src"
                  alt="Цветы в подарок - богатый мир оттенков и ароматов"
                  class="index-articles__img"
                >
                </nuxt-link>
              </div>
              <nuxt-link to="/articles">
                <div class="index-articles__button">
                  <span>Все статьи</span>
                </div>
              </nuxt-link>
            </div>
            <div
              v-for="review in main.REVIEW"
              :key="review.id"
              class="index-reviews"
            >
              <h2 class="index-reviews__title">Отзывы счастливых клиентов</h2>
              <div class="index-reviews__inner">
                <div class="index-reviews__head">
                  <div
                    :style="
                      `background-image: url(${review.PREVIEW_PICTURE.src})`
                    "
                    class="index-reviews__img"
                  />
                  <div class="index-reviews__name">{{ review.NAME }}</div>
                  <div class="index-reviews__refresh" />
                </div>
                <div
                  class="index-reviews__text"
                  v-html="review.PREVIEW_TEXT.slice(0, 200) + '...'"
                />
                <nuxt-link to="/case/1">
                  <div class="index-reviews__button">
                    <span>Все отзывы</span>
                  </div>
                </nuxt-link>
              </div>
            </div>
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
    </template>
  </div>
</template>

<script>
import axios from "axios"
export default {
  data() {
    return {
      childDataLoaded: false,
      header: null,
      main: null,
      slider: {
        loop: true,
        speed: 1000,
        autoplay: {
          delay: 4000
        },
        pagination: {
          el: ".swiper-pagination",
          type: "bullets"
        }
      }
    }
  },
  created() {
    axios
      .get("http://5.23.53.82/api/header/")
      .then(response => (this.header = response))
    axios.get("http://5.23.53.82/api/main/").then(response => {
      this.childDataLoaded = true
      this.main = response.data
    })
  }
}
</script>

<style lang="sass">
.index-slider
  .swiper-pagination
    max-width: 1200px
    text-align: left
    margin: 0 auto
    width: 100%
    display: flex
    position: relative
    padding: 0 15px
    top: -50px
  .swiper-pagination-bullet
    background: #f8f5f2
    opacity: 0.4
    margin-right: 10px !important
    &-active
      background: #fff
      opacity: 1

.index-cards, .index-cases
  .swiper-container
    height: 550px
  .swiper-pagination
    bottom: 0px
    .swiper-pagination-bullet
      background: #000
      opacity: 0.4
      margin-right: 10px !important
      &-active
        background: #000
        opacity: 1
.index-cases
  .swiper-container
    height: 480px

.swiper-pagination-bullet
  width: 10px
  height: 10px

.index-cards__img, .index-slider__item
  background-size: cover
.index
  .index-articles__item:nth-child(odd)
    left: auto
    right: 0
    justify-content: flex-start
    .index-articles__info, .index-articles__inner
      left: auto
      right: 0
.index-categories__item a, .index-case__inner a, .index-other__inner a
  text-decoration: none
.index-reviews__text div
  font-family: Madelyn
.index-slider__item:before
    content: ''
    width: 100%
    height: 100%
    position: absolute
    background-color: rgba(0, 0, 0, 0.4)
    top: 0
    z-index: 1
.index-slider__item-inner
  position: relative
  z-index: 20
.index-form__submit, .card-item-props__button
  cursor: pointer
.index-case__img
  object-fit: cover
@media (max-width: 320px)
  .index-slider
    .swiper-pagination
      justify-content: center
  .index-reviews__inner
    height: 100%
    padding: 20px
</style>
