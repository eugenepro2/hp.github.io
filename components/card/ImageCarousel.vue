<template>
  <div>
    <div class="card-item__carousel">
      <swiper :options="sliderImages">
        <swiper-slide v-for="img in image" :key="img.id">
          <img :src="img.src" alt="" class="card-item__carousel-img"
        ></swiper-slide>
        <div slot="pagination" class="swiper-pagination" />
      </swiper>
    </div>
    <div class="card-item-img">
      <swiper option="sliderImages" ref="mySwiper">
        <swiper-slide 
          v-for="img in image"
          :key="img.id"
        >
          <a :href="img.src" data-fancybox="gallery">
            <img
              :src="img.src"
              alt="Путешествие к центру земли"
              class="card-item-img__main"
            >
          </a>
        </swiper-slide>
      </swiper>
      
      
      <div class="card-item-img__control">
        <swiper :options="sliderThun">
          <swiper-slide v-for="img in image" :key="img.id">
            <div
              :style="`background-image: url(${img.src})`"
              :data-card-img="img.src"
              class="card-item-img__mini card-item-img__mini_active"
              @click="changeImage"
            />
          </swiper-slide>
          <div class="swiper-button-prev" slot="button-prev"></div>
          <div class="swiper-button-next" slot="button-next"></div>
        </swiper>
        <!-- <div
          v-for="img in image.slice(1)"
          :style="`background-image: url(${img.src})`"
          :key="img.id"
          :data-card-img="img.src"
          class="card-item-img__mini"
          @click="changeImage"
        /> -->
      </div>
    </div>
  </div>
</template>

<script>
import $$ from "jquery"
export default {
  props: {
    image: {type: Array, required: true}
  },
  data() {
    return {
      sliderImages: {
        loop: true,
        pagination: {
          el: ".swiper-pagination",
          type: "bullets"
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
      },
      sliderThun: {
        loop: true,
        direction: 'vertical',
        slidesPerView: 5,
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
      }
    }
  },
  computed: {
    swiper() {
      return this.$refs.mySwiper.swiper
    }
  },
  methods: {
    changeImage: function(event) {
      let src = $$(event.toElement).closest('.swiper-slide').attr('data-swiper-slide-index')
      $$(`[data-swiper-slide-index]`).removeClass('active')
      $$(`[data-swiper-slide-index=${src}]`).addClass('active')
      this.swiper.slideTo(+src)
      
    }
  }
}
</script>

<style lang="sass">
.swiper-pagination
  &-bullet
    width: 10px
    height: 10px
    background: #fff
.card-item-img
  &__main
    height: 383px
  &__control
    width: 72px
    position: relative
    .card-item-img__mini
      border: 1px solid #f8f5f2
    .active
      div
        border: 1px solid #f6773e
  .swiper-container
    width: 390px
.swiper
  &-container
    position: static
  &-button-prev
    top: -35px
    left: 22px
    transform: rotate(-90deg)
  &-button-next
    transform: rotate(90deg)
    top: initial
    bottom: -30px
    right: 23px
  &-button-prev, &-button-next
    background: url('/img/arrow.svg')
    background-size: cover
    height: 30px
    margin-top: 0
</style>
