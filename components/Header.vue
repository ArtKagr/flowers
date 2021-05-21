<template>
  <div class="header" id="header">
    <BurgerMenu class="burger_menu" />
    <nuxt-link to="/">
      <Logo />
    </nuxt-link>
    <ul class="header-menu">
      <li class="header-menu-item">
        <a class="header-menu-item-link" href="#rate">Тарифы</a>
      </li>
      <li class="header-menu-item">
        <a class="header-menu-item-link" href="#reviews">Отзывы</a>
      </li>
      <li class="header-menu-item">
        <a class="header-menu-item-link" href="#think">Что нужно знать</a>
      </li>
      <li class="header-menu-item">
        <a class="header-menu-item-link" href="#best_flowers">Галерея</a>
      </li>
    </ul>
    <div class="header-contacts">
      <span class="header-contacts-phone">+7 (988) 354 44 44</span>
      <b-button variant="outline-primary" class="header-contacts-button custom_button">Обратный звонок</b-button>
    </div>
    <Basket class="basket" />
    <Phone class="phone" />

  </div>
</template>

<script>
import Logo from "./Logo";
import BurgerMenu from "./icons/BurgerMenu";
import Basket from "./icons/Basket";
import Phone from "./icons/Phone";
export default {
name: "Header",
  components: {Phone, Basket, BurgerMenu, Logo},
}
</script>
<style lang="scss" scoped>
.burger_menu {
  margin-right: 12px;

  @media screen and (min-width: 768px) {
    display: none;
  }
}

.basket {
  margin-right: 12px;

  @media screen and (min-width: 768px) {
    display: none;
  }
}

.phone {
  @media screen and (min-width: 768px) {
    display: none;
  }
}

.custom_button {
  padding: 8px 21px;
  font-weight: 500;
  font-size: 16px;
}
</style>
