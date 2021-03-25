<template>
  <div class="custom_select" :style="`width: ${currentWidth}%;`">
    <div class="custom_select-body" @click="toggleVisible">
      <span :style="titleColor ? `color: ${titleColor}; font-weight: bold;` : '' ">{{ currentValue }}</span>
      <Rows class="custom_select-body-rows" />
    </div>
    <div v-show="isListVisible" class="custom_select-list">
      <span
        v-for="(item, key) in currentValues"
        :key="key"
        class="custom_select-list-item"
        @click="selectItem(item)"
      >
        {{ item }}
      </span>
    </div>
  </div>
</template>

<script>
import Rows from "./Rows";

export default {
  name: "CustomSelect",
  components: {Rows},
  props: {
    currentValues:{
      type: Array,
      default: null
    },
    titleColor: {
      type: String,
      default: null
    },
    currentWidth: {
      type: Number,
      default: 100
    }
  },
  watch: {
    currentValues(newValue) {
      this.currentValue = newValue[0]
    }
  },
  data() {
    return {
      currentValue: 'Нет данных',
      isListVisible: false
    }
  },

  methods: {
    hide() {
      this.isListVisible = false
    },
    toggleVisible() {
      this.isListVisible = !this.isListVisible
      let els = document.getElementsByClassName('custom_select-list');
      Array.from(els).forEach((el) => el.style.display = 'none')

    },
    selectItem(item) {
      this.currentValue = item
      this.isListVisible = false
    }
  },
  created() {
    this.currentValue = this.currentValues && this.currentValues.length ? this.currentValues[0] : 'Нет данных'
    window.addEventListener('click', (e) => {
      if (!this.$el.contains(e.target)){
        this.isListVisible = false
      }
    })
  }
}
</script>

<style lang="scss" scoped>
.custom_select {
  position: relative;
  @media screen and (max-width: 769px) {
    width: 100% !important;
  }

  &-body {
    display: flex;
    align-items: center;
    justify-content: space-between;
    background: #F5F5F5;
    border-radius: 5px;
    cursor: pointer;
    padding: 11px 26px;

    &-rows {
      cursor: pointer;
    }
  }

  &-list {
    display: flex;
    flex-direction: column;
    z-index: 100;
    position: absolute;
    max-height: 200px;
    overflow: auto;
    width: 100%;

    &-item {
      border-radius: 5px;
      padding: 14px 26px;
      cursor: pointer;

      &:nth-child(even) {
        background: #F5F5F5;
      }

      &:nth-child(odd) {
        background: #E1E1E1;
      }
    }
  }

}

</style>
