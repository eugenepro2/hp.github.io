<template>
  <div>
    <app-header></app-header>
    <!-- <app-mobile-menu></app-mobile-menu> -->
    <nuxt/>
    <app-footer></app-footer>
    <app-cart></app-cart>
  </div>
</template>

<script>
import AppHeader from '../components/ui/AppHeader'
import AppMobileMenu from '../components/ui/AppMobileMenu'
import AppFooter from '../components/ui/AppFooter'
import AppCart from '../components/ui/AppCart'
export default {
  components: {
    AppHeader,
    AppMobileMenu,
    AppFooter,
    AppCart
  },
  created() {
    this.$store.commit('get_idUser')
  },
}
</script>

<style lang="sass">
.page-enter-active
  transition: all .5s
.page-leave
  opacity: 1
.page-leave-to
  opacity: 0
.page-enter
  opacity: 0
.page-enter-to
  opacity: 1


.card-item-props__button
  transition: all 0.3s
  &:hover
    background: url(/img/sticker-orange-hover.svg) no-repeat 50% 50%
.catalog-load-more__button, .index-cases__button, .index-articles__button, .index-form__submit
  transition: all 0.3s
  &:hover
    background: url(/img/sticker-white-hover.svg) no-repeat 50% 50%
.index-reviews__button, .index-cards__button, .index-case__button
  transition: all 0.3s
  &:hover
    background: url(/img/sticker-long-hover.svg) no-repeat 50% 50%
.card-item-img__control
  justify-content: flex-start

a, input, .catalog-filter__button, .catalog-filter__menu-li, .catalog-tags__button, .catalog-card__favorite, .index-case, .index-form__submit, .index-articles__button
  cursor: url(/img/cursor.png), auto !important

.default
  padding-top: 20px
  padding-bottom: 250px
  h1
    font-size: 38px
    font-weight: normal
    font-style: normal
    font-stretch: normal
    line-height: 1.05
    letter-spacing: normal
    color: #5b4630
    margin-bottom: 42px
    @media (max-width: 320px)
      font-size: 24px
  h3
    font-size: 32px
    font-weight: normal
    font-style: normal
    font-stretch: normal
    line-height: 0.88
    letter-spacing: normal
    color: #644733
    margin-bottom: 30px
    @media (max-width: 320px)
      font-size: 22px
  a
    text-decoration: none
    display: inline-block
    color: #644733
    margin-bottom: 10px
    font-size: 16px
    line-height: 1.25
    font-weight: bold
    text-decoration: underline
    @media (max-width: 320px)
      font-size: 16px
  span
    font-size: 16px
    line-height: 1.25
    color: #644733
    @media (max-width: 320px)
      font-size: 16px
  p
    font-size: 16px
    line-height: 1.25
    color: #644733
    margin-bottom: 15px
    @media (max-width: 320px)
      font-size: 16px
</style>


