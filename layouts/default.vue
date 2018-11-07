<template>
  <div>
    <app-header></app-header>
    <app-mobile-menu></app-mobile-menu>
    <nuxt/>
    <app-footer></app-footer>
  </div>
</template>

<script>
import AppHeader from '../components/ui/AppHeader'
import AppMobileMenu from '../components/ui/AppMobileMenu'
import AppFooter from '../components/ui/AppFooter'
export default {
  components: {
    AppHeader,
    AppMobileMenu,
    AppFooter
  }
}
</script>

<style>

</style>

