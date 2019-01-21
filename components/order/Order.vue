<template>
  <div>
    <div class="container">
      <AppBreadcrumb :bred="bred" />
    </div>
    <div class="order-form">
      <div class="container">
        <div class="order-form__inner" v-bind:class="{ hidden: inner }">
          <div class="order-form__title">Оформление заказа</div>
          <form class="order-form__form" @submit.prevent="submitForm">
            <div class="order-form__text">Я хочу оплатить заказ как:</div>
            <div class="order-form__props">
              <label :for="payer.ID" class="order-form__props-label" 
                v-for="payer in payers" :key="payer.id">
                <input
                  :id="payer.ID"
                  type="radio"
                  name="order-props"
                  hidden
                >
                <div class="order-form__props-img" />
                <span>{{payer.NAME}}</span> 
              </label>
            </div>
            <div class="order-form__accordion">
              <div class="order-form-accordion">
                <div class="order-form-accordion__item" v-bind:class="{ active: step1Show }">
                  <div class="order-form-accordion__head order-form-accordion__head">
                    <div class="order-form-accordion__title">
                      1 шаг <span>–Реквизиты </span>
                    </div>
                    <div class="order-form-accordion__edit hidden">Изменить</div>
                  </div>
                  <div class="order-form-accordion__body order-form-accordion__body">
                    <div class="order-form-accordion__text">Автозаполнение по ИНН</div>
                    <div class="order-form-accordion__body-inner">
                      <div class="order-form-accordion__col">
                        <input
                          type="text"
                          placeholder="Введите ИНН"
                          class="order-form-accordion__input order-form-accordion__input_mini"
                        >
                      </div>
                      <div class="order-form-accordion__col">
                        <input
                          type="text"
                          placeholder="Наименование юрлица"
                          class="order-form-accordion__input"
                          v-model="step1.name"
                        ><input
                          type="text"
                          placeholder="Юридический адрес"
                          class="order-form-accordion__input"
                          v-model="step1.address1"
                        ><input
                          type="text"
                          placeholder="Фактический адрес"
                          class="order-form-accordion__input"
                          v-model="step1.address2"
                        >
                        <div class="order-form-accordion__row">
                          <input
                            type="text"
                            placeholder="ИНН"
                            class="order-form-accordion__input order-form-accordion__input_mini"
                            v-model="step1.inn"
                          ><input
                            type="text"
                            placeholder="КПП"
                            class="order-form-accordion__input order-form-accordion__input_mini"
                            v-model="step1.kpp"
                          >
                        </div>
                        <input
                          type="text"
                          placeholder="Р/С"
                          class="order-form-accordion__input"
                          v-model="step1.pc"
                        ><input
                          type="text"
                          placeholder="К/С"
                          class="order-form-accordion__input"
                          v-model="step1.kc"
                        >
                      </div>
                    </div>
                    <div class="order-form-accordion__button-wrap">
                      <div class="order-form-accordion__button order-form-accordion__button_active" @click="openStep2">
                        <span>Продолжить оформление</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="order-form-accordion__item" v-bind:class="{ active: step2Show }">
                  <div class="order-form-accordion__head">
                    <div class="order-form-accordion__title">
                      2 шаг <span>–Выбор доставки</span>
                    </div>
                    <div class="order-form-accordion__edit hidden">
                      Изменить
                    </div>
                  </div>
                  <div class="order-form-accordion__body">
                    <div class="order-form-accordion__body-inner">
                      <div class="order-form-accordion__props">
                        <label
                          for="order-form__pickup"
                          class="order-form__props-label"
                        ><input
                          id="order-form__pickup"
                          type="radio"
                          value="Самовывоз"
                          name="order-props-delivery"
                          v-model="step2.delivery"
                          hidden
                        >
                          <div class="order-form__props-img" />
                        <span>Самовывоз</span> </label
                        ><label
                          for="order-form__delivery"
                          class="order-form__props-label"
                        ><input
                          id="order-form__delivery"
                          type="radio"
                          value="Доставка"
                          name="order-props-delivery"
                          v-model="step2.delivery"
                          hidden
                        />
                          <div class="order-form__props-img" />
                          <span>Доставка</span>
                        </label>
                      </div>
                      <div class="order-form-accordion__col order-form-accordion__col_pickup">
                        <label
                          for="order-form__pickup2"
                          class="order-form__props-label hidden-320"
                        ><input
                          id="order-form__pickup2"
                          type="radio"
                          :checked="checked"
                          value="Самовывоз"
                          name="order-props-delivery"
                          v-model="step2.delivery"
                          hidden
                        >
                          <div class="order-form__props-img" />
                          <span>Самовывоз</span>
                        </label>
                        <div class="order-form__pickup">
                          Санкт-Петербург, ул. Гельсингфорсская, 3. На
                          территории завода "Красная нить". Лестница 7, 5 этаж.
                          
                        </div>
                      </div>
                      <div class="order-form-accordion__col order-form-accordion__col_delivery">
                        <label
                          for="order-form__delivery2"
                          class="order-form__props-label hidden-320"
                        ><input
                          id="order-form__delivery2"
                          type="radio"
                          value="Доставка"
                          name="order-props-delivery"
                          v-model="step2.delivery"
                          hidden
                        >
                          <div class="order-form__props-img" />
                        <span>Доставка</span> </label
                        ><input
                          type="text"
                          placeholder="Город"
                          v-model="step2.city"
                          class="order-form-accordion__input"
                        ><input
                          type="text"
                          placeholder="Улица"
                          v-model="step2.street"
                          class="order-form-accordion__input"
                        >
                        <div class="order-form-accordion__row">
                          <input
                            type="text"
                            placeholder="Дом"
                            v-model="step2.house"
                            class="order-form-accordion__input order-form-accordion__input_mini"
                          ><input
                            type="text"
                            placeholder="Квартира/Офис"
                            v-model="step2.room"
                            class="order-form-accordion__input order-form-accordion__input_mini"
                          >
                        </div>
                      </div>
                    </div>
                    <div class="order-form-accordion__button-wrap">
                      <div class="order-form-accordion__button order-form-accordion__button_active" @click="openStep3">
                        <span>Продолжить оформление</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="order-form-accordion__item" v-bind:class="{ active: step3Show }">
                  <div class="order-form-accordion__head">
                    <div class="order-form-accordion__title">
                      3 шаг <span>–Контактные данные и подтверждение</span>
                    </div>
                  </div>
                  <div
                    class="order-form-accordion__body order-form-accordion__body_total"
                  >
                    <div class="order-form-accordion__body-inner">
                      <div
                        class="order-form-accordion__col order-form-accordion__col_contact"
                      >
                        <div class="order-form-accordion__text">Заказчик</div>
                        <input
                          type="text"
                          placeholder="Имя"
                          v-model="step3.name1"
                          class="order-form-accordion__input order-form-accordion__input_contact"
                        ><input
                          type="text"
                          placeholder="Как с вами связаться"
                          v-model="step3.phone1"
                          class="order-form-accordion__input order-form-accordion__input_contact"
                        >
                      </div>
                      <div
                        class="order-form-accordion__col order-form-accordion__col_contact"
                      >
                        <div class="order-form-accordion__text">
                          <span>Получатель</span
                          ><label
                            for="order-form-accordion__checkbox"
                            class="order-form-accordion__checkbox"
                          ><input
                            id="order-form-accordion__checkbox"
                            v-model="step3.one"
                            type="checkbox"
                            hidden
                          />
                            <div class="order-form-accordion__img" />
                            <span>Одно лицо</span>
                          </label>
                        </div>
                        <input
                          type="text"
                          placeholder="Имя"
                          v-model="step3.name2"
                          class="order-form-accordion__input order-form-accordion__input_contact"
                        ><input
                          type="text"
                          placeholder="Как с вами связаться"
                          v-model="step3.phone2"
                          class="order-form-accordion__input order-form-accordion__input_contact"
                        >
                      </div>
                      <div
                        class="order-form-accordion__col order-form-accordion__col_total"
                      >
                        <div
                          class="order-form-accordion__text order-form-accordion__text_total"
                        >
                          Заказ #154
                        </div>
                        <ul class="order-form-accordion__total">
                          <li class="order-form-accordion__total-li">
                            <span class="order-form-accordion__total-name">
                              Сумма</span
                            ><span class="order-form-accordion__total">
                              {{totalSum}} ₽</span
                              >
                          </li>
                          <li class="order-form-accordion__total-li">
                            <span class="order-form-accordion__total-name">
                              Сроки изготовления</span
                            ><span class="order-form-accordion__total">
                              7 дней</span
                              >
                          </li>
                          <li class="order-form-accordion__total-li">
                            <span class="order-form-accordion__total-name">
                              Персональный менеджер</span
                            ><span class="order-form-accordion__total">
                              Анна Галенда</span
                              >
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div class="order-form-accordion__button-wrap">
                      <label
                        for="order-form-accordion__submit"
                        class="order-form-accordion__button order-form-accordion__button_total"
                      >
                        <input
                          id="order-form-accordion__submit"
                          type="submit"
                          hidden
                      ><span>Сформировать счет на оплату</span></label
                      >
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
        <div class="order-form-success" v-bind:class="{ active: thanks }">
          <div class="order-form-success__title">Спасибо!</div>
          <div class="order-form-success__text">
            Ваш заказ #154 оформлен в Happy Partner
          </div>
          <div class="order-form-success__manager-text">
            Ваш персональный менеджер
          </div>
          <div class="order-form-success__manager-name">Анна Галенда</div>
          <div class="order-form-success__manager-phone">+7 821 183-24-42</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import AppBreadcrumb from '../ui/AppBreadcrumb'
export default {
  components:{
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
          NAME: 'Корзина',
          URL: '/cart'
        },
        {
          NAME: 'Оформление заказа',
          URL: '/order'
        }
      ],
      payers: [],
      totalSum: this.$route.query.totalSum,
      step1: {
        name: '',
        address1: '',
        address2: '',
        inn: '',
        kpp: '',
        pc: '',
        kc: ''
      },
      step2: {
        delivery: "Самовывоз",
        city: '',
        street: '',
        house: '',
        room: ''
      },
      step3: {
        name1: '',
        phone1: '',
        name2: '',
        phone2: '',
        one: false,
      },
      step1Show: true,
      step2Show: false,
      step3Show: false,
      thanks: false,
      inner: false
    }
  },
  created() {
    axios
      .get(`http://5.23.53.82/api/order/?getpayer=y`)
      .then(response => {
        this.payers = response.data.PAYMENT
      })
  },
  methods: {
    openStep2: function(){
      this.step1Show = false
      this.step2Show = true
    },
    openStep3: function(){
      this.step2Show = false
      this.step3Show = true
    },
    submitForm: function(){
      this.step3Show = false
      this.inner = true
      this.thanks = true
      
    }
  }
}
</script>

<style lang="sass">
.order-form-success
  &.active
    display: flex
.order-form-accordion__button_total
  background: url(/img/sticker-orange-2.svg)
  background-size: cover
  height: 110px
</style>

