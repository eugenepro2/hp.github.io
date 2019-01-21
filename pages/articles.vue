<template>
  <div>
    <div style="background: #fff">
      <div class="container">
        <AppBreadcrumb :bred="bred" />
      </div>
    </div>
    <div class="articles">
      <div class="container">
        <h1>Статьи</h1>
        <div class="index-articles">
          <div
            v-for="article in sliceArticles"
            :key="article.id"
            class="index-articles__item"
          >
            <nuxt-link :to="`/article/${article.CODE}`">
            <div class="index-articles__inner index-articles__inner_cut">
              <div class="index-articles__info">
                <div class="index-articles__date">{{ article.DATE }}</div>
                <div class="index-articles__text">{{ article.NAME }}</div>
              </div>
            </div>
            <div class="index-articles__inner hidden-320">
              <div class="index-articles__info">
                <div class="index-articles__date">{{ article.DATE }}</div>
                <div class="index-articles__text">{{ article.NAME }}</div>
              </div>
            </div>
            <div class="index-articles__img">
              <img
                :src="article.PREVIEW_PICTURE.src"
                alt="Цветы в подарок - богатый мир оттенков и ароматов"
                class="index-articles__img"
              >
            </div>
            
            </nuxt-link>
          </div>
          <div v-if="showMore" class="index-articles__button" @click="readMore">
            <span>Показать еще</span>
          </div>
        </div>
        <div class="spacer"></div>
      </div>
    </div>
  </div>
</template>

<script>
import AppBreadcrumb from '../components/ui/AppBreadcrumb'
import axios from 'axios'
export default {
  components: {
    AppBreadcrumb,
  },
  data(){
    return{
      articles: [],
      sliceArticles: [],
      countNumber: 4,
      showMore: true,
      bred: [
        {
          NAME: 'Главная',
          URL: '/'
        },
        {
          NAME: 'Статьи',
          URL: '/articles'
        }
      ]
    }
  },
  created() {
    axios
      .get(`http://5.23.53.82/api/articles/`)
      .then(response => {
        this.articles = response.data.ARTICLES
        this.updateArticles(this.countNumber)
      })
  },
  methods: {
    updateArticles: function(update){
      this.sliceArticles = this.articles.slice(0,update)
    },
    readMore: function(){
      this.countNumber += 4
      this.updateArticles(this.countNumber)
      if (this.countNumber >= this.articles.length) {
        this.showMore = false
      }
    }
  }
}
</script>

<style lang="sass">
.articles
  padding-bottom: 100px
  &:before
    content: ""
    background: url(/img/form-bg.png) no-repeat 50% 0
    position: absolute
    top: 80px
    left: 0
    width: 100%
    height: 200px
    z-index: -1
    transform: rotate(180deg)
  h1
    font-size: 38px
    font-weight: normal
    font-style: normal
    font-stretch: normal
    line-height: 1.05
    letter-spacing: normal
    color: #5b4630
    margin-bottom: 100px
  .index-articles a
    text-decoration: none
  .index-articles
    width: 70%
    height: 100%
    &__item:nth-child(even)
      left: auto
      right: 0
      justify-content: flex-start
      .index-articles__info, .index-articles__inner
        left: auto
        right: 0
    &__info
      width: 550px
    &__text
      font-size: 36px
    &__date
      font-size: 27px
    &__inner
      width: 419px
    &__item
      width: 100%
      height: auto
    &__button
      margin-top: 100px
      margin-left: 350px
    &__img
      width: 400px
      height: 300px
      img
        width: 100%
        height: 100%
</style>

