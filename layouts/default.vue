<template>
  <div class="d-flex flex-column w-100 overflow-hidden">
    <Header />
    <Nuxt />
    <Footer />
  </div>
</template>

<style lang="scss">
@import '../assets/scss/app.scss';
</style>
<script>
import Header from "../components/Header"
import Footer from "../components/Footer";
export default {
  components: { Footer, Header },
}
</script>
