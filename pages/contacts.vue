<template>
  <div>
    <div class="container">
      <AppBreadcrumb :bred="bred" />
    </div>
    <div class="contact">
      <div class="container">
        <h1>Контакты</h1>
      </div>
      <yandex-map 
        v-if="showMap"
        :coords="[59.974541, 30.523541]"
        zoom="5"
        style="width: 100%; height: 600px;"
        :behaviors="['drag', 'multiTouch']"
        :controls="['geolocationControl', 'zoomControl']"
        map-type="map"
      >
        <ymap-marker 
          marker-id="1"
          marker-type="placemark"
          :coords="[59.974541, 30.523541]"
          :icon="{
            layout: 'default#image',
            imageHref: markerIcon,
            imageSize: [46, 68],
            imageOffset: [-22, -55]
          }"
        ></ymap-marker>
        <ymap-marker
          marker-id="2"
          marker-type="placemark"
          :coords="[55.785635, 37.658814]"
          :icon="{
            layout: 'default#image',
            imageHref: markerIcon,
            imageSize: [46, 68],
            imageOffset: [-22, -55]
          }"
        ></ymap-marker>
      </yandex-map>
      <div class="container">
        <div class="contact__info">
          <div class="contact__info__block">
            <h3>Санкт-Петербург</h3>
            <a href="tel:+7 (812) 648-21-86">+7 (812) 648-21-86</a><br>
            <a href="tel:+7 (800) 333-12-86">+7 (800) 333-12-86</a><span> - бесплатно</span>
            <p>194044, ул. Гельсингфорсская, 3, лестница 8, 5 этаж.<br>
              На территории завода  «Красная нить».<br>
              Ст. м. Выборгская.<br>
            </p>
            <p>Пн. – Пт.: 9:00 – 18:00</p>
          </div>
          <div class="contact__info__block">
            <h3>Москва</h3>
            <a href="tel:+7 (495) 215-11-34">+7 (495) 215-11-34</a><br>
            <a href="tel:+7 (800) 333-12-86">+7 (800) 333-12-86</a><span> - бесплатно</span>
            <p>107140, ул. Верхняя Красносельская, д.2., 3 этаж.<br>
              Ст. м. "Красносельская". <br>
              Для связи на месте: +7 (499) 503-06-42<br>
            </p>
            <p>Пн. – Пт. 9:00 – 19:00</p>
          </div>
        </div>
      </div>
      
    </div>
    <div class="spacer"></div>
  </div>
</template>
<script>
import AppBreadcrumb from '../components/ui/AppBreadcrumb'
export default {
  components: {
    AppBreadcrumb
  },
  data(){
    return{
      showMap: false,
      bred: [
        {
          NAME: 'Главная',
          URL: '/'
        },
        {
          NAME: 'Контакты и карта',
          URL: '/contact'
        }
      ],
      markerIcon: '/img/mark.png'
    }
  },
  mounted() {
    this.showMap = true
  },
}
</script>
<style lang="sass">
.contact
  h1
    font-size: 38px
    font-weight: normal
    font-style: normal
    font-stretch: normal
    line-height: 1.05
    letter-spacing: normal
    color: #5b4630
    margin-bottom: 42px
    @media (max-width: 320px)
      font-size: 24px
  &__info
    margin-top: 75px
    margin-bottom: 100px
    display: flex
    @media (max-width: 320px)
      flex-direction: column
      padding: 0 30px
    &__block
      margin-right: 130px
      @media (max-width: 320px)
        margin-right: 0
        margin-bottom: 40px
      h3
        font-size: 32px
        font-weight: normal
        font-style: normal
        font-stretch: normal
        line-height: 0.88
        letter-spacing: normal
        color: #644733
        margin-bottom: 30px
        @media (max-width: 320px)
          font-size: 22px
      a
        text-decoration: none
        display: inline-block
        color: #644733
        margin-bottom: 10px
        font-size: 16px
        line-height: 1.25
        font-weight: bold
        @media (max-width: 320px)
          font-size: 16px
      span
        font-size: 16px
        line-height: 1.25
        color: #644733
        @media (max-width: 320px)
          font-size: 16px
      p
        font-size: 16px
        line-height: 1.25
        color: #644733
        margin-bottom: 15px
        @media (max-width: 320px)
          font-size: 16px

@media (max-width: 320px)
  .ymap-container, .ymaps-2-1-71-map, .ymaps-2-1-71-map
    height: 300px !important
        


    
</style>

