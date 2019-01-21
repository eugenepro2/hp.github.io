<template>
  <div>
    <div class="container">
      <AppBreadcrumb :bred="bred" />
    </div>
    <section class="catalog-cards">
      <div v-if="loading" class="catalog-cards__loader" />
      <div class="container">
        <div class="catalog-cards__inner">
          <!-- <card
            v-for="item in items"
            :key="item.id"
            :product="item"
          /> -->
        </div>
      </div>
    </section>
  </div>
</template>
<script>
import AppBreadcrumb from '../components/ui/AppBreadcrumb'
import Card from '../components/catalog/Card'
import axios from 'axios'
export default {
  components: {
    AppBreadcrumb,
    Card
  },
  data(){
    return{
      items: [],
      id: this.$store.state.id,
      bred: [
        {
          NAME: 'Главная',
          URL: '/'
        },
        {
          NAME: 'Создать презентацию',
          URL: '/favorite'
        }
      ]
    }
  },
  created(){
    axios
      .get(`http://5.23.53.82/api/izbr/?get=${this.id}`)
      .then(response => {        
        this.items = response.data.ITEMS
      })
  }
}
</script>
<style></style>
