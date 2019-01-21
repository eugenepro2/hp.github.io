<template>
<div>
  <div class="container">
    <AppBreadcrumb :bred="bred" />
  </div>
  <div class="container default">
    <h1>Поставщикам</h1>
    <p>Мы заинтересованы в сотрудничестве с хорошими поставщиками. Ежедневно мы обрабатываем в среднем 5 клиентских запросов на подарочную продукцию, в том числе на составляющие, которых нет в нашем каталоге.</p>
    <p>.Для того, чтобы стать нашим поставщиком, напишите нам!</p>
    <p>Прямой email отдела закупок <a href="mailto:happypartner.ru">happypartner.ru</a></p>
    <p>Вы можете быть уверенными в том, что Ваше письмо будет получено и прочитано.</p>
  </div>
</div>
</template>
<script>
import AppBreadcrumb from '../../components/ui/AppBreadcrumb'
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
          NAME: 'Поставщикам',
          URL: '/info/postavshikam.php'
        }
      ]
    }
  },
}
</script>