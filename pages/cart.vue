<template>
  <div>
    <div class="container">
      <AppBreadcrumb :bred="bred" />
    </div>
    <cart/>
  </div>
</template>

<script>
import AppBreadcrumb from '../components/ui/AppBreadcrumb'
import Cart from "../components/cart/Cart"
export default {
  components: {
    AppBreadcrumb,
    Cart
  },
  data(){
    return{
      bred: [
        {
          NAME: 'Главная',
          URL: '/'
        },
        {
          NAME: 'Корзина',
          URL: '/cart'
        }
      ]
    }
  }
}
</script>

<style></style>
