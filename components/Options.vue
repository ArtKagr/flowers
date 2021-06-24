<template>
  <div class="page-subscription-current_card-options">
    <div class="d-flex justify-content-between mt-2 custom_width" style="width: 60%;">
      <span class="mr-2 mt-1">Количество доставок:</span>
      <custom-counter />
    </div>
    <div class="d-flex justify-content-between mt-2 custom_width" style="width: 60%;">
      <span class="mr-4 mt-1">Период:</span>
      <custom-select
        :current-values="[
          '6 месяцев',
          'месяц',
          'год'
        ]"
      />
    </div>
    <custom-select
      class="mt-2"
      :current-values="[
        '1 доставка',
        '2 доставка',
        '3 доставка',
        '4 доставка',
        '5 доставка'
      ]"
      title-color="green"
      :current-width="60"
    />
    <div class="d-flex w-100 mt-4 custom_calendar">
      <b-calendar hide-header />
    </div>
    <span class="custom_hint">
      Укажите повод и примерный возраст, чтобы наши флористы смогли подобрать лучшие варианты
    </span>
    <div class="d-flex align-items-center justify-content-between w-100 custom_row">
      <div class="d-flex align-items-center justify-content-between mt-3 mr-4 custom_row-item" style="width: 55%;">
        <span class="mr-4 mt-1">Повод:</span>
        <custom-select
          :current-values="[
          'Свадьба',
          'Юбилей',
          'День рождения'
        ]"
        />
      </div>
      <div class="d-flex align-items-center justify-content-between mt-3 custom_row-item" style="width: 45%;">
        <span class="mr-4 mt-1">Возраст:</span>
        <custom-select
          :current-values="[
            'до 14', '14-19', '20-27', '28-40', '41-55', '55-70', '70+'
          ]"
        />
      </div>
    </div>
    <span class="custom_hint -secondary">
      Точный адрес доставки, а также предпочитаемое время будут уточнены оператором за несколько дней до доставки
    </span>
    <div @click="toggleAdditionalWishes" class="d-flex mt-3">
      <span class="custom_point pointer">Дополнительные пожелания</span>
    </div>
    <template v-if="additionalWishes">
      <div class="d-flex align-items-center justify-content-between w-100 mt-3">
        <span class="mr-4 mt-1" style="width: 40%;">Любимый цветок:</span>
        <custom-select
          :current-values="[
          'Незабудка',
          'Роза',
          'Ромашка'
        ]"
        />
      </div>
      <div class="d-flex align-items-center justify-content-between w-100 mt-3">
        <span class="mr-4 mt-1" style="width: 40%;">Любимый цвет:</span>
        <custom-select
          :current-values="[
          'Синий',
          'Красный',
          'Белый'
        ]"
        />
      </div>
      <div class="d-flex align-items-center justify-content-between w-100 mt-3">
        <span class="mr-4 mt-1" style="width: 40%;">Доп. поле:</span>
        <custom-select
          :current-values="[
          'Вариант 1',
          'Вариант 2',
          'Вариант 3'
        ]"
        />
      </div>
    </template>
    <div class="d-flex align-items-center mt-4 pointer" @click="toggleValue">
      <CheckboxChecked
        v-if="useAllPurchase"
        variant="success"
        class="h3 mb-0 mr-3"

      />
      <Checkbox
        v-else
        class="h3 mb-0 mr-3"
      />
      <span>Применять ко всем доставкам</span>
    </div>
  </div>
</template>

<script>
import CustomSelect from "./CustomSelect";
import Checkbox from "./icons/Checkbox";
import CheckboxChecked from "./icons/CheckboxChecked";
import CustomCounter from "./CustomCounter";
export default {
  name: "Options",
  components: {CustomCounter, CheckboxChecked, Checkbox, CustomSelect },
  data() {
    return {
      useAllPurchase: false,
      additionalWishes: false
    }
  },
  methods: {
    toggleValue() {
      this.useAllPurchase = !this.useAllPurchase
    },
    toggleAdditionalWishes () {
      this.additionalWishes = !this.additionalWishes
    }
  }
}
</script>
<style scoped lang="scss">

.custom_calendar {
  @media screen and (max-width: 769px) {
    justify-content: center;
  }
}

.custom_row {
  @media screen and (max-width: 769px) {
    flex-direction: column;
  }

  &-item {
    @media screen and (max-width: 769px) {
      width: 100% !important;
      margin-right: 0 !important;
    }
  }
}

.custom_width {
  @media screen and (max-width: 769px) {
    width: 100% !important;
  }
}

.pointer {
  cursor: pointer;
}

.custom_hint {
  font-size: 14px;
  color: #000000;
  margin-top: 12px;
  line-height: 18px;

  &.-secondary {
    color: #8F9199;
  }
}

.custom_point {
  font-size: 18px;
  border-bottom: 1px dashed #000000;
}

.b-calendar {

  &.b-calendar-grid-caption {
    display: none !important;
  }

  &.small {
    display: none !important;
  }
}

</style>
