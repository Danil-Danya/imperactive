<template>
  <navbar-vue></navbar-vue>
  <router-view></router-view>
  <footer-vue></footer-vue>
</template>

<script>
import navbarVue from './components/layout/navbar.vue';
import indexVue from './views/index.vue';
import footerVue from './components/layout/footer.vue';
import comments from './views/comments.vue';
import admin from './views/admin.vue';

export default {
  components: {
    navbarVue,
    indexVue,
    comments,
    footerVue,
    admin
  }
}
</script>

<style lang="scss">
  @import '@/assets/styles/all.scss';
</style>
