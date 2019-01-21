<template>
  <div class="card-item__head">
    <div class="card-item__title">{{info.NAME}}</div>
    <div class="card-item__desc">{{info.TEXT}}</div>
    <div class="card-item__favs" @click="addToFavorite" :data-id="info.ID">
      <div class="card-item__favs-img"></div>
      <div class="card-item__favs-text">Добавить в презентацию</div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import $$ from 'jquery'
export default {
  props: {
    info: {type: Object, required: true}
  },
  data(){
    return{
      id: this.$store.state.id
    }
  },
  methods: {
    addToFavorite: function() {
      let attr = event.toElement.getAttribute('data-id')
      $$('.card-item__favs-img').addClass('active')
      if (this.$store.state.id == undefined || this.$store.state.id == 'undefined') {
        axios
          .get(`http://5.23.53.82/api/izbr/?add=${attr}`)
          .then(response => {
            this.$store.commit('set_idUser', response.data.fuser)
          })
      } else{
        axios.get(`http://5.23.53.82/api/izbr/?add=${attr}&fuser=${this.id}`)
      }
    }
  }
}
</script>
<style lang="sass">
.card-item__favs-img.active
  background: url(/img/fav-active.svg) no-repeat 50% 50%
  opacity: 1
</style>
