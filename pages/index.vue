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
            <b-button variant="outline-primary" class="page-subscription-container-card-description-button">В корзину</b-button>
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
            <b-button variant="outline-primary" class="page-subscription-container-card-description-button">В корзину</b-button>
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
            <b-button variant="outline-primary" class="page-subscription-container-card-description-button">В корзину</b-button>
          </div>
        </div>
      </div>
      <div class="page-subscription-current_card">
        <div class="page-subscription-current_card-gallery">
          <div class="page-subscription-current_card-gallery-main_photo" />
          <div class="page-subscription-current_card-gallery-photos">
            <div class="page-subscription-current_card-gallery-photos-photo" />
            <div class="page-subscription-current_card-gallery-photos-photo" />
            <div class="page-subscription-current_card-gallery-photos-photo" />
          </div>
        </div>
      <!--        <Options />-->
      </div>
      <div class="page-subscription-registration">
        <span class="page-subscription-registration-hint">
          Вы можете сразу указать все даты доставок либо согласовать их позднее при звонке оператора
        </span>
        <div class="page-subscription-registration-purchases">
          <span class="page-subscription-registration-purchases-title">
            Ваши доставки
          </span>
        </div>
        <span class="page-subscription-registration-cost">
          Стоимость:
          <span class="page-subscription-registration-cost-sum">
            9 900 ₽
          </span>
        </span>
        <div class="page-subscription-registration-button">
          <b-button variant="success" size="lg"  class="page-subscription-registration-button-item" >Оформить подписку</b-button>
        </div>
      </div>
    </section>
    <section class="page-reviews">
      <h2 class="page-reviews-title">Отзывы клиентов</h2>
      <div class="page-reviews-container">
        <div class="page-reviews-container-card">
          <div class="page-reviews-container-card-image" />
          <div class="page-reviews-container-card-description">
            anna_m Lorem ipsum dolor sit amet, consectetur adipiscing elit,
            sed do eiusmod  tempor ut labore et dolore magna consectetur
            adipiscing elit
            <span class="page-reviews-container-card-description-more">... ещё</span>
          </div>
        </div>
        <div class="page-reviews-container-card">
          <div class="page-reviews-container-card-image" />
          <div class="page-reviews-container-card-description">
            anna_m Lorem ipsum dolor sit amet, consectetur adipiscing elit,
            sed do eiusmod  tempor ut labore et dolore magna consectetur
            adipiscing elit
            <span class="page-reviews-container-card-description-more">... ещё</span>
          </div>
        </div>
        <div class="page-reviews-container-card">
          <div class="page-reviews-container-card-image" />
          <div class="page-reviews-container-card-description">
            anna_m Lorem ipsum dolor sit amet, consectetur adipiscing elit,
            sed do eiusmod  tempor ut labore et dolore magna consectetur
            adipiscing elit
            <span class="page-reviews-container-card-description-more">... ещё</span>
          </div>
        </div>
      </div>
    </section>
    <section class="page-think">
      <h2 class="page-think-title">Что нужно знать</h2>
      <div class="page-think-container">
        <div class="page-think-container-item">
          <div class="page-think-container-item-head" @click="toggleThinkItem('first')">
            <span class="page-think-container-item-head-title">
              Lorem ipsum ad minim veniam quis nostrud exercitation ullamco?
            </span>
            <ChevronUp v-if="thinkItems.first" class="page-think-container-item-head-chevron"/>
            <ChevronBottom v-else class="page-think-container-item-head-chevron"/>
          </div>
          <span v-if="thinkItems.first" class="page-think-container-item-head-description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Ut enim ad minim veniam, quis nostrud exercitation ullamco
            laboris nisi ut aliquip ex ea commodo consequat.
          </span>
        </div>
        <div class="page-think-container-item">
          <div class="page-think-container-item-head" @click="toggleThinkItem('second')">
            <span class="page-think-container-item-head-title">
              Lorem ipsum ad minim veniam quis nostrud exercitation ullamco?
            </span>
            <ChevronUp v-if="thinkItems.second" class="page-think-container-item-head-chevron"/>
            <ChevronBottom v-else class="page-think-container-item-head-chevron"/>
          </div>
          <span v-if="thinkItems.second" class="page-think-container-item-head-description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Ut enim ad minim veniam, quis nostrud exercitation ullamco
            laboris nisi ut aliquip ex ea commodo consequat.
          </span>
        </div>
        <div class="page-think-container-item">
          <div class="page-think-container-item-head" @click="toggleThinkItem('third')">
            <span class="page-think-container-item-head-title">
              Lorem ipsum ad minim veniam quis nostrud exercitation ullamco?
            </span>
            <ChevronUp v-if="thinkItems.third" class="page-think-container-item-head-chevron"/>
            <ChevronBottom v-else class="page-think-container-item-head-chevron"/>
          </div>
          <span v-if="thinkItems.third" class="page-think-container-item-head-description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Ut enim ad minim veniam, quis nostrud exercitation ullamco
            laboris nisi ut aliquip ex ea commodo consequat.
          </span>
        </div>
        <div class="page-think-container-item">
          <div class="page-think-container-item-head" @click="toggleThinkItem('forth')">
            <span class="page-think-container-item-head-title">
              Lorem ipsum ad minim veniam quis nostrud exercitation ullamco?
            </span>
            <ChevronUp v-if="thinkItems.forth" class="page-think-container-item-head-chevron"/>
            <ChevronBottom v-else class="page-think-container-item-head-chevron"/>
          </div>
          <span v-if="thinkItems.forth" class="page-think-container-item-head-description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Ut enim ad minim veniam, quis nostrud exercitation ullamco
            laboris nisi ut aliquip ex ea commodo consequat.
          </span>
        </div>
        <div class="page-think-container-item">
          <div class="page-think-container-item-head" @click="toggleThinkItem('fifth')">
            <span class="page-think-container-item-head-title">
              Lorem ipsum ad minim veniam quis nostrud exercitation ullamco?
            </span>
            <ChevronUp v-if="thinkItems.fifth" class="page-think-container-item-head-chevron"/>
            <ChevronBottom v-else class="page-think-container-item-head-chevron"/>
          </div>
          <span v-if="thinkItems.fifth" class="page-think-container-item-head-description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Ut enim ad minim veniam, quis nostrud exercitation ullamco
            laboris nisi ut aliquip ex ea commodo consequat.
          </span>
        </div>
      </div>
    </section>
    <section class="page-best_flowers">
      <h2 class="page-best_flowers-title">Лучшие цветы, выбранные для вас</h2>
      <div class="page-best_flowers-container">
        <div class="page-best_flowers-container-main_image" />
        <div class="page-best_flowers-container-column">
          <div class="page-best_flowers-container-column-photo" />
          <div class="page-best_flowers-container-column-photo" />
        </div>
        <div class="page-best_flowers-container-photo" />
        <div class="page-best_flowers-container-photo" />
        <div class="page-best_flowers-container-photo" />
        <div class="page-best_flowers-container-photo" />
        <div class="page-best_flowers-container-photo" />
        <div class="page-best_flowers-container-photo" />
      </div>
    </section>
  </div>
</template>

<script>
import First from "../components/icons/First"
import Second from "../components/icons/Second";
import Third from "../components/icons/Third";
import Forth from "../components/icons/Forth";
import ChevronBottom from "../components/icons/ChevronBottom";
import ChevronUp from "../components/icons/ChevronUp";
import Options from "../components/Options";
export default {
  components: {Options, ChevronUp, ChevronBottom, Forth, Third, Second, First},
  data() {
    return {
      thinkItems: {
        first: false,
        second: false,
        third: false,
        forth: false,
        fifth: false,
      }
    }
  },
  methods: {
    toggleThinkItem(field) {
      this.thinkItems[field] = !this.thinkItems[field]
    }
  }
}
</script>
