<template>
  <div class="card-item-tabs">
    <div class="card-item-tabs__head">
      <div class="card-item-tabs__button" @click="activeTab=1" :class="[ activeTab === 1 ? 'active' : '' ]">Описание</div>
      <div class="card-item-tabs__button" @click="activeTab=2" :class="[ activeTab === 2 ? 'active' : '' ]">Состав</div>
      <div class="card-item-tabs__button" @click="activeTab=3" :class="[ activeTab === 3 ? 'active' : '' ]">Брендирование</div>
      <div class="card-item-tabs__button" @click="activeTab=4" :class="[ activeTab === 4 ? 'active' : '' ]">Гарантии</div>
    </div>
    <div class="card-item-tabs__body">
      <div class="card-item-tabs__info" v-if="activeTab === 1">
        <div class="card-item-tabs__text" v-html="tabs.DESC_PODAR">
        </div>
      </div>
      <div class="card-item-tabs__info" v-if="activeTab === 2">
        <div class="card-item-tabs__text" v-html="tabs.SOSTAV_PODAR">
        </div>
      </div>
      <div class="card-item-tabs__info" v-if="activeTab === 3">
        <div class="card-item-tabs__text" v-html="tabs.BRAND_PODAR">
        </div>
      </div>
      <div class="card-item-tabs__info" v-if="activeTab === 4">
        <div class="card-item-tabs__text" v-html="tabs.GARANT_PODAR">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      tabs: {type: Object, required: true}
    },
    data(){
      return{
        activeTab: 1
      }
    }
  }
</script>