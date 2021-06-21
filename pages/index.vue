<template>
  <div class="page">
    <section class="page-slider">
      <div class="d-flex align-items-center">
        <div style="z-index: 100;" @click="toggleSlider('last')">
          <CircleRowLeft class="circle_row_left" />
        </div>
        <img v-if="currentSlider === 'slider'" class="page-slider-image" src="../assets/images/slider.jpg" alt="slider" />
        <img v-else-if="currentSlider === 'flower_1'" class="page-slider-image" src="../assets/images/IMG_6593 1.jpg" alt="flower_1" />
        <img v-else-if="currentSlider === 'flower_2'" class="page-slider-image" src="../assets/images/IMG_5294 2.jpg" alt="flower_2" />
        <img class="page-slider-xs_image" src="../assets/images/Frame 7.jpg" alt="slider_xs" />
        <div style="z-index: 100;" @click="toggleSlider('next')">
          <CircleRowRight class="circle_row_right" />
        </div>
      </div>
    </section>
    <section class="page-steps">
      <h2 class="page-steps-title">Заголовок</h2>
      <div class="page-steps-container">
        <First class="step" />
        <FirstXs class="step-xs" />
        <Second class="step" />
        <SecondXs class="step-xs" />
        <Third class="step" />
        <ThirdXs class="step-xs" />
        <Forth class="step" />
        <ForthXs class="step-xs" />
      </div>
    </section>
    <section class="page-video" />
    <section class="page-subscription" id="rate">
      <h2 class="page-subscription-title">Выберите свою подписку</h2>
      <div class="page-subscription-container">
        <a href="#current_card" class="custom_link">
          <div class="page-subscription-container-card -first">
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
        </a>
        <a href="#current_card" class="custom_link">
          <div class="page-subscription-container-card -second">
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
        </a>
        <a href="#current_card" class="custom_link">
          <div class="page-subscription-container-card -third">
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
        </a>
      </div>
      <div class="page-subscription-current_card" id="current_card">
        <div class="page-subscription-current_card-gallery">
          <div class="page-subscription-current_card-gallery-main_photo" />
          <div class="page-subscription-current_card-gallery-photos">
            <div class="page-subscription-current_card-gallery-photos-photo" />
            <div class="page-subscription-current_card-gallery-photos-photo" />
            <div class="page-subscription-current_card-gallery-photos-photo" />
          </div>
        </div>
        <Options />
      </div>
      <div class="page-subscription-registration">
        <span class="page-subscription-registration-hint">
          Вы можете сразу указать все даты доставок либо согласовать их позднее при звонке оператора
        </span>
        <div
          class="page-subscription-registration-purchases"
          @click="togglePurchasesList"
        >
          <span class="page-subscription-registration-purchases-title">
            Ваши доставки
          </span>
        </div>
        <div v-if="isPurchasesListShown" class="d-flex flex-column">
          <span class="custom_result">Тариф: Luxe 10 доставок за 12 месяцев</span>
          <div class="page-subscription-registration-delivery">
            <div class="page-subscription-registration-delivery-item">
              <div class="d-flex justify-content-center w-100 mb-3">
              <span class="page-subscription-registration-delivery-item-title">
                1 ДОСТАВКА
              </span>
              </div>
              <div class="page-subscription-registration-delivery-item-container">
                <div class="page-subscription-registration-delivery-item-container-item">
                <span class="page-subscription-registration-delivery-item-container-item-title">Дата:
                  <span class="page-subscription-registration-delivery-item-container-item-value">27.04.2021</span>
                </span>
                  <span class="page-subscription-registration-delivery-item-container-item-title">Повод:
                  <span class="page-subscription-registration-delivery-item-container-item-value">День рождения</span>
                </span>
                  <span class="page-subscription-registration-delivery-item-container-item-title">Возраст:
                  <span class="page-subscription-registration-delivery-item-container-item-value">25 лет</span>
                </span>
                </div>
                <div class="page-subscription-registration-delivery-item-container-item">
                <span class="page-subscription-registration-delivery-item-container-item-title">Любимый цветок:
                  <span class="page-subscription-registration-delivery-item-container-item-value">Роза</span>
                </span>
                  <span class="page-subscription-registration-delivery-item-container-item-title">Любимый цвет:
                  <span class="page-subscription-registration-delivery-item-container-item-value">Красный</span>
                </span>
                </div>
              </div>
              <div class="page-subscription-registration-delivery-item-container">

              </div>

            </div>
            <div class="page-subscription-registration-delivery-item">
              <div class="d-flex justify-content-center w-100 mb-3">
              <span class="page-subscription-registration-delivery-item-title">
                2 ДОСТАВКА
              </span>
              </div>
              <div class="page-subscription-registration-delivery-item-container">
                <div class="page-subscription-registration-delivery-item-container-item">
                <span class="page-subscription-registration-delivery-item-container-item-title">Дата:
                  <span class="page-subscription-registration-delivery-item-container-item-value">27.04.2021</span>
                </span>
                  <span class="page-subscription-registration-delivery-item-container-item-title">Повод:
                  <span class="page-subscription-registration-delivery-item-container-item-value">День рождения</span>
                </span>
                  <span class="page-subscription-registration-delivery-item-container-item-title">Возраст:
                  <span class="page-subscription-registration-delivery-item-container-item-value">25 лет</span>
                </span>
                </div>
                <div class="page-subscription-registration-delivery-item-container-item">
                <span class="page-subscription-registration-delivery-item-container-item-title">Любимый цветок:
                  <span class="page-subscription-registration-delivery-item-container-item-value">Роза</span>
                </span>
                  <span class="page-subscription-registration-delivery-item-container-item-title">Любимый цвет:
                  <span class="page-subscription-registration-delivery-item-container-item-value">Красный</span>
                </span>
                </div>
              </div>
              <div class="page-subscription-registration-delivery-item-container">

              </div>

            </div>
          </div>
        </div>
        <span class="page-subscription-registration-cost">
          Стоимость:
          <span class="page-subscription-registration-cost-sum">
            9 900 ₽
          </span>
        </span>
        <div class="page-subscription-registration-button">
          <b-button
            variant="success"
            size="lg"
            class="page-subscription-registration-button-item"
            @click="fetchData">
            Оформить подписку
          </b-button>
          <span v-if="status === 'success'" class="mt-2">Данные получены</span>
        </div>
        <div v-if="subscribeFieldsShown" class="d-flex align-items-center w-100 mt-4 justify-content-center custom_item">
          <b-input placeholder="Имя*" style="width: 322px" class="custom_input" />
          <b-input placeholder="Номер телефона*" style="width: 322px" class="custom_input" />
          <b-button variant="success" size="md" class="custom_button" @click="acceptOrder">Подтвердить</b-button>
        </div>
        <div v-if="isSuccessOrderShown" class="congrats custom_item">
          <span class="congrats-text">Спасибо за подписку!</span>
          <span class="congrats-text">Ниже вы можете оплатить первую доставку или сразу весь тариф</span>
          <span class="congrats-hint">Оплатить сразу все со скидкой 5%</span>
          <div class="congrats-container custom_item">
            <b-button variant="outline-primary" class="custom_congrats_button_primary">Оплатить<br/> первую доставку</b-button>
            <b-button variant="success" class="custom_congrats_button">Оплатить<br/> весь тариф</b-button>
          </div>
        </div>

      </div>
    </section>
    <section class="page-reviews" id="reviews">
      <h2 class="page-reviews-title">Отзывы клиентов</h2>
      <div class="page-reviews-container">
        <div class="page-reviews-container-card -first">
          <div class="page-reviews-container-card-image" />
          <div class="page-reviews-container-card-description">
            anna_m Lorem ipsum dolor sit amet, consectetur adipiscing elit,
            sed do eiusmod  tempor ut labore et dolore magna consectetur
            adipiscing elit
            <span class="page-reviews-container-card-description-more">... ещё</span>
          </div>
        </div>
        <div class="page-reviews-container-card -second">
          <div class="page-reviews-container-card-image" />
          <div class="page-reviews-container-card-description">
            anna_m Lorem ipsum dolor sit amet, consectetur adipiscing elit,
            sed do eiusmod  tempor ut labore et dolore magna consectetur
            adipiscing elit
            <span class="page-reviews-container-card-description-more">... ещё</span>
          </div>
        </div>
        <div class="page-reviews-container-card -third">
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
    <section class="page-think" id="think">
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
    <section class="page-best_flowers" id="best_flowers">
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
import CircleRowLeft from "../components/icons/CircleRowLeft";
import CircleRowRight from "../components/icons/CircleRowRight";
import FirstXs from "../components/icons/FirstXs";
import SecondXs from "../components/icons/SecondXs";
import ThirdXs from "../components/icons/ThirdXs";
import ForthXs from "../components/icons/ForthXs";

export default {
  components: {
    ForthXs,
    ThirdXs,
    SecondXs,
    FirstXs, CircleRowRight, CircleRowLeft, Options, ChevronUp, ChevronBottom, Forth, Third, Second, First},
  data() {
    return {
      thinkItems: {
        first: false,
        second: false,
        third: false,
        forth: false,
        fifth: false
      },
      slider: [
        'slider',
        'flower_1',
        'flower_2'
      ],
      isPurchasesListShown: false,
      currentSlider: null,
      subscribeFieldsShown: false,
      isSuccessOrderShown: false
    }
  },
  created() {
    this.currentSlider = this.slider[0]
  },
  computed: {
    status() {
      return this.$store.getters['data/getStatus']
    }
  },
  methods: {
    toggleThinkItem(field) {
      this.thinkItems[field] = !this.thinkItems[field]
    },
    toggleSlider(flag) {
      if (this.slider.length && this.slider.length > 1 && this.slider.findIndex(slider => slider === this.currentSlider) !== 0 && flag === 'last') {
        this.currentSlider = this.slider[this.slider.findIndex(slider => slider === this.currentSlider) - 1]
      } else if (this.slider.length && this.slider.length > 1 && this.slider.findIndex(slider => slider === this.currentSlider) === 0 && flag === 'last') {
        this.currentSlider = this.slider[this.slider.length - 1]
      } else if (this.slider.findIndex(slider => slider === this.currentSlider) !== (this.slider.length - 1) && flag === 'next') {
        this.currentSlider = this.slider[this.slider.findIndex(slider => slider === this.currentSlider) + 1]
      } else if (this.slider.findIndex(slider => slider === this.currentSlider) === (this.slider.length - 1) && flag === 'next') {
        this.currentSlider = this.slider[0]
      }
    },
    fetchData() {
      this.$store.dispatch('data/fetchData')
      this.subscribeFlowers()
    },
    subscribeFlowers () {
      this.subscribeFieldsShown = !this.subscribeFieldsShown
    },
    togglePurchasesList () {
      this.isPurchasesListShown = !this.isPurchasesListShown
    },
    acceptOrder () {
      this.isSuccessOrderShown = !this.isSuccessOrderShown
    }
  }
}
</script>
<style lang="scss" scoped>

.step {
  @media screen and (max-width: 768px) {
    display: none
  }

  &-xs {
    @media screen and (min-width: 768px) {
      display: none
    }
  }
}

.custom_item {
  @media screen and (max-width: 769px) {
    flex-direction: column;
    justify-content: center;
  }
}

.custom_congrats_button_primary {
  padding: 10px 45px;
  font-size: 18px;
  font-weight: bold;
  width: 273px;

  @media screen and (max-width: 769px) {
    margin-bottom: 12px;
  }

}

.custom_congrats_button {
  padding: 10px 45px;
  font-size: 18px;
  font-weight: bold;
  width: 273px;
}

.congrats {
  display: flex;
  flex-direction: column;
  width: 600px;
  margin: 52px auto 0;

  @media screen and (max-width: 769px) {
    width: 100%;
    margin-bottom: 24px;
  }

  &-text {
    font-weight: 500;
    font-size: 18px;
    text-align: center;
  }

  &-hint {
    font-size: 16px;
    color: #8F9199;
    text-align: right;
    margin-top: 18px;
    margin-bottom: 12px;

    @media screen and (max-width: 769px) {
      text-align: center;
    }
  }

  &-container {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
}

.circle_row_left {
  margin-right: -45px;
  cursor: pointer;
  z-index: 100;

  @media screen and (max-width: 769px) {
    display: none;
  }

}

.circle_row_right {
  margin-left: -45px;
  cursor: pointer;
  z-index: 100;

  @media screen and (max-width: 769px) {
    display: none;
  }
}

.custom_result {
  font-size: 24px;
  font-weight: bold;
  text-align: center;
  margin-top: 27px;
  color: #319034;

  @media screen and (max-width: 769px) {
    font-size: 20px;
  }
}

.custom_input {
  border: none !important;
  background: #F5F5F5 !important;
  border-radius: 5px !important;
  margin-right: 16px;

  @media screen and (max-width: 769px) {
    margin-right: 0;
    margin-bottom: 12px;
  }

  &::placeholder {
    font-size: 14px !important;
    color: #8F9199 !important;
  }

  &:focus {
     box-shadow: none !important;
   }
}

.custom_button {
  padding: 4px 30px;
}
</style>
