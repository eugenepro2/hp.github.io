<template>
  <div>
    <div class="breadcrumbs">
      <div class="breadcrumbs__inner">
        <ul class="breadcrumbs__ul">
          <li class="breadcrumbs__li" v-for="item in bred" :key="item.id">
            <nuxt-link :to="item.URL" class="breadcrumbs__link">{{item.NAME}}</nuxt-link></li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  props: {
    bred: {type: Array, required: true}
  },
  created() {
    
  },
}
</script>
<style lang="sass">
.breadcrumbs
  &__li
    position: relative
    margin-right: 17px
    &:after
      content: ''
      width: 4px
      height: 4px
      border-radius: 2px
      background-color: #a2a2a1
      position: absolute
      right: -10px
      top: 48%
      transform: translateY(-50%)
    &:last-child
      &:after
        content: none
</style>




