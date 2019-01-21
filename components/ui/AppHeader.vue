<template>
  <!--BEGIN header-->
  <header class="header header_light">
    <div class="container">
      <div class="header__inner">
        <nuxt-link to="/">
          <div class="header__logo  header__logo_light" />
        </nuxt-link>
        <div class="header__links">
          <nuxt-link to="/how-to-order" class="header__link">Об оплате и доставке</nuxt-link>
          <nuxt-link to="/contacts" class="header__link">Контакты и карта</nuxt-link>
        </div>
        <div class="header__schedule">
          <div class="header__date">Пн - Вс</div>
          <div class="header__time">10:00 - 24:00</div>
        </div>
        <div class="header__contacts">
          <a href="tel:+78126482186" class="header__phone">{{ header.phone }}</a>
          <a href="mailto:Info@happypartner.ru" class="header__mail">{{ header.mail }}</a>
        </div>
        <a href="https://happyfriend.ru/" target="_blank" class="header__gift">
          <div class="header__gift-img" />
          <div class="header__gift-text">Подарки в розницу</div>
        </a>
        <div class="header__burger" />
      </div>
    </div>
    <div class="header__sidebar">
      <div class="header__links header__links_sidebar">
        <nuxt-link to="/how-to-order" class="header__link">Об оплате и доставке</nuxt-link>
        <nuxt-link to="/contacts" class="header__link">Контакты и карта</nuxt-link>
      </div>
      <div class="header__contacts header__contacts_sidebar">
        <a href="tel:+78126482186" class="header__phone header__phone_sidebar"
        >+7 (812) 648-21-86</a
        ><a
          href="mailto:Info@happypartner.ru"
          class="header__mail header__mail_sidebar"
        >Info@happypartner.ru</a
        >
      </div>
      <div class="header__schedule header__schedule_sidebar">
        <div class="header__date">Пн - Вс</div>
        <div class="header__time">10:00 - 24:00</div>
      </div>
      <a
        href="https://happyfriend.ru/"
        target="_blank"
        class="header__gift header__gift_sidebar"
      >
        <div class="header__gift-img" />
        <div class="header__gift-text">Подарки в розницу</div>
      </a>
    </div>
  </header>
  <!--END header-->
</template>

<script>
import axios from "axios"
export default {
  data() {
    return {
      header: []
    }
  },
  created() {
    axios
      .get("http://5.23.53.82/api/header/")
      .then(response => (this.header = response.data))
  }
}
</script>

<style>
.header__gift-img {
  background: url("/img/hp-logo.png");
  background-size: cover;
}
</style>
