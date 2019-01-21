<template>
  <div>
    <div class="article">
      <div class="container">
        <div class="row">
          <div class="col-xs-12">
            <AppBreadcrumb />
            <h1>{{item.NAME}}</h1>
            <div class="article__text" v-html="item.DETAIL_TEXT">
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import AppBreadcrumb from '../../components/ui/AppBreadcrumb'
export default {
  components: {
    AppBreadcrumb
  },
  data(){
    return{
      item: {}
    }
  },
  created() {
    axios
      .get(`http://5.23.53.82/api/article-element/?code=${this.$route.params.slug}`)
      .then(response => {        
        this.item = response.data.ELEMENT
      })
  },
}
</script>

<style lang="sass">
.article
  h1
    font-size: 38px
    font-weight: normal
    font-style: normal
    font-stretch: normal
    line-height: 1.05
    letter-spacing: normal
    color: #5b4630  
  &:before
    content: ""
    background: url(/img/form-bg.png) no-repeat 50% 0
    position: absolute
    top: 70px
    left: 0
    width: 100%
    height: 200px
    z-index: -1
    transform: rotate(180deg)
  &__text
    padding-top: 130px
    padding-bottom: 200px
    h2, h3, h4
      margin-bottom: 30px
      font-weight: normal
      font-style: normal
      font-stretch: normal
      letter-spacing: normal
      color: #644733
    h2
      font-size: 32px
    h3
      font-size: 26px
    h4
      font-size: 22px
    a
      color: #f67700
    ol
      list-style: decimal
      li
        font-size: 16px
        font-weight: normal
        font-style: normal
        font-stretch: normal
        line-height: 1.75
        letter-spacing: normal
        color: #644733
        margin-bottom: 15px
        position: relative
    ul
      list-style: none
      padding-left: 40px
      li
        font-size: 16px
        font-weight: normal
        font-style: normal
        font-stretch: normal
        line-height: 1.75
        letter-spacing: normal
        color: #644733
        margin-bottom: 15px
        position: relative
        &:before
          content: ''
          width: 10px
          height: 10px
          background-color: #f67700
          position: absolute
          border-radius: 50%
          left: -40px
          top: 50%
          transform: translateY(-50%)

    p
      font-size: 16px
      font-weight: normal
      font-style: normal
      font-stretch: normal
      line-height: 1.75
      letter-spacing: normal
      color: #644733
      margin-bottom: 65px
</style>