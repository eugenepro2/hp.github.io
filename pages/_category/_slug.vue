<template>
  <div class="card">
    <card></card>
    <catalog></catalog>
  </div>
</template>

<script>
import Card from '../../components/card/Card'
import Catalog from '../../components/catalog/Catalog'
export default {
  components: {
    Card,
    Catalog
  }
}
</script>

<style>
.card .catalog-filter, .card .catalog-tags{
 background: none;
}
.card .catalog-tags:before{
  content: none
}
.card{
  position: relative;
}
.card .breadcrumbs{
  background: #fff
}
.card:before{
  content: '';
  background: url(/img/form-bg.png) no-repeat 50% 0;
  position: absolute;
  top: 50px;
  left: 0;
  width: 100%;
  height: 200px;
  z-index: -1;
  transform: rotate(180deg);
}
.card-item-props__gift-img{
  background: url('/img/hp-logo.png');
  background-size: cover;
}
</style>
