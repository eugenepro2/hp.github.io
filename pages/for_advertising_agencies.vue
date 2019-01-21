<template>
  <div>
    <div class="container">
      <AppBreadcrumb :bred="bred" />
    </div>
    <div class="container default">
      <h1>Рекламным агентствам</h1>
      <p>Мы хотим с Вами подружиться и предлагаем вместе работать на рынке корпоративных подарков.</p>
      <p>Для Вас мы разработали выгодное деловое предложение и индивидуальные условия. Более подробную информацию Вы можете узнать, написав нам по почте
        
        <a href="mailto:info@happypartner.ru">info@happypartner.ru</a>
      </p>
    </div>
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
      bred: [
        {
          NAME: 'Главная',
          URL: '/'
        },
        {
          NAME: 'Рекламным агентствам',
          URL: '/for_advertising_agencies'
        }
      ],
    }
  },
}
</script>
<style>
</style>