<template>
  <div class="d-flex align-items-center">
    <div class="first" @click="minus">-</div>
    <div class="second">{{currentValue}}</div>
    <div class="third" @click="plus">+</div>
  </div>
</template>

<script>
export default {
  name: "CustomCounter",
  data() {
    return {
      currentValue: 10
    }
  },
  methods: {
    plus() {
      this.currentValue++;
    },
    minus() {
      this.currentValue--;
    },
  }
}
</script>
<style scoped>
  .first {
    padding: 10px 15px;
    background: #E1E1E1;
    border-radius: 5px 0 0 5px;
    cursor: pointer;
  }

  .second {
    padding: 10px;
    background: #F5F5F5;
  }

  .third {
    padding: 10px 15px;
    background: #E1E1E1;
    border-radius: 0 5px 5px 0;
    cursor: pointer;
  }
</style>
