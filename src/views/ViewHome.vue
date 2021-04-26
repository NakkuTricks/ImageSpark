<template>
  <section class="view-home">
    <base-title class="view-home__title visually-hidden">
      <template v-slot>Домашняя страница:</template>
    </base-title>
    <router-link class="view-home__link" :to="{ name: 'users' }"
      >Перейти на страницу пользователей</router-link
    >
  </section>
</template>

<script>
import BaseTitle from "../components/Base/BaseTitle";
export default {
  name: "ViewHome",
  components: {
    BaseTitle,
  },
};
</script>

<style lang="scss"></style>
