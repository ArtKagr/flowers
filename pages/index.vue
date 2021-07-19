<template>
   <div class="page">
     <div class="agile-slider">
       <agile :autoplay="true" :autoplaySpeed="3000" :dots="false" :infinite="true" class="slider">
         <div class="slide">
           <img class="page-slider-image" src="../assets/images/slider.jpg" alt="slider" />
         </div>
         <div class="slide">
           <img class="page-slider-image" src="../assets/images/slider.jpg" alt="slider" />
         </div>
         <template slot="prevButton"><CircleRowLeft class="circle_row_left" /></template>
         <template slot="nextButton"><CircleRowRight class="circle_row_right" /></template>
       </agile>
     </div>
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
      <agile :autoplay="true" :autoplaySpeed="3000" :dots="false" :infinite="true" class="slider">
        <div class="slide">
          <div class="page-subscription-container">
            <a
              v-for="subscription in subscriptions"
              :key="subscription.flag"
              href="#current_card"
              class="custom_link"
              @click="setActiveSubscriptionFlag(subscription.flag)"
            >
              <div
                class="page-subscription-container-card"
                :class="`-${subscription.flag}`"
              >
                <div class="page-subscription-container-card-image">
                  <div class="page-subscription-container-card-image-sale">
                <span
                  class="page-subscription-container-card-image-sale-title"
                  v-text="'ВЫ ЭКОНОМИТЕ'"
                />
                    <span
                      class="page-subscription-container-card-image-sale-cost"
                      v-text="`${subscription.discount} ₽`"
                    />
                  </div>
                </div>
                <div class="page-subscription-container-card-description">
              <span
                class="page-subscription-container-card-description-title"
                v-text="subscription.title"
              />
                  <span
                    class="page-subscription-container-card-description-subtitle"
                    v-text="subscription.subtitle"
                  />
                  <div class="page-subscription-container-card-description-container">
                <span
                  class="page-subscription-container-card-description-container-old_price"
                  v-text="`${subscription.old_price} ₽`"
                />
                    <div class="page-subscription-container-card-description-container-new_price">
                  <span
                    class="page-subscription-container-card-description-container-new_price-title"
                    v-text="`${subscription.new_price} ₽`"
                  />
                      <span
                        class="page-subscription-container-card-description-container-new_price-subtitle"
                        v-text="'за 10 доставок в течение года'"
                      />
                    </div>
                  </div>
                  <b-button
                    variant="outline-primary"
                    class="page-subscription-container-card-description-button"
                    v-text="'В корзину'"
                  />
                </div>
              </div>
            </a>
          </div>
        </div>
        <template slot="prevButton"><CircleRowLeft class="circle_row_left" /></template>
        <template slot="nextButton"><CircleRowRight class="circle_row_right" /></template>
      </agile>
      <div class="page-subscription-current_card flex-column" id="current_card">
        <h2
          class="page-subscription-title"
          v-text="activeSubscription.title"
        />
        <div class="d-flex">
          <div class="page-subscription-current_card-gallery">
            <agile
              :autoplay="true"
              :autoplaySpeed="3000"
              :dots="false"
              :infinite="true"
              class="slider -subscription"
            >
              <div class="slide">
                <div class="page-subscription-current_card-gallery-main_photo" />
              </div>
              <div class="slide">
                <div class="page-subscription-current_card-gallery-main_photo" />
              </div>
              <template slot="prevButton"><CircleRowLeft class="circle_row_left -description" /></template>
              <template slot="nextButton"><CircleRowRight class="circle_row_right  -description" /></template>
            </agile>
            <div class="page-subscription-current_card-gallery-photos">
              <div class="page-subscription-current_card-gallery-photos-photo" />
              <div class="page-subscription-current_card-gallery-photos-photo" />
              <div class="page-subscription-current_card-gallery-photos-photo" />
            </div>
          </div>
          <Options />
        </div>
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
<!--          <span v-if="status === 'success'" class="mt-2">Данные получены</span>-->
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
        <agile
          :autoplay="true"
          :autoplaySpeed="3000"
          :dots="false"
          :infinite="true"
          class="slider -reviews"
        >
          <div class="slide">
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
          <template slot="prevButton"><CircleRowLeft class="circle_row_left -reviews" /></template>
          <template slot="nextButton"><CircleRowRight class="circle_row_right  -reviews" /></template>
        </agile>
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
import { VueAgile } from 'vue-agile'

export default {
  components: {
    ForthXs,
    ThirdXs,
    agile: VueAgile,
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
      isSuccessOrderShown: false,
      activeSubscriptionFlag: 'first',
      subscriptions: [
        {
          title: 'Standard',
          subtitle: 'Lorem ipsum ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
          old_price: 3900,
          new_price: 5900,
          discount: 3760,
          flag: 'first'
        },
        {
          title: 'Standard 1',
          discount: 3760,
          subtitle: 'Lorem ipsum ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
          old_price: 3900,
          new_price: 5900,
          flag: 'second'
        },
        {
          title: 'Standard 2',
          discount: 3760,
          subtitle: 'Lorem ipsum ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
          old_price: 3900,
          new_price: 5900,
          flag: 'third'
        }
      ]
    }
  },
  created() {
    this.currentSlider = this.slider[0]
  },
  computed: {
    status() {
      return this.$store.getters['data/getStatus']
    },
    activeSubscription () {
      return this.subscriptions.find(subscription => subscription.flag === this.activeSubscriptionFlag)
    },
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
    },
    setActiveSubscriptionFlag (flag) {
      this.activeSubscriptionFlag = flag
    }
  }
}
</script>
<style lang="scss">

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

    @media screen and (max-width: 769px) {
      margin-bottom: 16px;
    }
  }

  &-hint {
    font-size: 16px;
    color: #8F9199;
    text-align: right;
    margin-top: 18px;
    margin-bottom: 12px;

    @media screen and (max-width: 769px) {
      text-align: center;
      order: 4;
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

  &.-description {
    margin-left: 34px;

    @media screen and (max-width: 769px) {
      margin-left: 0;
    }
  }

  &.-reviews {
    margin-left: 34px;

    @media screen and (max-width: 769px) {
      margin-left: 40px;
    }
  }

  @media screen and (max-width: 769px) {
    margin-left: 40px;
    transform: translateY(-20px);
  }

}

.circle_row_right {
  margin-left: -45px;
  cursor: pointer;
  z-index: 100;

  @media screen and (max-width: 769px) {
    margin-right: 40px;
    transform: translateY(-20px);
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
.agile__nav-button {
  border: 0;
  background: none;
  position: absolute;
  top: 40%;
  &.agile__nav-button--next {
    right: -50px;
  }
  &.agile__nav-button--prev {
    left: -50px;
  }
}
</style>
