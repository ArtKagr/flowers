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
      <a href="tel:+79883544444"><span class="header-contacts-phone">+7 (988) 354 44 44</span></a>
      <b-button @click="showModal" variant="outline-primary" class="header-contacts-button custom_button">Обратный звонок</b-button>

      <b-modal ref="my-modal"  hide-footer title="Введите номер телефона">
        <form ref="form" @submit.stop.prevent="handleSubmit">
          <b-form-group
            invalid-feedback="Name is required"
            :state="nameState"
          >
            <b-form-input
              id="name-input"
              v-model="name"
              :state="nameState"
              required
            ></b-form-input>
          </b-form-group>
        </form>
        <b-button class="btn btn-outline-primary" style="padding: 10px" variant="outline-danger" block @click="hideModal">заказать звонок</b-button>
      </b-modal>
    </div>
    <img src="../assets/images/basket.png" class="basket">
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
  data() {
    return {
      name: '',
      nameState: null,
      submittedNames: []
    }
  },
  methods: {
    showModal() {
      this.$refs['my-modal'].show()
    },
    hideModal() {
      this.$refs['my-modal'].hide()
    },
    toggleModal() {
      // We pass the ID of the button that we want to return focus to
      // when the modal has hidden
      this.$refs['my-modal'].toggle('#toggle-btn')
    },
    checkFormValidity() {
      const valid = this.$refs.form.checkValidity()
      this.nameState = valid
      return valid
    },
    resetModal() {
      this.name = ''
      this.nameState = null
    },
    handleOk(bvModalEvt) {
      // Prevent modal from closing
      bvModalEvt.preventDefault()
      // Trigger submit handler
      this.handleSubmit()
    },
    handleSubmit() {
      // Exit when the form isn't valid
      if (!this.checkFormValidity()) {
        return
      }
      // Push the name to submitted names
      this.submittedNames.push(this.name)
      // Hide the modal manually
      this.$nextTick(() => {
        this.$bvModal.hide('modal-prevent-closing')
      })
    }
  }
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
