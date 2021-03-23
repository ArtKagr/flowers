<template>
  <div class="page">
    <section class="page-slider">
      <img src="../assets/images/slider.jpg" height="468" width="1201" alt="slider" />
    </section>
    <section class="page-steps">
      <h2 class="page-steps-title">Заголовок</h2>
      <div class="page-steps-container">
        <First />
        <Second />
        <Third />
        <Forth />
      </div>
    </section>
    <section class="page-video" />
    <section class="page-subscription">
      <h2 class="page-subscription-title">Выберите свою подписку</h2>
      <div class="page-subscription-container">
        <div class="page-subscription-container-card">
          <div class="page-subscription-container-card-image">
            <div class="page-subscription-container-card-image-sale">
              <span class="page-subscription-container-card-image-sale-title">ВЫ ЭКОНОМИТЕ</span>
              <span class="page-subscription-container-card-image-sale-cost">3 760 ₽</span>
            </div>
          </div>
          <div class="page-subscription-container-card-description">
            <span class="page-subscription-container-card-description-title">Standart</span>
            <span class="page-subscription-container-card-description-subtitle">
              Lorem ipsum ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </span>
            <div class="page-subscription-container-card-description-container">
              <span class="page-subscription-container-card-description-container-old_price">3 900 ₽</span>
              <div class="page-subscription-container-card-description-container-new_price">
                <span class="page-subscription-container-card-description-container-new_price-title">5 900 ₽</span>
                <span class="page-subscription-container-card-description-container-new_price-subtitle">за 10 доставок в течение года</span>
              </div>
            </div>
            <b-button>В корзину</b-button>
          </div>
        </div>
        <div class="page-subscription-container-card">
          <div class="page-subscription-container-card-image">
            <div class="page-subscription-container-card-image-sale">
              <span class="page-subscription-container-card-image-sale-title">ВЫ ЭКОНОМИТЕ</span>
              <span class="page-subscription-container-card-image-sale-cost">3 760 ₽</span>
            </div>
          </div>
          <div class="page-subscription-container-card-description">
            <span class="page-subscription-container-card-description-title">Standart</span>
            <span class="page-subscription-container-card-description-subtitle">
              Lorem ipsum ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </span>
            <div class="page-subscription-container-card-description-container">
              <span class="page-subscription-container-card-description-container-old_price">3 900 ₽</span>
              <div class="page-subscription-container-card-description-container-new_price">
                <span class="page-subscription-container-card-description-container-new_price-title">5 900 ₽</span>
                <span class="page-subscription-container-card-description-container-new_price-subtitle">за 10 доставок в течение года</span>
              </div>
            </div>
            <b-button>В корзину</b-button>
          </div>
        </div>
        <div class="page-subscription-container-card">
          <div class="page-subscription-container-card-image">
            <div class="page-subscription-container-card-image-sale">
              <span class="page-subscription-container-card-image-sale-title">ВЫ ЭКОНОМИТЕ</span>
              <span class="page-subscription-container-card-image-sale-cost">3 760 ₽</span>
            </div>
          </div>
          <div class="page-subscription-container-card-description">
            <span class="page-subscription-container-card-description-title">Standart</span>
            <span class="page-subscription-container-card-description-subtitle">
              Lorem ipsum ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </span>
            <div class="page-subscription-container-card-description-container">
              <span class="page-subscription-container-card-description-container-old_price">3 900 ₽</span>
              <div class="page-subscription-container-card-description-container-new_price">
                <span class="page-subscription-container-card-description-container-new_price-title">5 900 ₽</span>
                <span class="page-subscription-container-card-description-container-new_price-subtitle">за 10 доставок в течение года</span>
              </div>
            </div>
            <b-button>В корзину</b-button>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import First from "../components/icons/First"
import Second from "../components/icons/Second";
import Third from "../components/icons/Third";
import Forth from "../components/icons/Forth";
export default {
  components: {Forth, Third, Second, First}
}
</script>
