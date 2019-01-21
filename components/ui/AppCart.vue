<template>
  <div>
    <nuxt-link to="/cart">
      <div class="cart animated">
        <img src="/img/cart.svg" alt="" />
        <div class="cart-count">{{ this.$store.state.countCart }}</div>
      </div>
    </nuxt-link>
    <nuxt-link to="/favorite"> <div class="present" /> </nuxt-link>
  </div>
</template>

<script>
export default {
  data() {
    return {
      count: this.$store.state.countCart
    }
  },
  created() {
    this.$store.commit("set_countCart")
  }
}
</script>

<style lang="sass" scoped>
.cart
  position: fixed
  z-index: 100
  width: 50px
  height: 50px
  background-size: cover
  bottom: 110px
  right: 20px
  &:before
    width: 80px
    height: 80px
    content: ''
    position: absolute
    top: 50%
    left: 50%
    background: #492b26
    opacity: 0.7
    border-radius: 50%
    transform: translate(-50%, -50%)
    z-index: -1
  &-count
    width: 25px
    height: 25px
    border-radius: 50%
    color: #fff
    background: #f6773e
    position: absolute
    right: 0
    top: -5px
    display: flex
    justify-content: center
    align-items: center

.present
  background: url(/img/fav.svg) no-repeat 50% 50%
  position: fixed
  z-index: 100
  width: 80px
  height: 80px
  background-size: cover
  bottom: 10px
  right: 4px
</style>
