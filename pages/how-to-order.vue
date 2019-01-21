<template>
  <div>
    <div class="container">
      <AppBreadcrumb :bred="bred" />
      <div class="delivery">
        <h1>Доставка и оплата</h1>
        <p>В таблице указаны сроки эконом-доставки до Вашего города. Если требуется доставить подарки быстрее, то сообщите об этом менеджеру. Мы работаем с шестью транспортными компаниями и подберем оптимальный вариант.</p>
        <p>Стоимость доставки определяется стоимостью услуг транспортных компаний. Вы также можете забрать своей транспортной компанией.</p>
        <p>Вашего города нет в списке? Не переживайте, мы можем организовать доставку в любой населенный пункт России, где есть хотя бы грунтовая дорога.</p>
        <div class="delivery__list">
          <div class="delivery__list__block">
            <h3>С</h3>
            <ul>
              <li>
                <span>Комсомольск-на-Амуре</span>
                <span>2 раб. дня</span>
              </li>
              <li>
                <span>Москва</span>
                <span>2 раб. дня</span>
              </li>
              <li>
                <span>Архангельск</span>
                <span>2 раб. дня</span>
              </li>
            </ul>
          </div>
          <div class="delivery__list__block">
            <h3>С</h3>
            <ul>
              <li>
                <span>Комсомольск-на-Амуре</span>
                <span>2 раб. дня</span>
              </li>
              <li>
                <span>Москва</span>
                <span>2 раб. дня</span>
              </li>
              <li>
                <span>Архангельск</span>
                <span>2 раб. дня</span>
              </li>
            </ul>
          </div>
          <div class="delivery__list__block">
            <h3>С</h3>
            <ul>
              <li>
                <span>Комсомольск-на-Амуре</span>
                <span>2 раб. дня</span>
              </li>
              <li>
                <span>Москва</span>
                <span>2 раб. дня</span>
              </li>
              <li>
                <span>Архангельск</span>
                <span>2 раб. дня</span>
              </li>
            </ul>
          </div>
          <div class="delivery__list__block">
            <h3>С</h3>
            <ul>
              <li>
                <span>Комсомольск-на-Амуре</span>
                <span>2 раб. дня</span>
              </li>
              <li>
                <span>Москва</span>
                <span>2 раб. дня</span>
              </li>
              <li>
                <span>Архангельск</span>
                <span>2 раб. дня</span>
              </li>
            </ul>
          </div>
        </div>
        <h2>Заголовок h2 и еще несколько слов для наглядности</h2>
        <p>Однако Л.В.Щерба утверждал, что диахрония дает прозаический подтекст. Очевидно, что метонимия дает литературный абстракционизм. Парономазия, если уловить хореический ритм или аллитерацию на "р", нивелирует ямб. Быличка откровенна. Особую ценность, на наш взгляд, представляет эстетическое воздействие интегрирует диссонансный диалектический характер, именно об этом говорил Б.В.Томашевский в своей работе 1925 года. Однако Л.В.Щерба утверждал, что диахрония дает прозаический подтекст. Очевидно, что метонимия дает литературный абстракционизм. Парономазия, если уловить хореический ритм или аллитерацию на "р", нивелирует ямб. Быличка откровенна. Особую ценность, на наш взгляд, представляет эстетическое воздействие интегрирует диссонансный диалектический характер, именно об этом говорил Б.В.Томашевский в своей работе 1925 года.</p>
      </div>
    </div>
    <div class="spacer delivery__spacer"></div>
  </div>
</template>
<script>
import AppBreadcrumb from '../components/ui/AppBreadcrumb'
import axios from 'axios'
export default {
  components: {
    AppBreadcrumb
  },
  data(){
    return{
      bred: [
        {
          NAME: 'Главная',
          URL: '/'
        },
        {
          NAME: 'Доставка и оплата',
          URL: '/delivery'
        }
      ],
    }
  },
  created() {
    axios
      .get(`http://5.23.53.82/api/search/?q=${this.$route.query.q}`)
      .then(response => {
        this.products = response.data.ELEMENTS
      })
  },
}
</script>
<style lang="sass">
.delivery
  &__spacer
    height: 200px !important
  h1
    font-size: 38px
    font-weight: normal
    font-style: normal
    font-stretch: normal
    line-height: 1.05
    letter-spacing: normal
    color: #5b4630
    margin-bottom: 60px
    @media (max-width: 320px)
      margin-bottom: 20px
      font-size: 24px
  h2
    font-size: 32px
    font-weight: normal
    font-style: normal
    font-stretch: normal
    line-height: 0.88
    letter-spacing: normal
    color: #644733
    margin-bottom: 30px
    @media (max-width: 320px)
      margin-bottom: 10px
      font-size: 20px
  p
    font-size: 16px
    font-weight: normal
    font-style: normal
    font-stretch: normal
    line-height: 1.75
    letter-spacing: normal
    color: #644733
    margin-bottom: 60px
    width: 70%
    @media (max-width: 1024px)
      width: 100%
    @media (max-width: 320px)
      margin-bottom: 30px
      font-size: 14px
  &__list
    display: flex
    flex-wrap: wrap
    width: 100%
    margin-bottom: 60px
    @media (max-width: 1024px)
      justify-content: space-between
    @media (max-width: 320px)
      margin-bottom: 0
    &__block
      width: 24%
      margin-right: 100px
      margin-bottom: 40px
      &:nth-of-child(odd)
        @media (max-width: 1024px)
          margin-right: 50px

      @media (max-width: 1024px)
        width: calc(50% - 50px)
        margin-right: 0
      @media (max-width: 320px)
        width: 100%
        margin-right: 0
    h3
      font-size: 32px
      font-weight: normal
      font-style: normal
      font-stretch: normal
      line-height: 0.88
      letter-spacing: normal
      color: #644733
      margin-bottom: 10px
    ul
      li
        display: flex
        justify-content: space-between
        span
          font-size: 16px
          line-height: 1.75
          color: #644733
</style>

