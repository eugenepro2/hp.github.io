<template>
  <div>
    <!--BEGIN footer-->
    <section class="index-form">
      <div class="container">
        <div class="index-form__inner">
          <h2 class="index-form__title">Много всего и не подходит?</h2>
          <div class="index-form__desc">
            Оставьте свой телефон и наш менеджер позаботится обо всем
          </div>
          <form
            id="index-form__form"
            :class="{ submited: formSubmited }"
            class="index-form__form"
            @submit.prevent="submitForm()"
          >
            <input
              v-model="name"
              type="text"
              placeholder="Имя"
              required
              class="index-form__input"
            >
            <input
              v-model="email"
              type="text"
              placeholder="Телефон или электронная почта"
              required
              class="index-form__input"
            >
            <div class="thanks"><p>Спасибо! Вам скоро перезвонят!</p></div>
            <div class="index-form__submit">
              <input type="submit" value="Отправить" >
            </div>
          </form>
          <div class="index-form__list">
            <div class="index-form__item">
              <div class="index-form__img index-form__img_1" />
              <div class="index-form__text">
                Придумаем варианты, изменим состав
              </div>
            </div>
            <div class="index-form__item">
              <div class="index-form__img index-form__img_2" />
              <div class="index-form__text">
                Впишемся в бюджет и соберем презентацию
              </div>
            </div>
            <div class="index-form__item">
              <div class="index-form__img index-form__img_3" />
              <div class="index-form__text">
                Предложим скидки, положим запасные подарки
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="index-advantages">
      <div class="container">
        <div class="index-advantages__inner">
          <h2 class="index-advantages__title">
            <!-- Необычные подарки для креативных людей -->
          </h2>
          <div class="index-advantages__info">
            <div class="index-advantages__text" v-html="seo.MAIN_TEXT">
            
            </div>
          </div>
          <div class="index-advantages__more">Показать весь текст</div>
          <div class="index-advantages__list">
            <div class="index-advantages__item">
              <div class="index-advantages__img index-advantages__img_1">
                <div class="index-advantages__name">Ручная работа</div>
              </div>
            </div>
            <div class="index-advantages__item">
              <div class="index-advantages__img index-advantages__img_2">
                <div class="index-advantages__name">
                  Собственное производство
                </div>
              </div>
            </div>
            <div class="index-advantages__item">
              <div class="index-advantages__img index-advantages__img_3">
                <div class="index-advantages__name">Запасные подарки</div>
              </div>
            </div>
            <div class="index-advantages__item">
              <div class="index-advantages__img index-advantages__img_4">
                <div class="index-advantages__name">
                  Надежная доставка по всей России
                </div>
              </div>
            </div>
            <div class="index-advantages__item">
              <div class="index-advantages__img index-advantages__img_5">
                <div class="index-advantages__name">
                  Персональный <br >менеджер
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="index-advantages__carousel">
          <no-ssr>
            <swiper ref="mySwiper" :options="slider">
              <swiper-slide>
                <div class="index-advantages__item">
                  <div class="index-advantages__img index-advantages__img_1">
                    <div class="index-advantages__name">Ручная работа</div>
                  </div>
                </div>
              </swiper-slide>
              <swiper-slide>
                <div class="index-advantages__item">
                  <div class="index-advantages__img index-advantages__img_2">
                    <div class="index-advantages__name">
                      Собственное производство
                    </div>
                  </div>
                </div>
              </swiper-slide>
              <swiper-slide>
                <div class="index-advantages__item">
                  <div class="index-advantages__img index-advantages__img_3">
                    <div class="index-advantages__name">Запасные подарки</div>
                  </div>
                </div>
              </swiper-slide>

              <swiper-slide>
                <div class="index-advantages__item">
                  <div class="index-advantages__img index-advantages__img_4">
                    <div class="index-advantages__name">
                      Надежная доставка по всей России
                    </div>
                  </div>
                </div>
              </swiper-slide>

              <swiper-slide>
                <div class="index-advantages__item">
                  <div class="index-advantages__img index-advantages__img_5">
                    <div class="index-advantages__name">
                      Персональный <br />менеджер
                    </div>
                  </div>
                </div>
              </swiper-slide>

              <div slot="pagination" class="swiper-pagination" />
            </swiper>
          </no-ssr>
        </div>
      </div>
    </section>
    <footer class="footer">
      <div class="container">
        <div class="footer__inner">
          <div class="footer__head">
            <div src="img/logo.png" alt="Happy Partner" class="footer__logo" />
            <div class="footer__social-list">
              <a
                href="#"
                class="footer__social-icon footer__social-icon_vk"
              /><a
                href="#"
                class="footer__social-icon footer__social-icon_inst"
              /><a
                href="#"
                class="footer__social-icon footer__social-icon_fb"
              /><a
                href="#"
                class="footer__social-icon footer__social-icon_ok"
              /><a
                href="#"
                class="footer__social-icon footer__social-icon_tw"
              />
            </div>
          </div>
          <a
            href="https://happyfriend.ru/"
            target="_blank"
            class="footer__gift hidden-768"
          >
            <div class="footer__gift-img" />
            <div class="footer__gift-text">Подарки в розницу</div>
          </a>
          <div class="footer__body">
            <div class="footer__lists">
              <div class="footer__list">
                <div class="footer__list-title">Наши подарки</div>
                <ul class="footer__ul">
                  <li
                    v-for="item in footerMenu.presents"
                    :key="item.id"
                    class="footer__li"
                  >
                    <nuxt-link :to="item.link">{{ item.text }}</nuxt-link>
                  </li>
                </ul>
              </div>
              <div class="footer__list">
                <div class="footer__list-title">Как мы работаем</div>
                <ul class="footer__ul">
                  <li v-for="item in footerMenu.work" :key="item.id">
                    <nuxt-link :to="item.link" class="footer__li">{{ item.text }}</nuxt-link>
                  </li>
                </ul>
              </div>
              <div class="footer__list">
                <div class="footer__list-title">Сотрудничество</div>
                <ul class="footer__ul">
                  <li v-for="item in footerMenu.sotr" :key="item.id">
                    <nuxt-link :to="item.link" class="footer__li">{{ item.text }}</nuxt-link>
                  </li>
                </ul>
              </div>
            </div>
            <div class="footer__address">
              <div class="footer__list footer__list_address">
                <div class="footer__list-title">Санкт-Петербург</div>
                <ul class="footer__ul footer__ul_address">
                  <li class="footer__li footer__li_address">
                    +7 (812) 648-21-86
                  </li>
                  <li class="footer__li footer__li_address">
                    +7 (800) 333-12-86 - бесплатно
                  </li>
                  <li class="footer__li footer__li_address">
                    194044, ул. Гельсингфорсская, 3, лестница 8, 5 этаж.<br >На
                    территории завода <br >«Красная нить». <br >Ст. м.
                    Выборгская.
                  </li>
                  <li class="footer__li footer__li_address">
                    Пн. – Пт.: 9:00 – 18:00
                  </li>
                </ul>
              </div>
              <div class="footer__list footer__list_address">
                <div class="footer__list-title">Москва</div>
                <ul class="footer__ul footer__ul_address">
                  <li class="footer__li footer__li_address">
                    +7 (495) 215-11-34
                  </li>
                  <li class="footer__li footer__li_address">
                    +7 (800) 333-12-86 - бесплатно
                  </li>
                  <li class="footer__li footer__li_address">
                    107140, ул. Верхняя Красносельская, д.2., 3 этаж.<br >Ст.
                    м. "Красносельская". <br >Для связи на месте <br >+7 (499)
                    503-06-42
                  </li>
                  <li class="footer__li footer__li_address">
                    Пн. – Пт. 9:00 – 19:00
                  </li>
                </ul>
              </div>
              <label for="footer__search" class="footer__search hidden-768">
                <form @submit.prevent="searchSubmit">
                  <button type="submit" class="footer__search-icon"></button>
                  <input
                    id="footer__search"
                    type="text"
                    placeholder="Поиск по сайту"
                    class="footer__search-input"
                    v-model="search"
                  >
                </form>
              </label>
            </div>
          </div>
          <div class="footer__accordion">
            <div class="accordion">
              <div class="accordion__inner">
                <div class="accordion__item">
                  <div class="accordion__head">
                    <div class="accortion__title">Наши подарки</div>
                    <div class="accordion__button" />
                  </div>
                  <div class="accordion__body">
                    <ul class="footer__ul">
                      <li>
                        <a href="#" class="footer__li">Разработка подарков</a>
                      </li>
                      <li><a href="#" class="footer__li">Для партнеров</a></li>
                      <li><a href="#" class="footer__li">Из дерева</a></li>
                      <li><a href="#" class="footer__li">Из ткани</a></li>
                      <li><a href="#" class="footer__li">Из фетра</a></li>
                      <li>
                        <a href="#" class="footer__li">Печенье с логотипом</a>
                      </li>
                      <li><a href="#" class="footer__li"> На новый год</a></li>
                      <li>
                        <a href="#" class="footer__li">Детям в новый год</a>
                      </li>
                      <li>
                        <a href="#" class="footer__li">Слово пасечника</a>
                      </li>
                      <li><a href="#" class="footer__li">Эусклюзивные</a></li>
                      <li><a href="#" class="footer__li">Чай в подарок</a></li>
                      <li><a href="#" class="footer__li">Кофе в поарок</a></li>
                    </ul>
                  </div>
                </div>
                <div class="accordion__item">
                  <div class="accordion__head">
                    <div class="accortion__title">Как мы работаем</div>
                    <div class="accordion__button" />
                  </div>
                  <div class="accordion__body">
                    <ul class="footer__ul">
                      <li><a href="#" class="footer__li">О компании</a></li>
                      <li>
                        <a href="#" class="footer__li">Доставка и оплата</a>
                      </li>
                      <li><a href="#" class="footer__li">Отзывы</a></li>
                      <li><a href="#" class="footer__li">Контакты</a></li>
                      <li>
                        <a href="#" class="footer__li">Новости и статьи</a>
                      </li>
                      <li><a href="#" class="footer__li">Вакансии</a></li>
                    </ul>
                  </div>
                </div>
                <div class="accordion__item">
                  <div class="accordion__head">
                    <div class="accortion__title">Сотрудничество</div>
                    <div class="accordion__button" />
                  </div>
                  <div class="accordion__body">
                    <ul class="footer__ul">
                      <li><a href="#" class="footer__li">Стать дилером</a></li>
                      <li><a href="#" class="footer__li">Поставщикам</a></li>
                      <li>
                        <a href="#" class="footer__li">Рекламным агентствам</a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div class="accordion__item">
                  <div class="accordion__head">
                    <div class="accortion__title">Санкт-Петербург</div>
                    <div class="accordion__button" />
                  </div>
                  <div class="accordion__body">
                    <ul class="footer__ul footer__ul_address">
                      <li class="footer__li footer__li_address">
                        +7 (812) 648-21-86
                      </li>
                      <li class="footer__li footer__li_address">
                        +7 (800) 333-12-86 - бесплатно
                      </li>
                      <li class="footer__li footer__li_address">
                        194044, ул. Гельсингфорсская, 3, лестница 8, 5 этаж.<br >На
                        территории завода <br >«Красная нить». <br >Ст. м.
                        Выборгская.
                      </li>
                      <li class="footer__li footer__li_address">
                        Пн. – Пт.: 9:00 – 18:00
                      </li>
                    </ul>
                  </div>
                </div>
                <div class="accordion__item">
                  <div class="accordion__head">
                    <div class="accortion__title">Москва</div>
                    <div class="accordion__button" />
                  </div>
                  <div class="accordion__body">
                    <ul class="footer__ul footer__ul_address">
                      <li class="footer__li footer__li_address">
                        +7 (495) 215-11-34
                      </li>
                      <li class="footer__li footer__li_address">
                        +7 (800) 333-12-86 - бесплатно
                      </li>
                      <li class="footer__li footer__li_address">
                        107140, ул. Верхняя Красносельская, д.2., 3 этаж.<br >Ст.
                        м. "Красносельская". <br >Для связи на месте <br >+7
                        (499) 503-06-42
                      </li>
                      <li class="footer__li footer__li_address">
                        Пн. – Пт. 9:00 – 19:00
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <label for="footer__search" class="footer__search hidden visible-768">
            <form @submit.prevent="searchSubmit">
              <button type="submit" class="footer__search-icon"></button>
              <input
                id="footer__search"
                type="text"
                placeholder="Поиск по сайту"
                class="footer__search-input"
                v-model="search"
              >
            </form>
          </label>
            <a href="#" class="footer__gift hidden visible-768">
            <div class="footer__gift-img" />
            <div class="footer__gift-text">Подарки в розницу</div>
          </a>
        </div>
      </div>
      <div class="footer__copyright">
        <div class="container">
          &copy; 2010-2018 &#8226; Все права защищены &#8226; Happy Partner.
          Авторские корпоративные подарки собственного производства.
          <br >Комплектация подарка может отличаться от изображения. Информация
          на сайте не является публичной офертой. Цены указаны без учета НДС.
        </div>
      </div>
    </footer>
    <!--END footer-->
  </div>
</template>

<script>
import axios from "axios"

export default {
  data() {
    return {
      footerMenu: [],
      seo: [],
      slider: {
        loop: true,
        slidesPerView: 2
      },
      name: "",
      email: "",
      formSubmited: false,
      search: ''
    }
  },
  created() {
    axios
      .get("http://5.23.53.82/api/footer/")
      .then(response => (this.footerMenu = response.data.menu))
    axios
      .get("http://5.23.53.82/api/main/")
      .then(response => (this.seo = response.data.SEO))
  },
  methods: {
    submitForm: function() {
      axios.get(
        `http://5.23.53.82/api/phone-call/?add=y&email=${this.email}&name=${
          this.name
        }`
      )
      this.formSubmited = true
    },
    searchSubmit: function(){
      this.$router.push(`/search/?q=${this.search}`);
    }
  }
}
</script>

<style>
.footer__li_address {
  color: #a2a2a1;
  font-weight: 300;
  line-height: 1.25;
}
.index-form__form {
  position: relative;
}
.thanks {
  position: absolute;
  top: 20px;
  opacity: 0;
  transition: all 0.3s;
  visibility: hidden;
}
.submited .index-form__input {
  opacity: 0;
  transition: all 0.3s;
}
.submited .index-form__submit input {
  pointer-events: none;
}
.submited .thanks {
  opacity: 1;
  visibility: visible;
}
.footer__gift-img {
  background: url("/img/hp-logo.png");
  background-size: cover;
  height: 64px;
}
.index-form__submit input {
  width: 250px;
}
.index-advantages__text{
  width: 100%;
  column-count: 2;
}
.index-advantages__text a{
  color: #f6773e
}
.index-advantages__text h1{
  font-size: 26px;
}
.index-advantages__item{
  width: 20%;
}
</style>
