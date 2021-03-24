<template>
  <div class="header">
    <Logo />
    <ul class="header-menu">
      <li class="header-menu-item">
        <a class="header-menu-item-link">Тарифы</a>
      </li>
      <li class="header-menu-item">
        <a class="header-menu-item-link">Отзывы</a>
      </li>
      <li class="header-menu-item">
        <a class="header-menu-item-link">Что нужно знать</a>
      </li>
      <li class="header-menu-item">
        <a class="header-menu-item-link">Галерея</a>
      </li>
    </ul>
    <div class="header-contacts">
      <span class="header-contacts-phone">+7 (988) 354 44 44</span>
      <b-button variant="outline-primary" class="custom_button">Обратный звонок</b-button>
    </div>
  </div>
</template>

<script>
import Logo from "./Logo";
export default {
name: "Header",
  components: {Logo}
}
</script>
<style lang="scss" scoped>
.custom_button {
  padding: 8px 21px;
  font-weight: 500;
  font-size: 16px;
}
</style>
