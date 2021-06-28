<template>
  <div>
  <svg width="21" height="15" viewBox="0 0 21 15" fill="none" xmlns="http://www.w3.org/2000/svg" @click="showMenu">
    <rect y="14" width="21" height="1" rx="0.5" fill="#624F3F"/>
    <rect x="0.25" y="7.25" width="20.5" height="0.5" rx="0.25" fill="#624F3F" stroke="#624F3F" stroke-width="0.5"/>
    <rect width="21" height="1" rx="0.5" fill="#624F3F"/>
  </svg>
  <ul class="header-menu-mobile" v-show="showMenuUl">
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
    <li class="close-menu" @click="closeMenu">×</li>
  </ul>
  </div>
</template>
<script>
export default {
  name: "BurgerMenu",
  data() {
    return {
      showMenuUl: false,
    }
  },
  methods: {
    showMenu() {
      this.showMenuUl = true;
    },
    closeMenu() {
      this.showMenuUl = false;
    },
  }
}
</script>
<style lang="scss" scoped>
.close-menu{
  font-size: 40px;
  position: absolute;
  right: 5px;
  top: 0;
  list-style: none;
}
.header-menu-mobile {
  width: 104%;
  position: absolute;
  background: #fff;
  z-index: 2;
  padding: 60px 20px;
  font-size: 24px;
  left: 0;
  top: 0;
  height: 100%;
}
</style>
